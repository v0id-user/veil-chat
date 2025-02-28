import { Message } from '@/interfaces/chats';
import { Clock, Check, CheckCheck } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isSender: boolean;
}

export default function MessageBubble({ message, isSender }: MessageBubbleProps) {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[70%] flex items-end gap-2 ${
          isSender ? 'bg-[#DC0E11] text-white' : 'bg-gray-100 text-black border border-gray-200'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className="text-xs flex items-center gap-1 opacity-70">
          <Clock size={12} />
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
