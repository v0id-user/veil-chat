import { create } from 'zustand';
import { fakeRooms, fakeUsers } from '@/lib/debug/fake';
import { Room } from '@/interfaces/chats';

interface RoomsStore {
  selectedRoom: Room | null;
  setSelectedRoom: (room: Room) => void;
}

export const useRoomsStore = create<RoomsStore>(set => ({
  selectedRoom: null,
  setSelectedRoom: (room: Room) => set({ selectedRoom: room }),
}));
