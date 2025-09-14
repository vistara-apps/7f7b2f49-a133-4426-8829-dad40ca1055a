'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '../components/AppShell';
import { WalletConnector } from '../components/WalletConnector';
import { SearchBar } from '../components/SearchBar';
import { NoteCard } from '../components/NoteCard';
import { UploadButton } from '../components/UploadButton';
import { RequestButton } from '../components/RequestButton';
import { LeaderboardItem } from '../components/LeaderboardItem';
import { mockNotes, mockLeaderboard, mockRequests } from '../lib/mockData';
import type { Note, User, Request } from '../lib/types';

export default function HomePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(mockNotes);
  const [activeTab, setActiveTab] = useState<'notes' | 'requests' | 'leaderboard'>('notes');

  useEffect(() => {
    // Filter notes based on search query
    if (searchQuery.trim()) {
      const filtered = mockNotes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.professor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.topicTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(mockNotes);
    }
  }, [searchQuery]);

  const handleWalletConnect = () => {
    setIsConnected(true);
  };

  const handleUpload = () => {
    // TODO: Implement file upload to IPFS
    console.log('Upload note functionality');
  };

  const handleRequest = () => {
    // TODO: Implement topic request
    console.log('Request topic functionality');
  };

  if (!isConnected) {
    return (
      <AppShell>
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
              <div className="text-3xl">📚</div>
            </div>
            <h1 className="text-display text-text-primary mb-4">Campus Notes</h1>
            <p className="text-body text-text-secondary max-w-md mx-auto mb-2">
              Upload class notes, send all bouncing,
            </p>
            <p className="text-body text-text-secondary max-w-md mx-auto mb-2">
              Search by subject search a minsing,
            </p>
            <p className="text-body text-text-secondary max-w-md mx-auto mb-8">
              request topur requestr missing topics.
            </p>
          </div>
          
          <WalletConnector onConnect={handleWalletConnect} />
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="max-w-screen-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-heading text-text-primary">Campus Connect</h1>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm">🎓</span>
            </div>
          </div>
          
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search class notes"
          />
        </div>

        {/* User Profile Section */}
        <div className="mb-6">
          <div className="card flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-lg">👨‍🎓</span>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Lely Nere</h3>
              <p className="text-caption">@ Maryport Yenversity</p>
            </div>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <UploadButton onClick={handleUpload} />
            <RequestButton onClick={handleRequest} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary mb-1">199</div>
            <div className="text-caption">Files • Completed</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary mb-1">104,061</div>
            <div className="text-caption">Contributors</div>
          </div>
        </div>

        {/* Request Missing Topics */}
        <div className="mb-6">
          <button className="text-primary text-sm font-medium">
            Request missing topics
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-6 mb-6 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-2 text-sm font-medium ${
              activeTab === 'notes'
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary'
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`pb-2 text-sm font-medium ${
              activeTab === 'requests'
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary'
            }`}
          >
            Requests
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`pb-2 text-sm font-medium ${
              activeTab === 'leaderboard'
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary'
            }`}
          >
            Leaderboard
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'notes' && (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <NoteCard key={note.noteId} note={note} />
            ))}
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-4">
            {mockRequests.map((request) => (
              <div key={request.requestId} className="card">
                <h3 className="font-semibold text-text-primary mb-2">{request.topic}</h3>
                <p className="text-caption mb-2">{request.course}</p>
                <p className="text-sm text-text-secondary">
                  Requested {new Date(request.requestTimestamp).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-4">
            <h2 className="text-heading text-text-primary mb-4">Top Contributors</h2>
            {mockLeaderboard.map((user, index) => (
              <LeaderboardItem
                key={user.userId}
                user={user}
                rank={index + 1}
              />
            ))}
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-700 px-4 py-2">
          <div className="flex justify-around items-center max-w-screen-lg mx-auto">
            <button className="flex flex-col items-center space-y-1 text-primary">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-xs text-white">🏠</span>
              </div>
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-text-secondary">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-xs">📋</span>
              </div>
              <span className="text-xs">Browse</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-text-secondary">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-white">+</span>
              </div>
              <span className="text-xs">Add</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-text-secondary">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-xs">📊</span>
              </div>
              <span className="text-xs">Stats</span>
            </button>
            <button className="flex flex-col items-center space-y-1 text-text-secondary">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
