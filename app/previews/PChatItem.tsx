import ChatItem from '@/components/chats/ChatItem';

export default function PChatItem() {
  const chats = [
    {
      name: 'فهد العويطر',
      lastMessage: 'مرحبا, كيف حالك؟',
      time: '12:00',
      unread: true,
      chatId: '123',
      avatarLink: '/150',
    },
    {
      name: 'محمد السالم',
      lastMessage: 'شكراً جزيلاً',
      time: '11:45',
      unread: false,
      chatId: '124',
      avatarLink: '/151',
    },
    {
      name: 'سارة الأحمد',
      lastMessage: 'موعدنا غداً في المكتب',
      time: '10:30',
      unread: true,
      chatId: '125',
      avatarLink: '/152',
    },
    {
      name: 'عبدالله المحمد',
      lastMessage: 'تم إرسال الملفات المطلوبة',
      time: '09:15',
      unread: false,
      chatId: '126',
      avatarLink: '/153',
    },
    {
      name: 'نورة القحطاني',
      lastMessage: 'أتمنى لك يوماً سعيداً',
      time: 'يوم أمس',
      unread: true,
      chatId: '127',
      avatarLink: '/154',
    },
  ];

  return (
    <div className="flex flex-col">
      {chats.map(chat => (
        <ChatItem
          key={chat.chatId}
          name={chat.name}
          lastMessage={chat.lastMessage}
          time={chat.time}
          unread={chat.unread}
          chatId={chat.chatId}
          avatarLink={chat.avatarLink}
        />
      ))}
    </div>
  );
}
