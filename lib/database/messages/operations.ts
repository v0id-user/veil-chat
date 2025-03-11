import { Message } from '@/interfaces/chats';
import { db } from '@/database';

/**
 * Create a new message in the database
 * @param message The message to add
 * @returns Promise with the ID of the newly created message
 */
export async function createMessage(message: Message): Promise<string> {
  try {
    const id = await db.messages.add(message);
    return id.toString();
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
}

/**
 * Get a message by its ID with related entities
 * @param id The message ID
 * @returns Promise with the message and its related entities
 */
export async function getMessage(id: string): Promise<Message | undefined> {
  try {
    // With Dexie-relationships, foreign keys are automatically resolved
    // when you access the object properties
    return await db.messages.get(id);
  } catch (error) {
    console.error('Error getting message:', error);
    throw error;
  }
}

/**
 * Get all messages for a specific room with related entities
 * @param roomId The room ID
 * @returns Promise with an array of messages with their related entities
 */
export async function getMessagesByRoom(roomId: string): Promise<Message[]> {
  try {
    return await db.messages.where('room').equals(roomId).sortBy('createdAt');
  } catch (error) {
    console.error('Error getting messages by room:', error);
    throw error;
  }
}

/**
 * Get all unread messages
 * @returns Promise with an array of unread messages
 */
export async function getUnreadMessages(): Promise<Message[]> {
  try {
    return await db.messages.where('unread').equals(1).toArray();
  } catch (error) {
    console.error('Error getting unread messages:', error);
    throw error;
  }
}

/**
 * Update an existing message
 * @param id The message ID
 * @param updates Partial message object with the fields to update
 * @returns Promise that resolves when the update is complete
 */
export async function updateMessage(id: string, updates: Partial<Message>): Promise<void> {
  try {
    // Ensure we don't modify the id
    const { ...updateData } = updates;

    await db.messages.update(id, updateData);
  } catch (error) {
    console.error('Error updating message:', error);
    throw error;
  }
}

/**
 * Mark a message as read
 * @param id The message ID
 * @returns Promise that resolves when the update is complete
 */
export async function markMessageAsRead(id: string): Promise<void> {
  try {
    await db.messages.update(id, { unread: false });
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error;
  }
}

/**
 * Delete a message
 * @param id The message ID
 * @returns Promise that resolves when the deletion is complete
 */
export async function deleteMessage(id: string): Promise<void> {
  try {
    await db.messages.delete(id);
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
}

/**
 * Delete all messages in a room
 * @param roomId The room ID
 * @returns Promise that resolves when the deletion is complete
 */
export async function deleteAllMessagesInRoom(roomId: string): Promise<void> {
  try {
    await db.messages.where('room').equals(roomId).delete();
  } catch (error) {
    console.error('Error deleting messages in room:', error);
    throw error;
  }
}

/**
 * Add a reaction to a message
 * @param messageId The message ID
 * @param reaction The reaction to add
 * @returns Promise that resolves when the update is complete
 */
export async function addReactionToMessage(
  messageId: string,
  reaction: Message['reactions'][0]
): Promise<void> {
  try {
    const message = await db.messages.get(messageId);
    if (!message) throw new Error('Message not found');

    const reactions = [...message.reactions, reaction];
    await db.messages.update(messageId, { reactions });
  } catch (error) {
    console.error('Error adding reaction to message:', error);
    throw error;
  }
}

/**
 * Remove a reaction from a message
 * @param messageId The message ID
 * @param accountId The ID of the account that added the reaction
 * @param emoji The emoji to remove
 * @returns Promise that resolves when the update is complete
 */
export async function removeReactionFromMessage(
  messageId: string,
  accountId: string,
  emoji: string
): Promise<void> {
  try {
    const message = await db.messages.get(messageId);
    if (!message) throw new Error('Message not found');

    const reactions = message.reactions.filter(
      r => !(r.reactedBy.id === accountId && r.emoji === emoji)
    );

    await db.messages.update(messageId, { reactions });
  } catch (error) {
    console.error('Error removing reaction from message:', error);
    throw error;
  }
}
