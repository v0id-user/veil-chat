'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Room } from '@/interfaces/chats';

export default function RoomItem({ name, id, participants }: Room) {
  const router = useRouter();
  {
    /* Grab the last message from the database */
  }
  return (
    <div
      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-black border-opacity-10"
      onClick={() => {
        router.push(`/chats/${id}`);
      }}
    >
      <Image
        src={participants[1].avatarLink}
        alt={name}
        className="w-12 h-12 rounded-full"
        width={48}
        height={48}
      />
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-500">
          {/* {lastMessage.content.length > 50
            ? lastMessage.content.slice(0, 50) + '...'
            : lastMessage.content} */}
          Last message
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-sm text-gray-500">
          {/* {lastMessageAt.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })} */}
          Time message
        </p>
        <div className="w-3 h-3 bg-[#DC0E11] rounded-full" />
      </div>
    </div>
  );
}
