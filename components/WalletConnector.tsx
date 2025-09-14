'use client';

import { useState } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { coinbaseWallet } from 'wagmi/connectors';

interface WalletConnectorProps {
  onConnect: () => void;
}

export function WalletConnector({ onConnect }: WalletConnectorProps) {
  const { connect, isPending } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    try {
      connect({ connector: coinbaseWallet() });
      onConnect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-accent to-green-400 text-bg px-4 py-2 rounded-lg font-medium">
          {address.slice(0, 6)}...{address.slice(-4)}
        </div>
        <button
          onClick={handleDisconnect}
          className="bg-red-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isPending}
      className="bg-gradient-to-r from-accent to-green-400 text-bg px-8 py-3 rounded-xl font-semibold text-lg hover:from-green-400 hover:to-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up"
    >
      {isPending ? (
        <span className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin"></div>
          <span>Connecting...</span>
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
}
