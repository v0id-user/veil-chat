import { Message, Room } from '@/interfaces/chats';
import { User } from '@/interfaces/users';

// Primary debug user (representing the logged-in user)
const primeUser: User = {
  id: '1',
  name: 'أحمد محمد',
  email: 'ahmed.mohamed@example.com',
  joinedAt: new Date('2023-01-15'),
  role: 'admin',
};

// Other fake users (representing contacts)
const fakeUsers: User[] = [
  {
    id: '2',
    name: 'فاطمة علي',
    email: 'fatima.ali@example.com',
    joinedAt: new Date('2023-02-01'),
    role: 'user',
  },
  {
    id: '3',
    name: 'عمر حسن',
    email: 'omar.hassan@example.com',
    joinedAt: new Date('2023-03-10'),
    role: 'user',
  },
  {
    id: '4',
    name: 'سارة أحمد',
    email: 'sara.ahmed@example.com',
    joinedAt: new Date('2023-04-05'),
    role: 'user',
  },
  {
    id: '5',
    name: 'خالد محمود',
    email: 'khaled.mahmoud@example.com',
    joinedAt: new Date('2023-05-20'),
    role: 'user',
  },
];

// WhatsApp style 1-to-1 chat rooms between prime user and contacts
const fakeRooms: Room[] = [
  {
    id: '1',
    name: 'فاطمة علي', // Shows contact name for 1-to-1 chat
    createdAt: new Date('2023-01-20'),
    updatedAt: new Date('2023-06-01'),
    createdBy: primeUser,
    participants: [primeUser, fakeUsers[0]],
  },
  {
    id: '2',
    name: 'عمر حسن',
    createdAt: new Date('2023-02-15'),
    updatedAt: new Date('2023-06-02'),
    createdBy: primeUser,
    participants: [primeUser, fakeUsers[1]],
  },
  {
    id: '3',
    name: 'سارة أحمد',
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-06-03'),
    createdBy: primeUser,
    participants: [primeUser, fakeUsers[2]],
  },
];

const fakeMessages: Message[] = [
  {
    id: '1',
    content: 'السلام عليكم فاطمة، كيف حالك؟',
    reactions: [{ emoji: '👋', reactedBy: fakeUsers[0] }],
    sender: primeUser,
    room: fakeRooms[0],
    createdAt: new Date('2023-06-01T10:00:00'),
    updatedAt: new Date('2023-06-01T10:00:00'),
  },
  {
    id: '2',
    content: 'وعليكم السلام أحمد، الحمد لله بخير. كيف أحوالك؟',
    reactions: [{ emoji: '❤️', reactedBy: primeUser }],
    sender: fakeUsers[0],
    room: fakeRooms[0],
    createdAt: new Date('2023-06-01T10:05:00'),
    updatedAt: new Date('2023-06-01T10:05:00'),
  },
  {
    id: '3',
    content: 'عمر، هل انتهيت من مراجعة المستندات؟',
    reactions: [],
    sender: primeUser,
    room: fakeRooms[1],
    createdAt: new Date('2023-06-02T15:30:00'),
    updatedAt: new Date('2023-06-02T15:30:00'),
  },
  {
    id: '4',
    content: 'نعم، انتهيت منها. سأرسل لك التقرير النهائي خلال ساعة',
    reactions: [{ emoji: '👍', reactedBy: primeUser }],
    sender: fakeUsers[1],
    room: fakeRooms[1],
    createdAt: new Date('2023-06-02T15:35:00'),
    updatedAt: new Date('2023-06-02T15:35:00'),
  },
];
