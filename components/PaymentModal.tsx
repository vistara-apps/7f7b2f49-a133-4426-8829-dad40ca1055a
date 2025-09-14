'use client';

import { useState } from 'react';
import { PaymentButton } from './PaymentButton';
import { PaymentStatus } from './PaymentStatus';
import { ErrorBoundary } from './ErrorBoundary';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: string;
  amount?: string;
  description?: string;
  title?: string;
}

export function PaymentModal({
  isOpen,
  onClose,
  recipient,
  amount,
  description,
  title = 'Complete Payment'
}: PaymentModalProps) {
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (hash: string) => {
    setTransactionHash(hash);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setTransactionHash(null);
  };

  const handleClose = () => {
    setTransactionHash(null);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-surface border border-gray-700 rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-text-primary">{title}</h2>
          <button
            onClick={handleClose}
            className="text-text-secondary hover:text-text-primary text-2xl"
          >
            ×
          </button>
        </div>

        <ErrorBoundary>
          {!transactionHash && !error && (
            <div className="space-y-4">
              {description && (
                <p className="text-text-secondary">{description}</p>
              )}

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary">Amount:</span>
                  <span className="font-semibold text-text-primary">
                    {amount ? `${parseInt(amount) / 1000000} USDC` : '1 USDC'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Recipient:</span>
                  <span className="font-mono text-sm text-text-primary">
                    {recipient.slice(0, 6)}...{recipient.slice(-4)}
                  </span>
                </div>
              </div>

              <PaymentButton
                recipient={recipient}
                amount={amount}
                description={description}
                onSuccess={handleSuccess}
                onError={handleError}
              >
                Pay with USDC
              </PaymentButton>
            </div>
          )}

          {transactionHash && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Payment Initiated!
                </h3>
                <p className="text-text-secondary text-sm">
                  Your transaction is being processed on the Base network.
                </p>
              </div>

              <PaymentStatus
                transactionHash={transactionHash}
                onStatusChange={(status) => {
                  if (status === 'confirmed') {
                    setTimeout(() => handleClose(), 2000);
                  }
                }}
              />

              <button
                onClick={handleClose}
                className="w-full bg-gray-700 hover:bg-gray-600 text-text-primary py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {error && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">
                  Payment Failed
                </h3>
                <p className="text-red-300 text-sm">{error}</p>
              </div>

              <button
                onClick={() => setError(null)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}

