/*
 * This is used to managed selected UI section
 */
import { create } from 'zustand';
import Section from '@/enums/selection';

interface SelectionStore {
  selectedSection: Section;
  setSelectedSection: (section: Section) => void;
}

export const useSelectionStore = create<SelectionStore>(set => ({
  selectedSection: Section.Chats,
  setSelectedSection: section => set({ selectedSection: section }),
}));
