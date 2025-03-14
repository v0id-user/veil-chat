import { RoomItem } from '@/components/chats';
import { fakeRooms } from '@/lib/debug/fake';

export default function PChatItem() {
  const chats = fakeRooms;

  return (
    <div className="flex w-full flex-col gap-2">
      {chats.map(chat => (
        <RoomItem key={chat.id} {...chat} />
      ))}
    </div>
  );
}
