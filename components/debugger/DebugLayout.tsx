'use client';

import { useDebugStore } from '@/store/debug';
import { useRef } from 'react';
import { useDraggable } from './useDraggable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { primeAccount, secondaryPrimeAccount } from '@/lib/debug/fake';

export default function DebugLayout() {
  const debugRef = useRef<HTMLDivElement>(null);
  const { position, isDragging, handleMouseDown } = useDraggable(
    debugRef as React.RefObject<HTMLDivElement>
  );
  const { setSelectedAccount, selectedAccount } = useDebugStore();

  if (process.env.NEXT_PUBLIC_DEBUG !== 'true') {
    return null;
  }

  return (
    <div
      ref={debugRef}
      className="fixed z-50 h-fit w-fit max-w-[400px] cursor-move rounded-xl border border-zinc-700 bg-zinc-900 p-3 font-mono text-sm shadow-lg transition-shadow"
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
        <div className="flex items-center border-b border-zinc-700 pb-2 font-bold text-zinc-400">
          <span className="mr-2">⚙️</span> Debug Info
        </div>
        <div className="overflow-auto text-zinc-300">
          <div className="mb-2 font-bold text-zinc-400">Prime Account:</div>
          <div className="grid grid-cols-[80px_1fr] gap-y-1">
            <span className="text-zinc-500">Name:</span>
            <span className="text-zinc-300">{selectedAccount.name}</span>

            <span className="text-zinc-500">Email:</span>
            <span className="text-zinc-300">{selectedAccount.email}</span>

            <span className="text-zinc-500">Role:</span>
            <span className="rounded bg-zinc-800 px-2 text-zinc-300">{selectedAccount.role}</span>

            <span className="text-zinc-500">Joined:</span>
            <span className="text-zinc-300">{selectedAccount.joinedAt.toLocaleDateString()}</span>
          </div>
        </div>
        <Select
          value={selectedAccount.id}
          onValueChange={value => {
            // Find the account that matches the selected ID
            if (value === primeAccount.id) {
              setSelectedAccount(primeAccount);
            } else if (value === secondaryPrimeAccount.id) {
              setSelectedAccount(secondaryPrimeAccount);
            }
          }}
        >
          <SelectTrigger className="border-none bg-black text-white ring-0">
            <SelectValue placeholder="Select an account" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={primeAccount.id}>{primeAccount.name}</SelectItem>
            <SelectItem value={secondaryPrimeAccount.id}>{secondaryPrimeAccount.name}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
