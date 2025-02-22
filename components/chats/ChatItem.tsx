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
      className="flex items-center gap-2"
      onClick={() => {
        router.push(`/chats/${chatId}`);
      }}
    >
      <Image
        src={avatarLink}
        alt={name}
        className="w-10 h-10 rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{lastMessage}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500">{time}</p>
        {unread && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
      </div>
    </div>
  );
}
