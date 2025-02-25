import { User } from '@/interfaces/users';
import { Room } from '@/interfaces/chats';

interface Reaction {
  emoji: string;
  reactedBy: User;
}

interface Message {
  id: string;
  content: string;
  reactions: Reaction[];
  sender: User;
  room: Room;
  createdAt: Date;
  updatedAt: Date;
}

export type { Message, Reaction };
