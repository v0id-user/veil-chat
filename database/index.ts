// Local database schema using IndexedDB using Dexie
import { Message, Room } from '@/interfaces/chats';
import { Account } from '@/interfaces/accounts';
import Dexie, { type EntityTable } from 'dexie';
import relationships from 'dexie-relationships';
import { seedMessages } from '@/lib/database/messages/seed';
import { seedRooms } from '@/lib/database/rooms/seed';

// Schema for the database

const db = new Dexie('ChatsDatabase', { addons: [relationships] }) as Dexie & {
  // Prime account a.k.a. Logged in account
  primeAccount: EntityTable<Account, 'id'>;

  /* 
  All connected with accounts - 
    refers to users within the app who are linked by 
    adding each other to their contacts, messaging, or 
    interacting in other ways. These connections are treated as 
    individual accounts, abstracted with key details such as Avatar, 
    Name, Email, Role, etc., and stored locally for quick retrieval. 
  */
  accounts: EntityTable<Account, 'id'>;

  // All rooms metadata
  rooms: EntityTable<Room, 'id'>;

  // All messages
  messages: EntityTable<Message, 'id'>;
};

// Schema declaration:
db.version(1).stores({
  primeAccount: '++id, name, email, joinedAt, role, avatarLink',
  accounts: '++id, name, email, joinedAt, role, avatarLink',
  rooms: '++id, name, createdAt, updatedAt, avatarLink, createdBy -> accounts.id, participants',
  messages: '++id, room -> rooms.id, content, sender -> accounts.id, createdAt, updatedAt, unread',
});

// Initialize database with seed data
async function initializeDatabase() {
  try {
    await seedRooms();
    await seedMessages();
    console.log('Database initialization complete');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase();

export { db };
