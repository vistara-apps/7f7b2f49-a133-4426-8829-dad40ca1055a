'use client';

import { Download, Eye } from 'lucide-react';
import type { Note } from '../lib/types';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const handleDownload = () => {
    // TODO: Implement download from IPFS
    console.log('Download note:', note.noteId);
  };

  return (
    <div className="card hover:bg-gray-700 transition-colors duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-text-primary mb-1">{note.title}</h3>
          <p className="text-caption mb-2">{note.course} • {note.professor}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {note.topicTags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="text-text-secondary hover:text-accent transition-colors duration-200 p-1"
        >
          <Download className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between text-caption">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{note.views}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Download className="h-4 w-4" />
            <span>{note.downloads}</span>
          </span>
        </div>
        <span>{new Date(note.uploadTimestamp).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
