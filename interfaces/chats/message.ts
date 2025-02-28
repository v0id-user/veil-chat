import { Account } from '@/interfaces/accounts';
import { Room } from '@/interfaces/chats';

interface Reaction {
  emoji: string;
  reactedBy: Account;
  reactedAt: Date;
}

interface Message {
  id: string;
  content: string;
  reactions: Reaction[];
  sender: Account;
  room: Room;
  createdAt: Date;
  updatedAt: Date;
  unread: boolean;
}

export type { Message };
