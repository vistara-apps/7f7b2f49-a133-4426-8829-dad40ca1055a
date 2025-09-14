import { x402Axios } from 'x402-axios';
import { base } from 'wagmi/chains';
import { PAYMENT_CONFIG } from './constants';

export interface PaymentRequest {
  amount: string; // Amount in USDC (6 decimals)
  recipient: string; // Recipient address
  description?: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionHash?: string;
  error?: string;
}

export class PaymentService {
  private x402Client;

  constructor() {
    this.x402Client = x402Axios.create({
      baseURL: PAYMENT_CONFIG.X402_BASE_URL,
      headers: {
        'Authorization': `Bearer ${PAYMENT_CONFIG.X402_API_KEY}`,
      },
    });
  }

  async initiatePayment(
    request: PaymentRequest,
    walletClient: any
  ): Promise<PaymentResponse> {
    try {
      // First, try to make the payment request via x402
      const response = await this.x402Client.post('/payments', {
        amount: request.amount,
        currency: 'USDC',
        network: 'base',
        recipient: request.recipient,
        description: request.description,
      });

      if (response.status === 402) {
        // Handle 402 Payment Required response
        const paymentDetails = response.data;

        if (!walletClient) {
          throw new Error('Wallet not connected');
        }

        // Create the USDC transfer transaction
        const transaction = {
          to: PAYMENT_CONFIG.USDC_BASE_ADDRESS,
          data: this.encodeUSDCTransfer(request.recipient, request.amount),
          chain: base,
        };

        // Send the transaction
        const hash = await walletClient.sendTransaction(transaction);

        return {
          success: true,
          transactionHash: hash,
        };
      } else {
        // Payment was processed directly
        return {
          success: true,
          transactionHash: response.data.transactionHash,
        };
      }
    } catch (error: any) {
      console.error('Payment failed:', error);
      return {
        success: false,
        error: error.message || 'Payment failed',
      };
    }
  }

  private encodeUSDCTransfer(recipient: string, amount: string): string {
    // USDC transfer function signature: transfer(address,uint256)
    const functionSignature = '0xa9059cbb'; // transfer function selector
    const recipientPadded = recipient.slice(2).padStart(64, '0'); // Remove 0x and pad to 32 bytes
    const amountHex = BigInt(amount).toString(16).padStart(64, '0'); // Convert to hex and pad

    return functionSignature + recipientPadded + amountHex;
  }

  async checkTransactionStatus(transactionHash: string): Promise<'pending' | 'confirmed' | 'failed'> {
    try {
      // This would typically use a blockchain explorer API or wagmi's waitForTransactionReceipt
      // For now, we'll simulate checking the status
      const response = await this.x402Client.get(`/transactions/${transactionHash}/status`);
      return response.data.status;
    } catch (error) {
      console.error('Failed to check transaction status:', error);
      return 'failed';
    }
  }
}

export const paymentService = new PaymentService();
