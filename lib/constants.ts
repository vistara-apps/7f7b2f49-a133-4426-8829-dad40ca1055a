export const APP_CONFIG = {
  name: 'CampusNotes Connect',
  tagline: 'Share, Search, and Succeed: Your Campus Notes Hub',
  version: '1.0.0',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
};

export const IPFS_CONFIG = {
  gateway: 'https://gateway.pinata.cloud/ipfs/',
  apiUrl: 'https://api.pinata.cloud',
};

export const SUPPORTED_FILE_TYPES = [
  'application/pdf',
  'text/markdown',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const PAYMENT_CONFIG = {
  USDC_BASE_ADDRESS: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  USDC_DECIMALS: 6,
  DEFAULT_PAYMENT_AMOUNT: '1000000', // 1 USDC in smallest units
  X402_BASE_URL: process.env.NEXT_PUBLIC_X402_BASE_URL || 'https://api.x402.org',
  X402_API_KEY: process.env.NEXT_PUBLIC_X402_API_KEY,
};

export const CATEGORIES = [
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Engineering',
  'Business',
  'Literature',
  'History',
  'Psychology'
];
