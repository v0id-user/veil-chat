import { Account } from '@/interfaces/accounts';
import { primeAccount } from '@/lib/debug/fake';
import { create } from 'zustand';
import { useDebugStore } from '@/store/debug';

interface AccountStore {
  currentAccount: Account;
  setCurrentAccount: (account: Account) => void;
}

const useAccountStore = create<AccountStore>((set, get) => {
  // Check if we're in debug mode
  const isDebug =
    process.env.NEXT_PUBLIC_DEBUG !== 'false' && process.env.NEXT_PUBLIC_DEBUG !== undefined;

  return {
    currentAccount: isDebug ? useDebugStore.getState().selectedAccount : primeAccount,
    setCurrentAccount: (account: Account) => set({ currentAccount: account }),
  };
});

// Subscribe to debug store changes when in debug mode
if (process.env.NEXT_PUBLIC_DEBUG !== 'false' && process.env.NEXT_PUBLIC_DEBUG !== undefined) {
  useDebugStore.subscribe(state => {
    const selectedAccount = state.selectedAccount;
    useAccountStore.setState({ currentAccount: selectedAccount });
  });
}

export default useAccountStore;
