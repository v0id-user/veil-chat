'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Room } from '@/interfaces/chats';

export default function RoomItem({ name, id, participantsIds }: Room) {
  const router = useRouter();
  {
    /* TODO: 
        - Grab the last message from the database
        - Get the account data from the database
     */
  }
  return (
    <div
      className="flex cursor-pointer items-center gap-4 border-b border-black border-opacity-10 p-4 transition-colors hover:bg-gray-50"
      onClick={() => {
        router.push(`/chats/${id}`);
      }}
    >
      <Image
        src="/__TODO__GET_ME_FROM_INDEXEDDB{participants[1].avatarLink}__"
        alt={name}
        className="h-12 w-12 rounded-full"
        width={48}
        height={48}
      />
      <div className="flex flex-1 flex-col gap-1">
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
          {participantsIds.length}
        </p>
        <div className="h-3 w-3 rounded-full bg-[#DC0E11]" />
      </div>
    </div>
  );
}
