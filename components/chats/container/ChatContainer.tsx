import { Account } from '@/interfaces/accounts';
import { Room } from '@/interfaces/chats';

import ChatContainerHeader from './ChatContainerHeader';
import ChatContainerMessages from './ChatContainerMessages';
interface ChatContainerProps {
  account: Account;
  room: Room;
}

export default function ChatContainer({ account, room }: ChatContainerProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <ChatContainerHeader account={account} room={room} />
      <ChatContainerMessages />
    </div>
  );
}
