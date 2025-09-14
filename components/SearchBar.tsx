'use client';

import { Search, Mic } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-text-secondary" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field pl-10 pr-10 w-full"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <button className="text-text-secondary hover:text-text-primary transition-colors duration-200">
          <Mic className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
