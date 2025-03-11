import { db } from '@/database';
import { fakeMessages } from '@/lib/debug/fake';
import { createMessage } from './operations';

/**
 * Seeds the messages table with fake data
 * @returns Promise that resolves when seeding is complete
 */
export async function seedMessages(): Promise<void> {
  try {
    // Check if messages already exist
    const messageCount = await db.messages.count();

    if (messageCount > 0) {
      console.log('Messages already seeded, skipping...');
      return;
    }

    console.log('Seeding messages...');

    // Add each message to the database
    for (const message of fakeMessages) {
      await createMessage(message);
    }

    console.log(`Successfully seeded ${fakeMessages.length} messages`);
  } catch (error) {
    console.error('Error seeding messages:', error);
    throw error;
  }
}

/**
 * Clears all messages from the database
 * @returns Promise that resolves when clearing is complete
 */
export async function clearMessages(): Promise<void> {
  try {
    await db.messages.clear();
    console.log('All messages cleared');
  } catch (error) {
    console.error('Error clearing messages:', error);
    throw error;
  }
}

/**
 * Resets the messages table by clearing it and then seeding it with fake data
 * @returns Promise that resolves when reset is complete
 */
export async function resetMessages(): Promise<void> {
  try {
    await clearMessages();
    await seedMessages();
    console.log('Messages reset complete');
  } catch (error) {
    console.error('Error resetting messages:', error);
    throw error;
  }
}
