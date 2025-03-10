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
      <div className="absolute left-0 top-0 -z-50 h-24 w-full bg-[#DC0E11]"></div>
    </>
  );
};

export default function Home() {
  const { selectedSection } = useSelectionStore();
  const { selectedAccount } = useDebugStore();
  return (
    <main className="flex h-screen flex-col">
      <ColorBanner />
      <div className="m-12 flex h-full rounded-xl">
        <Options />
        {selectedSection === Section.Chats && <Chats />}
        {selectedSection === Section.Settings && <Settings />}
        <ChatContainer account={selectedAccount} room={fakeRooms[0]} />
      </div>
    </main>
  );
}
