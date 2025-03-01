'use client';

import { useSelectionStore } from '@/store/selection';
import Section from '@/enums/selection';
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
    <div className="flex flex-col p-5 gap-3 h-full rounded-r-xl rounded-br-xl border-r border-t border-b border-black bg-[#F0F2F5]">
      <div
        className={`w-10 h-10 rounded-full relative cursor-pointer group ${
          selectedSection === Section.Chats ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(Section.Chats)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <ChatIcon className="w-full h-full fill-[#6B6060] p-1.5 relative z-10" />
      </div>
      <div
        className={`w-10 h-10 rounded-full relative cursor-pointer group ${
          selectedSection === Section.Contacts ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(Section.Contacts)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AddressBookIcon className="w-full h-full fill-[#6B6060] p-1.5 relative z-10" />
      </div>
      <div className="flex-1"></div>
      <div
        className={`w-10 h-10 rounded-full relative cursor-pointer group ${
          selectedSection === Section.Settings ? 'bg-[#6B6060]/50' : 'bg-transparent'
        }`}
        onClick={() => setSelectedSection(Section.Settings)}
      >
        <div className="absolute inset-0 rounded-full bg-[#6B6060]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <SettingsIcon className="w-full h-full fill-[#6B6060] p-1 relative z-10" />
      </div>
      <Image
        src={currentAccount.avatarLink}
        alt="User Avatar"
        width={32}
        height={32}
        className="w-fit h-fit rounded-full"
      />
    </div>
  );
}
