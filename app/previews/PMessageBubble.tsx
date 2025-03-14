import { MessageBubble } from '@/components/chats';
import { fakeUsers } from '@/lib/debug/fake';

export default function PMessageBubble() {
  return (
    <MessageBubble
      message={{
        id: '1',
        content: 'Hello, how are you?',
        reactions: [],
        senderId: fakeUsers[0].id,
        roomId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        unread: false,
      }}
      isSender={true}
    />
  );
}
