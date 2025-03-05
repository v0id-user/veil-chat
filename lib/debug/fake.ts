import { Message } from '@/interfaces/chats';
import Room from '@/interfaces/chats/room';
import { Account } from '@/interfaces/accounts';
import AccountRole from '@/enums/accounts';

// First debug user (representing the logged-in user)
const primeAccount: Account = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed.mohamed@example.com',
  joinedAt: new Date('2023-01-15'),
  role: AccountRole.Premium,
  avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Leo',
};

// Second debug user (representing a different user)
const secondaryPrimeAccount: Account = {
  id: '21',
  name: 'محمد علي',
  email: 'mohamed.ali@example.com',
  joinedAt: new Date('2023-02-20'),
  role: AccountRole.Free,
  avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Mohamed',
};

// Other fake users (representing contacts)
const fakeUsers: Account[] = [
  {
    id: '2',
    name: 'فاطمة علي',
    email: 'fatima.ali@example.com',
    joinedAt: new Date('2023-02-01'),
    role: AccountRole.Free,
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Kingston',
  },
  {
    id: '3',
    name: 'عمر حسن',
    email: 'omar.hassan@example.com',
    joinedAt: new Date('2023-03-10'),
    role: AccountRole.Free,
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Aidan',
  },
  {
    id: '4',
    name: 'سارة أحمد',
    email: 'sara.ahmed@example.com',
    joinedAt: new Date('2023-04-05'),
    role: AccountRole.Free,
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Sarah',
  },
  {
    id: '5',
    name: 'خالد محمود',
    email: 'khaled.mahmoud@example.com',
    joinedAt: new Date('2023-05-20'),
    role: AccountRole.Free,
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Christopher',
  },
];

// Create rooms with their respective messages
const fatimaRoom: Room = {
  id: '1',
  name: 'فاطمة علي',
  createdAt: new Date('2023-01-20'),
  updatedAt: new Date('2023-06-01'),
  createdById: primeAccount.id,
  participantsIds: [primeAccount.id, fakeUsers[0].id],
  avatarLink: fakeUsers[0].avatarLink,
};

const omarRoom: Room = {
  id: '2',
  name: 'عمر حسن',
  createdAt: new Date('2023-02-15'),
  updatedAt: new Date('2023-06-02'),
  createdById: primeAccount.id,
  participantsIds: [primeAccount.id, fakeUsers[1].id],
  avatarLink: fakeUsers[1].avatarLink,
};

const saraRoom: Room = {
  id: '3',
  name: 'سارة أحمد',
  createdAt: new Date('2023-03-01'),
  updatedAt: new Date('2023-06-03'),
  createdById: primeAccount.id,
  participantsIds: [primeAccount.id, fakeUsers[2].id],
  avatarLink: fakeUsers[2].avatarLink,
};

// Messages grouped by room
const fatimaMessages: Message[] = [
  {
    id: '1',
    roomId: fatimaRoom.id,
    content: 'السلام عليكم فاطمة، كيف حالك؟',
    reactions: [
      { emoji: '👋', reactedBy: fakeUsers[0], reactedAt: new Date('2023-06-01T10:00:00') },
    ],
    senderId: primeAccount.id,
    createdAt: new Date('2023-06-01T10:00:00'),
    updatedAt: new Date('2023-06-01T10:00:00'),
    unread: false,
  },
  {
    id: '2',
    roomId: fatimaRoom.id,
    content: 'وعليكم السلام أحمد، الحمد لله بخير. كيف أحوالك؟',
    reactions: [
      { emoji: '❤️', reactedBy: primeAccount, reactedAt: new Date('2023-06-01T10:05:00') },
    ],
    senderId: fakeUsers[0].id,
    createdAt: new Date('2023-06-01T10:05:00'),
    updatedAt: new Date('2023-06-01T10:05:00'),
    unread: false,
  },
];

const omarMessages: Message[] = [
  {
    id: '3',
    roomId: omarRoom.id,
    content: 'عمر، هل انتهيت من مراجعة المستندات؟',
    reactions: [],
    senderId: primeAccount.id,
    createdAt: new Date('2023-06-02T15:30:00'),
    updatedAt: new Date('2023-06-02T15:30:00'),
    unread: false,
  },
  {
    id: '4',
    roomId: omarRoom.id,
    content: 'نعم، انتهيت منها. سأرسل لك التقرير النهائي خلال ساعة',
    reactions: [
      { emoji: '👍', reactedBy: primeAccount, reactedAt: new Date('2023-06-02T15:35:00') },
    ],
    senderId: fakeUsers[1].id,
    createdAt: new Date('2023-06-02T15:35:00'),
    updatedAt: new Date('2023-06-02T15:35:00'),
    unread: true,
  },
];

const saraMessages: Message[] = [
  {
    id: '5',
    roomId: saraRoom.id,
    content: 'مرحباً سارة، هل أنهيتي تصميم الواجهة الجديدة؟',
    reactions: [],
    senderId: primeAccount.id,
    createdAt: new Date('2023-06-03T09:00:00'),
    updatedAt: new Date('2023-06-03T09:00:00'),
    unread: false,
  },
];

// Combine all messages and rooms for export
const fakeMessages = [...fatimaMessages, ...omarMessages, ...saraMessages];
const fakeRooms = [fatimaRoom, omarRoom, saraRoom];

export { fakeUsers, fakeRooms, fakeMessages, primeAccount, secondaryPrimeAccount };
