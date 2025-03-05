import { Account } from '@/interfaces/accounts';

interface Reaction {
  emoji: string;
  reactedBy: Account;
  reactedAt: Date;
}

interface Message {
  id: string;
  content: string;
  reactions: Reaction[];
  senderId: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
  unread: boolean;
}

export type { Message };
