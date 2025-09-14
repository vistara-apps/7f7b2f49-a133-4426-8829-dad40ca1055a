'use client';

import { useState } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { paymentService, PaymentRequest } from '../lib/paymentService';
import { PAYMENT_CONFIG } from '../lib/constants';

interface PaymentButtonProps {
  recipient: string;
  amount?: string;
  description?: string;
  onSuccess?: (transactionHash: string) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function PaymentButton({
  recipient,
  amount = PAYMENT_CONFIG.DEFAULT_PAYMENT_AMOUNT,
  description,
  onSuccess,
  onError,
  disabled = false,
  children
}: PaymentButtonProps) {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!isConnected) {
      onError?.('Please connect your wallet first');
      return;
    }

    setIsProcessing(true);

    try {
      const paymentRequest: PaymentRequest = {
        amount,
        recipient,
        description,
      };

      const response = await paymentService.initiatePayment(paymentRequest, walletClient);

      if (response.success && response.transactionHash) {
        onSuccess?.(response.transactionHash);
      } else {
        onError?.(response.error || 'Payment failed');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      onError?.(error.message || 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={disabled || isProcessing || !isConnected}
      className="bg-gradient-to-r from-accent to-green-400 text-bg px-6 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isProcessing ? (
        <span className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin"></div>
          <span>Processing...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
