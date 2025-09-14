import type { Note, User, Request } from './types';

export const mockNotes: Note[] = [
  {
    noteId: '1',
    title: 'Introduction to Algorithms - Sorting',
    course: 'CS 101',
    professor: 'Dr. Smith',
    topicTags: ['algorithms', 'sorting', 'computer science'],
    fileUrl: 'https://example.com/note1.pdf',
    uploaderId: 'user1',
    uploadTimestamp: '2024-01-15T10:00:00Z',
    views: 245,
    downloads: 89
  },
  {
    noteId: '2',
    title: 'Calculus I - Derivatives',
    course: 'MATH 201',
    professor: 'Prof. Johnson',
    topicTags: ['calculus', 'derivatives', 'mathematics'],
    fileUrl: 'https://example.com/note2.pdf',
    uploaderId: 'user2',
    uploadTimestamp: '2024-01-14T14:30:00Z',
    views: 189,
    downloads: 67
  },
  {
    noteId: '3',
    title: 'Physics - Quantum Mechanics Basics',
    course: 'PHYS 301',
    professor: 'Dr. Wilson',
    topicTags: ['physics', 'quantum mechanics', 'wave functions'],
    fileUrl: 'https://example.com/note3.pdf',
    uploaderId: 'user3',
    uploadTimestamp: '2024-01-13T09:15:00Z',
    views: 156,
    downloads: 45
  }
];

export const mockLeaderboard: User[] = [
  {
    userId: 'user1',
    username: 'Alex Chen',
    contributionCount: 25,
    totalUploads: 78
  },
  {
    userId: 'user2',
    username: 'Sarah Kim',
    contributionCount: 22,
    totalUploads: 65
  },
  {
    userId: 'user3',
    username: 'Mike Rodriguez',
    contributionCount: 18,
    totalUploads: 52
  },
  {
    userId: 'user4',
    username: 'Emma Thompson',
    contributionCount: 15,
    totalUploads: 41
  }
];

export const mockRequests: Request[] = [
  {
    requestId: '1',
    course: 'CS 102',
    topic: 'Data Structures - Binary Trees',
    requestedByUserId: 'user5',
    requestTimestamp: '2024-01-16T11:00:00Z'
  },
  {
    requestId: '2',
    course: 'MATH 202',
    topic: 'Calculus II - Integration Techniques',
    requestedByUserId: 'user6',
    requestTimestamp: '2024-01-15T16:45:00Z'
  },
  {
    requestId: '3',
    course: 'CHEM 101',
    topic: 'Organic Chemistry - Reaction Mechanisms',
    requestedByUserId: 'user7',
    requestTimestamp: '2024-01-14T13:20:00Z'
  }
];
