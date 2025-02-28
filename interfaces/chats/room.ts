import { Account } from '@/interfaces/accounts';

interface Room {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  avatarLink: string;
  createdBy: Account;
  participants: Account[];
}

export default Room;
