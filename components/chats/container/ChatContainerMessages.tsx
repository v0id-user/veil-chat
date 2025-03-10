import Lock from '@/public/icons/lock-16px.svg';
import MessageBubble from '@/components/chats/MessageBubble';

const DefaultE2EEMessage = () => {
  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-lg bg-[#DCA50E]/50 p-2 text-xs">
      <Lock className="h-3 w-3 fill-black" />
      <span>
        الرسائل بين الأطراف مشفرة بشكل كامل، مما يضمن أنه لا يمكن لأي جهة خارج نطاق المحادثة الاطلاع
        عليها أو تخزينها، بما في ذلك مزود الخدمة نفسه.{' '}
        <a href="https://veil.im/e2ee" className="font-medium underline hover:text-black/70">
          اعرف اكثر
        </a>
      </span>
    </div>
  );
};

export default function ChatContainerMessages() {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto rounded-bl-xl border border-b-black border-l-black bg-[#EFE2E2]/75 p-4">
      <div className="mb-6 flex justify-center">
        <DefaultE2EEMessage />
      </div>
      <div className="flex-1 space-y-6 px-2">
        <MessageBubble
          message={{
            id: '1',
            content: 'مرحبا بك في المحادثة',
            createdAt: new Date(),
            senderId: 'user1',
            roomId: 'room1',
            updatedAt: new Date(),
            reactions: [],
            unread: false,
          }}
          isSender={true}
        />

        <MessageBubble
          message={{
            id: '2',
            content: 'أنا جيد جداً، شكراً لك على الاستفسار!',
            createdAt: new Date(),
            senderId: 'user2',
            roomId: 'room1',
            updatedAt: new Date(),
            reactions: [],
            unread: false,
          }}
          isSender={false}
        />
      </div>
    </div>
  );
}
