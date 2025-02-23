'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface ChatItemProps {
  name: string;
  avatarLink: string;
  chatId: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

export default function ChatItem({
  name,
  lastMessage,
  time,
  unread,
  chatId,
  avatarLink,
}: ChatItemProps) {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={() => {
        router.push(`/chats/${chatId}`);
      }}
    >
      <Image
        src={avatarLink}
        alt={name}
        className="w-12 h-12 rounded-full"
        width={48}
        height={48}
      />
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{lastMessage}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-sm text-gray-500">{time}</p>
        {unread && <div className="w-3 h-3 bg-[#DC0E11] rounded-full" />}
      </div>
    </div>
  );
}
