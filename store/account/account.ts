import { Account } from '@/interfaces/accounts';
import { primeAccount } from '@/lib/debug/fake';
import { create } from 'zustand';

interface AccountStore {
  currentAccount: Account;
  setCurrentAccount: (account: Account) => void;
}

const useAccountStore = create<AccountStore>(set => ({
  currentAccount: primeAccount,
  setCurrentAccount: (account: Account) => set({ currentAccount: account }),
}));

export default useAccountStore;
