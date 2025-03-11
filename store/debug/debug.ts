import { create } from 'zustand';
import { Account } from '@/interfaces/accounts';
import { primeAccount } from '@/lib/debug/fake';

interface DebugStore {
  isDebug: boolean;
  setIsDebug: (isDebug: boolean) => void;
  selectedAccount: Account;
  setSelectedAccount: (selectedAccount: Account) => void;
  getSelectedAccount: () => Account;
}

export const useDebugStore = create<DebugStore>((set, get) => ({
  isDebug: process.env.NEXT_PUBLIC_DEBUG !== 'false' && process.env.NEXT_PUBLIC_DEBUG !== undefined,
  setIsDebug: (isDebug: boolean) => set({ isDebug }),
  selectedAccount: primeAccount,
  setSelectedAccount: (selectedAccount: Account) => set({ selectedAccount }),
  getSelectedAccount: () => get().selectedAccount,
}));
