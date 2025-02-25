'use client';

import { useSelectionStore } from '@/store/selection';
import Section from '@/enums/selection';
import Chats from './selectable/chats';
import Options from './options';
import Settings from './selectable/settings';
const ColorBanner = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-[#DC0E11] -z-50"></div>
    </>
  );
};

export default function Home() {
  const { selectedSection } = useSelectionStore();
  return (
    <main className="flex flex-col h-screen">
      <ColorBanner />
      <div className="flex h-full m-12 rounded-xl">
        <Options />
        {selectedSection === Section.Chats && <Chats />}
        {selectedSection === Section.Settings && <Settings />}
      </div>
    </main>
  );
}
