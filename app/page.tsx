'use client';

import { useSelectionStore } from '@/store/selection';
import Section from '@/enums/selection';
import Chats from './selectable/chats';
import Options from './options';
import Settings from './selectable/settings';
import ChatContainer from '@/components/chats/container/ChatContainer';
import { fakeRooms } from '@/lib/debug/fake';
import { useDebugStore } from '@/store/debug';
const ColorBanner = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-[#DC0E11] -z-50"></div>
    </>
  );
};

export default function Home() {
  const { selectedSection } = useSelectionStore();
  const { selectedAccount } = useDebugStore();
  return (
    <main className="flex flex-col h-screen">
      <ColorBanner />
      <div className="flex h-full m-12 rounded-xl">
        <Options />
        {selectedSection === Section.Chats && <Chats />}
        {selectedSection === Section.Settings && <Settings />}
        <ChatContainer account={selectedAccount} room={fakeRooms[0]} />
      </div>
    </main>
  );
}
