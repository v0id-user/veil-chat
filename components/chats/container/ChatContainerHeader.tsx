import { Account } from '@/interfaces/accounts';
import Image from 'next/image';
import ThreeDots from '@/public/icons/dots-three-outline-vertical.svg';
import VideoCamera from '@/public/icons/video-camera.svg';
import Phone from '@/public/icons/phone.svg';

import { Room } from '@/interfaces/chats';
const NameAvatar = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className="flex items-center gap-10">
      <Image src={avatar} alt={name} width={40} height={40} className="rounded-full" />
      <p className="text-base font-normal">{name}</p>
    </div>
  );
};

const OptionsAndCalls = () => {
  return (
    <div className="flex items-center gap-5">
      <VideoCamera className="h-8 w-8 cursor-pointer rounded-full fill-[#6B6060] p-1 transition-colors hover:fill-[#000]" />
      <Phone className="h-8 w-8 cursor-pointer rounded-full fill-[#6B6060] p-1 transition-colors hover:fill-[#000]" />
      <ThreeDots className="h-8 w-8 cursor-pointer rounded-full fill-[#6B6060] p-1 transition-colors hover:fill-[#000]" />
    </div>
  );
};

interface ChatContainerHeaderProps {
  account: Account;
  room: Room;
}

export default function ChatContainerHeader({ account, room }: ChatContainerHeaderProps) {
  return (
    <div className="flex h-fit w-full items-center justify-between rounded-tl-xl border border-l-black border-t-black bg-[#F5F0F0] p-3">
      <div className="flex w-full items-center justify-between">
        <NameAvatar name={account.name} avatar={account.avatarLink} />
        <label className="rounded border border-red-500 bg-red-200 p-1 text-xs text-black/70">
          DEBUG: Room ID: {room.id} | TODO: Use the room object
        </label>
        <OptionsAndCalls />
      </div>
    </div>
  );
}
