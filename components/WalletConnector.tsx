'use client';

import { useState } from 'react';

interface WalletConnectorProps {
  onConnect: () => void;
}

export function WalletConnector({ onConnect }: WalletConnectorProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      onConnect();
    }, 1500);
  };

  return (
    <button
      onClick={handleConnect}
      disabled={isConnecting}
      className="bg-gradient-to-r from-accent to-green-400 text-bg px-8 py-3 rounded-xl font-semibold text-lg hover:from-green-400 hover:to-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up"
    >
      {isConnecting ? (
        <span className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin"></div>
          <span>Connecting...</span>
        </span>
      ) : (
        'wallet connect'
      )}
    </button>
  );
}
