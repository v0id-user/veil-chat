import SearchBar from '@/components/utils/SearchBar';
import ThreeDots from '@/public/icons/dots-three-outline-vertical.svg';
import UserPlus from '@/public/icons/user-plus.svg';
import Tab from '@/components/utils/Tab';
import ChatItem from '@/components/chats/ChatItem';
import Link from 'next/link';
import Lock from '@/public/icons/lock-16px.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Trash2 } from 'lucide-react';

export default function Chats() {
  const dummyChats = [
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
    <div className="flex flex-col h-full p-10 border-l border-t border-b border-black bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">محادثات</h1>
        <div className="flex items-center gap-4">
          <UserPlus className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] hover:bg-gray-100 rounded-full cursor-pointer p-1" />
          <Popover>
            <PopoverTrigger asChild>
              <ThreeDots className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] hover:bg-gray-100 rounded-full cursor-pointer p-1" />
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <UserPlus size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">إضافة صديق</span>
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors group">
                  <Trash2 size={16} className="text-red-600 group-hover:text-red-600" />
                  <span className="text-sm text-gray-700 group-hover:text-red-600">
                    حذف المحادثة
                  </span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <SearchBar placeholder="ابحث عن محادثة" className="mt-4" />
      <div className="flex gap-2 mt-4">
        <Tab label="المحادثات" selected={true} onClick={() => {}} />
        <Tab label="الغير مقروءة" selected={false} onClick={() => {}} />
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full">
        {dummyChats.map(chat => (
          <ChatItem key={chat.chatId} {...chat} />
        ))}
      </div>
      <span className="flex items-center justify-center text-xs text-[#969696] text-center mt-4 gap-1">
        <Lock className="w-4 h-4 fill-[#969696]" />
        رسائلك الشخصية محمية
        <Link href="https://veil.im/e2ee" className="text-[#DC0E11] underline">
          بتشفير من طرف إلى طرف
        </Link>
      </span>
    </div>
  );
}
