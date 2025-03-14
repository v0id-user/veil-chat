/*
 * This is used to managed selected UI section
 */
import { create } from 'zustand';
import Section, { SECTIONS, SectionType } from '@/enums/selection';

interface SelectionStore {
  selectedSection: SectionType;
  setSelectedSection: (section: SectionType) => void;
}

export const useSelectionStore = create<SelectionStore>(set => ({
  selectedSection: SECTIONS.CHATS,
  setSelectedSection: section => {
    if (Section(section)) {
      set({ selectedSection: section });
    }
  },
}));
