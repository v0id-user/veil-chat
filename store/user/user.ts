import { User } from '@/interfaces/users';
import { primeUser } from '@/store/debug/fake';
import { create } from 'zustand';

interface UserStore {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

const useUserStore = create<UserStore>(set => ({
  currentUser: primeUser,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));

export default useUserStore;
