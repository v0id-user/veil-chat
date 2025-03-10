import { Message } from '@/interfaces/chats';
import { Check, CheckCheck } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isSender: boolean;
}

export default function MessageBubble({ message, isSender }: MessageBubbleProps) {
  return (
    <div className={`flex ${isSender ? 'justify-start' : 'justify-end'} mb-2`}>
      <div
        className={`solid flex max-w-[70%] items-end gap-2 rounded-xl border border-black px-4 py-2 text-black ${
          isSender ? 'rounded-br-none bg-[#DC0E11]' : 'rounded-bl-none bg-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className="flex items-center gap-1 text-xs opacity-70">
          {/* <Clock size={12} /> */}
          {message.createdAt.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
          {isSender && (message.unread ? <CheckCheck size={12} /> : <Check size={12} />)}
        </div>
      </div>
    </div>
  );
}
