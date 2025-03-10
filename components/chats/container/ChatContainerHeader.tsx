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
      <VideoCamera className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] rounded-full cursor-pointer p-1 transition-colors" />
      <Phone className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] rounded-full cursor-pointer p-1 transition-colors" />
      <ThreeDots className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] rounded-full cursor-pointer p-1 transition-colors" />
    </div>
  );
};

interface ChatContainerHeaderProps {
  account: Account;
  room: Room;
}

export default function ChatContainerHeader({ account, room }: ChatContainerHeaderProps) {
  return (
    <div className="flex p-3 items-center justify-between w-full h-fit rounded-tl-xl border solid border-t-black border-l-black bg-[#F5F0F0]">
      <div className="flex items-center justify-between w-full">
        <NameAvatar name={account.name} avatar={account.avatarLink} />
        <OptionsAndCalls />
        <label className="absolute">Use me: room object{room.name}</label>
      </div>
    </div>
  );
}
