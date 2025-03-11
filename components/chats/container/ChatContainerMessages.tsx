import Lock from '@/public/icons/lock-16px.svg';
import MessageBubble from '@/components/chats/MessageBubble';
import { Message } from '@/interfaces/chats';
import ChatInput from '@/components/chats/container/ChatInput';
import { useEffect, useState } from 'react';
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

const MessagesList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 space-y-6 px-2">{children}</div>;
};
export default function ChatContainerMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: '1',
        content: 'مرحبا بك في المحادثة',
        createdAt: new Date(),
        senderId: 'user1',
        roomId: 'room1',
        updatedAt: new Date(),
        reactions: [],
        unread: false,
      },
      {
        id: '2',
        content: 'أنا جيد جداً، شكراً لك على الاستفسار!',
        createdAt: new Date(),
        senderId: 'user2',
        roomId: 'room1',
        updatedAt: new Date(),
        reactions: [],
        unread: false,
      },
    ]);
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto rounded-bl-xl border border-b-black border-l-black bg-[#EFE2E2]/75 p-4">
      <div className="mb-6 flex justify-center">
        <DefaultE2EEMessage />
      </div>
      <MessagesList>
        {messages.map((msg: Message, index: number) => (
          <MessageBubble key={index} message={msg} isSender={msg.senderId === 'user1'} />
        ))}
      </MessagesList>

      <ChatInput
        onSendMessageAction={message => {
          const msg: Message = {
            id: '2',
            content: message,
            createdAt: new Date(),
            senderId: 'user1',
            roomId: 'room1',
            updatedAt: new Date(),
            reactions: [],
            unread: false,
          };
          setMessages([...messages, msg]);
        }}
      />
    </div>
  );
}
