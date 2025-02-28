// Local database schema using IndexedDB using Dexie
import { Message, Room } from '@/interfaces/chats';
import Dexie, { type EntityTable } from 'dexie';
import relationships from 'dexie-relationships';

// Schema for the database

const db = new Dexie('ChatsDatabase', { addons: [relationships] }) as Dexie & {
  // All rooms metadata
  rooms: EntityTable<
    Room,
    'id' // primary key "id" (for the typings only)
  >;

  // All messages
  messages: EntityTable<
    Message,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  rooms: '++id, name, createdAt, updatedAt, avatarLink, createdBy, participants', // primary key "id" (for the runtime!)
  messages: '++id, roomId -> rooms.id, content, reactions, sender, createdAt, updatedAt, unread', // primary key "id" (for the runtime!)
});

export { db };
