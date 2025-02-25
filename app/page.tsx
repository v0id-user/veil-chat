'use client';

import { useSelectionStore } from '@/store/selection';
import Section from '@/enums/selection';
import Chats from './Chats';
import Options from './Options';

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
      </div>
    </main>
  );
}
