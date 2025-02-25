import { User } from '@/interfaces/users';
import { Message } from './message';
interface Room {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  avatarLink: string;
  unread: boolean;
  createdBy: User;
  lastMessage: Message;
  lastMessageAt: Date;
  participants: User[];
}

export default Room;
