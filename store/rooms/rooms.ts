import { create } from 'zustand';
import { Room } from '@/interfaces/chats';

interface RoomsStore {
  selectedRoom: Room | null;
  setSelectedRoom: (room: Room) => void;
}

export const useRoomsStore = create<RoomsStore>(set => ({
  selectedRoom: null,
  setSelectedRoom: (room: Room) => set({ selectedRoom: room }),
}));
