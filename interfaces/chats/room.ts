import { User } from '@/interfaces/users';

interface Room {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  avatarLink: string;
  createdBy: User;
  participants: User[];
}

export default Room;
