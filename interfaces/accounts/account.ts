import AccountRole from '@/enums/accounts';

interface Account {
  id: string;
  name: string;
  email: string;
  joinedAt: Date;
  role: AccountRole;
  avatarLink: string;
}

export default Account;
