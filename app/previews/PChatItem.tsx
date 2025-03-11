import ChatItem from '@/components/chats/RoomItem';
import { fakeRooms } from '@/lib/debug/fake';

export default function PChatItem() {
  const chats = fakeRooms;

  return (
    <div className="flex w-full flex-col gap-2">
      {chats.map(chat => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  );
}
