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
