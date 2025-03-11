import { create } from 'zustand';
import { Room } from '@/interfaces/chats';

interface RoomsStore {
  selectedRoom: Room | null;
  setSelectedRoom: (room: Room) => void;
  getSelectedRoom: () => Room | null;
}

export const useRoomsStore = create<RoomsStore>((set, get) => ({
  selectedRoom: null,
  setSelectedRoom: (room: Room) => set({ selectedRoom: room }),
  getSelectedRoom: () => get().selectedRoom,
}));
