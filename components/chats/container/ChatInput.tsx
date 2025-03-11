'use client';

import { Paperclip, Smile, Mic, Send } from 'lucide-react';
import { useState } from 'react';

interface ChatInputProps {
  onSendMessageAction: (message: string) => void;
}

export default function ChatInput({ onSendMessageAction }: ChatInputProps) {
  const [message, setMessage] = useState('');
  return (
    <div className="flex items-center justify-between gap-5 rounded-3xl border border-black bg-[#F0F2F5] p-4">
      <button>
        <Paperclip className="h-5 w-5 text-[#565656]" />
      </button>
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="أكتب رسالة..."
          value={message}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onSendMessageAction(message);
              setMessage('');
            }
          }}
          className="w-full rounded-2xl p-3 pl-10"
          onChange={e => setMessage(e.target.value)}
        />
        <Smile
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#565656]"
          onClick={() => console.log('TODO: Popup for emoji')}
        />
      </div>
      {message.length > 0 ? (
        <Send
          className="h-5 w-5 text-[#565656]"
          onClick={() => {
            onSendMessageAction(message);
            setMessage('');
          }}
        />
      ) : (
        <Mic
          className="h-5 w-5 text-[#565656]"
          onClick={() => console.log('TODO: Start recording')}
        />
      )}
    </div>
  );
}
