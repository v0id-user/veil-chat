import { Room } from '@/interfaces/chats';
import { Account } from '@/interfaces/accounts';
import { db } from '@/database';

/**
 * Create a new room in the database
 * @param room The room to add
 * @returns Promise with the ID of the newly created room
 */
export async function createRoom(room: Room): Promise<string> {
  try {
    const id = await db.rooms.add(room);
    return id.toString();
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
}

/**
 * Get a room by its ID with related entities
 * @param id The room ID
 * @returns Promise with the room and its related entities
 */
export async function getRoom(id: string): Promise<Room | undefined> {
  try {
    // With Dexie-relationships, foreign keys are automatically resolved
    // when you access the object properties
    return await db.rooms.get(id);
  } catch (error) {
    console.error('Error getting room:', error);
    throw error;
  }
}

/**
 * Get all rooms
 * @returns Promise with an array of rooms with their related entities
 */
export async function getAllRooms(): Promise<Room[]> {
  try {
    // With Dexie-relationships, foreign keys are automatically resolved
    // when you access the object properties
    return await db.rooms.toArray();
  } catch (error) {
    console.error('Error getting all rooms:', error);
    throw error;
  }
}

/**
 * Get rooms by participant
 * @param accountId The account ID of the participant
 * @returns Promise with an array of rooms where the account is a participant
 */
export async function getRoomsByParticipant(accountId: string): Promise<Room[]> {
  try {
    // First get all rooms
    const allRooms = await db.rooms.toArray();

    // Then filter rooms where the account is a participant
    return allRooms.filter(room => room.participants.some(p => p.id === accountId));
  } catch (error) {
    console.error('Error getting rooms by participant:', error);
    throw error;
  }
}

/**
 * Update an existing room
 * @param id The room ID
 * @param updates Partial room object with the fields to update
 * @returns Promise that resolves when the update is complete
 */
export async function updateRoom(id: string, updates: Partial<Room>): Promise<void> {
  try {
    // Ensure we don't modify the id
    const { ...updateData } = updates;

    await db.rooms.update(id, updateData);
  } catch (error) {
    console.error('Error updating room:', error);
    throw error;
  }
}

/**
 * Add a participant to a room
 * @param roomId The room ID
 * @param participant The account to add as a participant
 * @returns Promise that resolves when the update is complete
 */
export async function addParticipantToRoom(roomId: string, participant: Account): Promise<void> {
  try {
    const room = await db.rooms.get(roomId);
    if (!room) throw new Error('Room not found');

    // Check if participant already exists
    if (room.participants.some(p => p.id === participant.id)) {
      return; // Participant already exists, no need to add
    }

    const participants = [...room.participants, participant];
    await db.rooms.update(roomId, { participants });
  } catch (error) {
    console.error('Error adding participant to room:', error);
    throw error;
  }
}

/**
 * Remove a participant from a room
 * @param roomId The room ID
 * @param accountId The ID of the account to remove
 * @returns Promise that resolves when the update is complete
 */
export async function removeParticipantFromRoom(roomId: string, accountId: string): Promise<void> {
  try {
    const room = await db.rooms.get(roomId);
    if (!room) throw new Error('Room not found');

    const participants = room.participants.filter(p => p.id !== accountId);
    await db.rooms.update(roomId, { participants });
  } catch (error) {
    console.error('Error removing participant from room:', error);
    throw error;
  }
}

/**
 * Delete a room
 * @param id The room ID
 * @returns Promise that resolves when the deletion is complete
 */
export async function deleteRoom(id: string): Promise<void> {
  try {
    await db.rooms.delete(id);
  } catch (error) {
    console.error('Error deleting room:', error);
    throw error;
  }
}

/**
 * Delete a room and all its messages
 * @param id The room ID
 * @returns Promise that resolves when the deletion is complete
 */
export async function deleteRoomWithMessages(id: string): Promise<void> {
  try {
    await db.transaction('rw', [db.rooms, db.messages], async () => {
      // Delete all messages in the room
      await db.messages.where('room').equals(id).delete();

      // Delete the room
      await db.rooms.delete(id);
    });
  } catch (error) {
    console.error('Error deleting room with messages:', error);
    throw error;
  }
}

/**
 * Search rooms by name
 * @param query The search query
 * @returns Promise with an array of rooms matching the search query
 */
export async function searchRoomsByName(query: string): Promise<Room[]> {
  try {
    const lowerQuery = query.toLowerCase();
    const allRooms = await db.rooms.toArray();

    return allRooms.filter(room => room.name.toLowerCase().includes(lowerQuery));
  } catch (error) {
    console.error('Error searching rooms by name:', error);
    throw error;
  }
}
