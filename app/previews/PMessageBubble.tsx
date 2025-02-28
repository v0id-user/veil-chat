import MessageBubble from '@/components/chats/MessageBubble';
import { fakeUsers } from '@/lib/debug/fake';

export default function PMessageBubble() {
  return (
    <MessageBubble
      message={{
        id: '1',
        content: 'Hello, how are you?',
        reactions: [],
        sender: fakeUsers[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
      isSender={true}
    />
  );
}
