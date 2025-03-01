'use client';

import { primeAccount } from '@/store/debug';
import { useRef } from 'react';
import { useDraggable } from './useDraggable';

export default function DebugLayout() {
  const debugRef = useRef<HTMLDivElement>(null);
  const { position, isDragging, handleMouseDown } = useDraggable(
    debugRef as React.RefObject<HTMLDivElement>
  );

  return (
    <div
      ref={debugRef}
      className="fixed w-fit max-w-[400px] h-fit font-mono bg-zinc-900 text-sm rounded-xl shadow-lg p-3 border border-zinc-700 cursor-move z-50 transition-shadow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: isDragging
          ? '0 0 15px rgba(161, 161, 170, 0.3)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
      onMouseDown={handleMouseDown}
      dir="ltr"
    >
      <div className="flex flex-col gap-3">
        <div className="text-zinc-400 font-bold border-b border-zinc-700 pb-2 flex items-center">
          <span className="mr-2">⚙️</span> Debug Info
        </div>
        <div className="text-zinc-300 overflow-auto">
          <div className="font-bold text-zinc-400 mb-2">Prime Account:</div>
          <div className="grid grid-cols-[80px_1fr] gap-y-1">
            <span className="text-zinc-500">Name:</span>
            <span className="text-zinc-300">{primeAccount.name}</span>

            <span className="text-zinc-500">Email:</span>
            <span className="text-zinc-300">{primeAccount.email}</span>

            <span className="text-zinc-500">Role:</span>
            <span className="text-zinc-300 bg-zinc-800 px-2 rounded">{primeAccount.role}</span>

            <span className="text-zinc-500">Joined:</span>
            <span className="text-zinc-300">{primeAccount.joinedAt.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
