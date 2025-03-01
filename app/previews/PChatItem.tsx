import ChatItem from '@/components/chats/ChatItem';
import { fakeRooms } from '@/store/debug/fake';

export default function PChatItem() {
  const chats = fakeRooms;

  return (
    <div className="flex flex-col gap-2 w-full">
      {chats.map(chat => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  );
}
