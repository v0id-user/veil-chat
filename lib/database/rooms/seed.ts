import { db } from '@/database';
import { fakeRooms } from '@/lib/debug/fake';
import { createRoom } from './operations';

/**
 * Seeds the rooms table with fake data
 * @returns Promise that resolves when seeding is complete
 */
export async function seedRooms(): Promise<void> {
  try {
    // Check if rooms already exist
    const roomCount = await db.rooms.count();

    if (roomCount > 0) {
      console.log('Rooms already seeded, skipping...');
      return;
    }

    console.log('Seeding rooms...');

    // Add each room to the database
    for (const room of fakeRooms) {
      await createRoom(room);
    }

    console.log(`Successfully seeded ${fakeRooms.length} rooms`);
  } catch (error) {
    console.error('Error seeding rooms:', error);
    throw error;
  }
}

/**
 * Clears all rooms from the database
 * @returns Promise that resolves when clearing is complete
 */
export async function clearRooms(): Promise<void> {
  try {
    await db.rooms.clear();
    console.log('All rooms cleared');
  } catch (error) {
    console.error('Error clearing rooms:', error);
    throw error;
  }
}

/**
 * Resets the rooms table by clearing it and then seeding it with fake data
 * @returns Promise that resolves when reset is complete
 */
export async function resetRooms(): Promise<void> {
  try {
    await clearRooms();
    await seedRooms();
    console.log('Rooms reset complete');
  } catch (error) {
    console.error('Error resetting rooms:', error);
    throw error;
  }
}
