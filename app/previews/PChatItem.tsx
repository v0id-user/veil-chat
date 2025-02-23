import ChatItem from '@/components/chats/ChatItem';

export default function PChatItem() {
  return (
    <ChatItem
      name="فهد العويطر"
      lastMessage="مرحبا, كيف حالك؟"
      time="12:00"
      unread={true}
      chatId="123"
      avatarLink="/150"
    />
  );
}
