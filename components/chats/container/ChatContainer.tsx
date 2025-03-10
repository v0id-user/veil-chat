import { Account } from '@/interfaces/accounts';
import { Room } from '@/interfaces/chats';

import ChatContainerHeader from './ChatContainerHeader';

interface ChatContainerProps {
  account: Account;
  room: Room;
}

export default function ChatContainer({ account, room }: ChatContainerProps) {
  return (
    <>
      <ChatContainerHeader account={account} room={room} />
    </>
  );
}
