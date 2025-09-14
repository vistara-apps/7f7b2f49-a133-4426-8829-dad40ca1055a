'use client';

import { useEffect, useState } from 'react';
import { paymentService } from '../lib/paymentService';

interface PaymentStatusProps {
  transactionHash: string;
  onStatusChange?: (status: 'pending' | 'confirmed' | 'failed') => void;
}

export function PaymentStatus({ transactionHash, onStatusChange }: PaymentStatusProps) {
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'failed'>('pending');
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const currentStatus = await paymentService.checkTransactionStatus(transactionHash);
        setStatus(currentStatus);
        setIsChecking(false);

        if (onStatusChange) {
          onStatusChange(currentStatus);
        }

        // If still pending, check again in 5 seconds
        if (currentStatus === 'pending') {
          setTimeout(checkStatus, 5000);
        }
      } catch (error) {
        console.error('Failed to check payment status:', error);
        setStatus('failed');
        setIsChecking(false);
      }
    };

    checkStatus();
  }, [transactionHash, onStatusChange]);

  const getStatusColor = () => {
    switch (status) {
      case 'confirmed':
        return 'text-green-400';
      case 'failed':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
        return '✅';
      case 'failed':
        return '❌';
      default:
        return '⏳';
    }
  };

  return (
    <div className="flex items-center space-x-2 p-3 bg-surface border border-gray-700 rounded-lg">
      <span className="text-lg">{getStatusIcon()}</span>
      <div className="flex-1">
        <div className={`font-medium ${getStatusColor()}`}>
          Payment {status}
        </div>
        <div className="text-sm text-text-secondary font-mono">
          {transactionHash.slice(0, 10)}...{transactionHash.slice(-8)}
        </div>
      </div>
      {isChecking && status === 'pending' && (
        <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      )}
    </div>
  );
}

