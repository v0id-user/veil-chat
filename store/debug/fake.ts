import { Message, Room } from '@/interfaces/chats';
import { User } from '@/interfaces/users';

// Fake users
const fakeUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedAt: new Date('2023-01-15'),
    role: 'admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    joinedAt: new Date('2023-02-01'),
    role: 'user',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    joinedAt: new Date('2023-03-10'),
    role: 'user',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    joinedAt: new Date('2023-04-05'),
    role: 'moderator',
  },
  {
    id: '5',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    joinedAt: new Date('2023-05-20'),
    role: 'user',
  },
];

const fakeRooms: Room[] = [
  {
    id: '1',
    name: 'General Chat',
    createdAt: new Date('2023-01-20'),
    updatedAt: new Date('2023-06-01'),
    createdBy: fakeUsers[0],
    participants: [fakeUsers[0], fakeUsers[1], fakeUsers[2]],
  },
  {
    id: '2',
    name: 'Tech Discussion',
    createdAt: new Date('2023-02-15'),
    updatedAt: new Date('2023-06-02'),
    createdBy: fakeUsers[1],
    participants: [fakeUsers[1], fakeUsers[3], fakeUsers[4]],
  },
  {
    id: '3',
    name: 'Random',
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-06-03'),
    createdBy: fakeUsers[2],
    participants: [fakeUsers[0], fakeUsers[2], fakeUsers[4]],
  },
];

const fakeMessages: Message[] = [
  {
    id: '1',
    content: 'Hey everyone! Welcome to the general chat!',
    reactions: [
      { emoji: '👋', reactedBy: fakeUsers[1] },
      { emoji: '❤️', reactedBy: fakeUsers[2] },
    ],
    sender: fakeUsers[0],
    room: fakeRooms[0],
    createdAt: new Date('2023-06-01T10:00:00'),
    updatedAt: new Date('2023-06-01T10:00:00'),
  },
  {
    id: '2',
    content: 'Thanks for having us here! Looking forward to great discussions.',
    reactions: [{ emoji: '👍', reactedBy: fakeUsers[0] }],
    sender: fakeUsers[1],
    room: fakeRooms[0],
    createdAt: new Date('2023-06-01T10:05:00'),
    updatedAt: new Date('2023-06-01T10:05:00'),
  },
  {
    id: '3',
    content: "What's everyone working on these days?",
    reactions: [],
    sender: fakeUsers[3],
    room: fakeRooms[1],
    createdAt: new Date('2023-06-02T15:30:00'),
    updatedAt: new Date('2023-06-02T15:30:00'),
  },
  {
    id: '4',
    content: "I'm learning TypeScript! It's been quite interesting so far.",
    reactions: [
      { emoji: '🎉', reactedBy: fakeUsers[1] },
      { emoji: '💪', reactedBy: fakeUsers[3] },
    ],
    sender: fakeUsers[4],
    room: fakeRooms[1],
    createdAt: new Date('2023-06-02T15:35:00'),
    updatedAt: new Date('2023-06-02T15:35:00'),
  },
];
