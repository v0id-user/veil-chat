import { User } from '@/interfaces/users';
import { Room } from '@/interfaces/chats';

interface Reaction {
  emoji: string;
  reactedBy: User;
}

interface Message {
  id: string;
  roomId: string;
  content: string;
  reactions: Reaction[];
  sender: User;
  createdAt: Date;
  updatedAt: Date;
  unread: boolean;
}

export type { Message };
