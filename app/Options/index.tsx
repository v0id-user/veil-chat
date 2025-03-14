'use client';

import { useSelectionStore } from '@/store/selection';
import { SECTIONS } from '@/enums/selection';
import ChatIcon from '@/public/icons/chat-bold.svg';
import AddressBookIcon from '@/public/icons/address-book-tabs-bold.svg';
import SettingsIcon from '@/public/icons/gear-six.svg';
import useAccountStore from '@/store/account';
import Image from 'next/image';

export default function Options() {
  const { selectedSection, setSelectedSection } = useSelectionStore();
  const { currentAccount } = useAccountStore();
  // This is a sidebar with icons of options
  return (
    <div className="flex h-full flex-col gap-3 rounded-r-xl rounded-br-xl border-b border-r border-t border-black bg-[#F0F2F5] p-5">
      <div
        className={`group relative h-10 w-10 cursor-pointer rounded-full ${
          selectedSection === SECTIONS.CHATS ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(SECTIONS.CHATS)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 transition-opacity group-hover:opacity-100" />
        <ChatIcon className="relative z-10 h-full w-full fill-[#6B6060] p-1.5" />
      </div>
      <div
        className={`group relative h-10 w-10 cursor-pointer rounded-full ${
          selectedSection === SECTIONS.CONTACTS ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(SECTIONS.CONTACTS)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 transition-opacity group-hover:opacity-100" />
        <AddressBookIcon className="relative z-10 h-full w-full fill-[#6B6060] p-1.5" />
      </div>
      <div className="flex-1"></div>
      <div
        className={`group relative h-10 w-10 cursor-pointer rounded-full ${
          selectedSection === SECTIONS.SETTINGS ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(SECTIONS.SETTINGS)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 transition-opacity group-hover:opacity-100" />
        <SettingsIcon className="relative z-10 h-full w-full fill-[#6B6060] p-1" />
      </div>
      <Image
        src={currentAccount.avatarLink}
        alt="User Avatar"
        width={32}
        height={32}
        className="h-fit w-fit rounded-full"
      />
    </div>
  );
}
