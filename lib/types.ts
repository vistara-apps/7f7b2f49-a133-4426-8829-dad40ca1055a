export interface User {
  userId: string;
  username: string;
  profilePicture?: string;
  contributionCount: number;
  totalUploads: number;
}

export interface Note {
  noteId: string;
  title: string;
  course: string;
  professor: string;
  topicTags: string[];
  fileUrl: string;
  uploaderId: string;
  uploadTimestamp: string;
  views: number;
  downloads: number;
}

export interface Request {
  requestId: string;
  course: string;
  topic: string;
  requestedByUserId: string;
  requestTimestamp: string;
  fulfilledByUserId?: string;
  fulfilledTimestamp?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
