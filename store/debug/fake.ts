import { Message, Room } from '@/interfaces/chats';
import { User } from '@/interfaces/users';

// Primary debug user (representing the logged-in user)
const primeUser: User = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed.mohamed@example.com',
  joinedAt: new Date('2023-01-15'),
  role: 'admin',
  avatarLink: '/151',
};

// Other fake users (representing contacts)
const fakeUsers: User[] = [
  {
    id: '2',
    name: 'فاطمة علي',
    email: 'fatima.ali@example.com',
    joinedAt: new Date('2023-02-01'),
    role: 'user',
    avatarLink: '/152',
  },
  {
    id: '3',
    name: 'عمر حسن',
    email: 'omar.hassan@example.com',
    joinedAt: new Date('2023-03-10'),
    role: 'user',
    avatarLink: '/153',
  },
  {
    id: '4',
    name: 'سارة أحمد',
    email: 'sara.ahmed@example.com',
    joinedAt: new Date('2023-04-05'),
    role: 'user',
    avatarLink: '/154',
  },
  {
    id: '5',
    name: 'خالد محمود',
    email: 'khaled.mahmoud@example.com',
    joinedAt: new Date('2023-05-20'),
    role: 'user',
    avatarLink: '/155',
  },
];

// Messages grouped by room
const fatimaMessages: Message[] = [
  {
    id: '1',
    content: 'السلام عليكم فاطمة، كيف حالك؟',
    reactions: [{ emoji: '👋', reactedBy: fakeUsers[0] }],
    sender: primeUser,
    room: null as any,
    createdAt: new Date('2023-06-01T10:00:00'),
    updatedAt: new Date('2023-06-01T10:00:00'),
  },
  {
    id: '2',
    content: 'وعليكم السلام أحمد، الحمد لله بخير. كيف أحوالك؟',
    reactions: [{ emoji: '❤️', reactedBy: primeUser }],
    sender: fakeUsers[0],
    room: null as any,
    createdAt: new Date('2023-06-01T10:05:00'),
    updatedAt: new Date('2023-06-01T10:05:00'),
  },
];

const omarMessages: Message[] = [
  {
    id: '3',
    content: 'عمر، هل انتهيت من مراجعة المستندات؟',
    reactions: [],
    sender: primeUser,
    room: null as any,
    createdAt: new Date('2023-06-02T15:30:00'),
    updatedAt: new Date('2023-06-02T15:30:00'),
  },
  {
    id: '4',
    content: 'نعم، انتهيت منها. سأرسل لك التقرير النهائي خلال ساعة',
    reactions: [{ emoji: '👍', reactedBy: primeUser }],
    sender: fakeUsers[1],
    room: null as any,
    createdAt: new Date('2023-06-02T15:35:00'),
    updatedAt: new Date('2023-06-02T15:35:00'),
  },
];

const saraMessages: Message[] = [
  {
    id: '5',
    content: 'مرحباً سارة، هل أنهيتي تصميم الواجهة الجديدة؟',
    reactions: [],
    sender: primeUser,
    room: null as any,
    createdAt: new Date('2023-06-03T09:00:00'),
    updatedAt: new Date('2023-06-03T09:00:00'),
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
  avatarLink: '/152',
  unread: false,
  lastMessage: fatimaMessages[1],
  lastMessageAt: new Date('2023-06-01T10:05:00'),
};

const omarRoom: Room = {
  id: '2',
  name: 'عمر حسن',
  createdAt: new Date('2023-02-15'),
  updatedAt: new Date('2023-06-02'),
  createdBy: primeUser,
  participants: [primeUser, fakeUsers[1]],
  avatarLink: '/153',
  unread: true,
  lastMessage: omarMessages[1],
  lastMessageAt: new Date('2023-06-02T15:35:00'),
};

const saraRoom: Room = {
  id: '3',
  name: 'سارة أحمد',
  createdAt: new Date('2023-03-01'),
  updatedAt: new Date('2023-06-03'),
  createdBy: primeUser,
  participants: [primeUser, fakeUsers[2]],
  avatarLink: '/154',
  unread: false,
  lastMessage: saraMessages[0],
  lastMessageAt: new Date('2023-06-03T09:00:00'),
};

// Assign rooms to their messages
fatimaMessages.forEach(msg => (msg.room = fatimaRoom));
omarMessages.forEach(msg => (msg.room = omarRoom));
saraMessages.forEach(msg => (msg.room = saraRoom));

// Combine all messages and rooms for export
const fakeMessages = [...fatimaMessages, ...omarMessages, ...saraMessages];
const fakeRooms = [fatimaRoom, omarRoom, saraRoom];

export { fakeUsers, fakeRooms, fakeMessages };
