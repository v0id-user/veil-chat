import { create } from 'zustand';

interface DebugStore {
  isDebug: boolean;
  setIsDebug: (isDebug: boolean) => void;
}

export const useDebugStore = create<DebugStore>(set => ({
  isDebug: process.env.NEXT_PUBLIC_DEBUG !== 'false' && process.env.NEXT_PUBLIC_DEBUG !== undefined,
  setIsDebug: (isDebug: boolean) => set({ isDebug }),
}));
