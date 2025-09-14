'use client';

import type { User } from '../lib/types';

interface LeaderboardItemProps {
  user: User;
  rank: number;
}

export function LeaderboardItem({ user, rank }: LeaderboardItemProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className="card flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <span className="text-lg">{getRankIcon(rank)}</span>
        </div>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-sm">👨‍🎓</span>
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">{user.username}</h3>
          <p className="text-caption">Top contributor</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-primary">{user.totalUploads}</div>
        <div className="text-caption">uploads</div>
      </div>
    </div>
  );
}
