'use client';

import { Plus } from 'lucide-react';

interface RequestButtonProps {
  onClick: () => void;
}

export function RequestButton({ onClick }: RequestButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-accent flex items-center space-x-2"
    >
      <Plus className="h-4 w-4" />
      <span>Request Topic</span>
    </button>
  );
}
