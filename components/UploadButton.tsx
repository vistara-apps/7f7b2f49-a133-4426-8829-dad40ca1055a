'use client';

import { Upload } from 'lucide-react';

interface UploadButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export function UploadButton({ variant = 'primary', onClick }: UploadButtonProps) {
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variantClasses = {
    primary: "bg-surface text-text-primary hover:bg-gray-700",
    secondary: "bg-primary text-white hover:bg-blue-600"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <Upload className="h-4 w-4" />
      <span>upload notifies</span>
    </button>
  );
}
