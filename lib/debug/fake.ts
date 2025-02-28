import { Message } from '@/interfaces/chats';
import Room from '@/interfaces/chats/room';
import { User } from '@/interfaces/users';

// Primary debug user (representing the logged-in user)
const primeUser: User = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed.mohamed@example.com',
  joinedAt: new Date('2023-01-15'),
  role: 'admin',
  avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Leo',
};

// Other fake users (representing contacts)
const fakeUsers: User[] = [
  {
    id: '2',
    name: 'فاطمة علي',
    email: 'fatima.ali@example.com',
    joinedAt: new Date('2023-02-01'),
    role: 'user',
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Kingston',
  },
  {
    id: '3',
    name: 'عمر حسن',
    email: 'omar.hassan@example.com',
    joinedAt: new Date('2023-03-10'),
    role: 'user',
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Aidan',
  },
  {
    id: '4',
    name: 'سارة أحمد',
    email: 'sara.ahmed@example.com',
    joinedAt: new Date('2023-04-05'),
    role: 'user',
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Sarah',
  },
  {
    id: '5',
    name: 'خالد محمود',
    email: 'khaled.mahmoud@example.com',
    joinedAt: new Date('2023-05-20'),
    role: 'user',
    avatarLink: 'https://api.dicebear.com/9.x/glass/svg?seed=Christopher',
  },
];

// Messages grouped by room
const fatimaMessages: Message[] = [
  {
    id: '1',
    roomId: '1',
    content: 'السلام عليكم فاطمة، كيف حالك؟',
    reactions: [{ emoji: '👋', reactedBy: fakeUsers[0] }],
    sender: primeUser,
    createdAt: new Date('2023-06-01T10:00:00'),
    updatedAt: new Date('2023-06-01T10:00:00'),
    unread: false,
  },
  {
    id: '2',
    roomId: '1',
    content: 'وعليكم السلام أحمد، الحمد لله بخير. كيف أحوالك؟',
    reactions: [{ emoji: '❤️', reactedBy: primeUser }],
    sender: fakeUsers[0],
    createdAt: new Date('2023-06-01T10:05:00'),
    updatedAt: new Date('2023-06-01T10:05:00'),
    unread: false,
  },
];

const omarMessages: Message[] = [
  {
    id: '3',
    roomId: '2',
    content: 'عمر، هل انتهيت من مراجعة المستندات؟',
    reactions: [],
    sender: primeUser,
    createdAt: new Date('2023-06-02T15:30:00'),
    updatedAt: new Date('2023-06-02T15:30:00'),
    unread: false,
  },
  {
    id: '4',
    roomId: '2',
    content: 'نعم، انتهيت منها. سأرسل لك التقرير النهائي خلال ساعة',
    reactions: [{ emoji: '👍', reactedBy: primeUser }],
    sender: fakeUsers[1],
    createdAt: new Date('2023-06-02T15:35:00'),
    updatedAt: new Date('2023-06-02T15:35:00'),
    unread: true,
  },
];

const saraMessages: Message[] = [
  {
    id: '5',
    roomId: '3',
    content: 'مرحباً سارة، هل أنهيتي تصميم الواجهة الجديدة؟',
    reactions: [],
    sender: primeUser,
    createdAt: new Date('2023-06-03T09:00:00'),
    updatedAt: new Date('2023-06-03T09:00:00'),
    unread: false,
  },
];

// Create rooms with their respective messages
const fatimaRoom: Room = {
  id: '1',
  name: 'فاطمة علي',
  createdAt: new Date('2023-01-20'),
  updatedAt: new Date('2023-06-01'),
  createdBy: primeUser,
  participants: [primeUser, fakeUsers[0]],
  avatarLink: fakeUsers[0].avatarLink,
};

const omarRoom: Room = {
  id: '2',
  name: 'عمر حسن',
  createdAt: new Date('2023-02-15'),
  updatedAt: new Date('2023-06-02'),
  createdBy: primeUser,
  participants: [primeUser, fakeUsers[1]],
  avatarLink: fakeUsers[1].avatarLink,
};

const saraRoom: Room = {
  id: '3',
  name: 'سارة أحمد',
  createdAt: new Date('2023-03-01'),
  updatedAt: new Date('2023-06-03'),
  createdBy: primeUser,
  participants: [primeUser, fakeUsers[2]],
  avatarLink: fakeUsers[2].avatarLink,
};

// Combine all messages and rooms for export
const fakeMessages = [...fatimaMessages, ...omarMessages, ...saraMessages];
const fakeRooms = [fatimaRoom, omarRoom, saraRoom];

export { fakeUsers, fakeRooms, fakeMessages, primeUser };
