import SearchBar from '@/components/utils/SearchBar';
import ThreeDots from '@/public/icons/dots-three-outline-vertical.svg';
import UserPlus from '@/public/icons/user-plus.svg';
import Tab from '@/components/utils/Tab';
import { RoomItem } from '@/components/chats';
import Link from 'next/link';
import Lock from '@/public/icons/lock-16px.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Trash2 } from 'lucide-react';
import { fakeRooms } from '@/lib/debug/fake';
import ViewLayout from '@/app/selectable/layout';

export default function ChatsPage() {
  return (
    <ViewLayout className="border-b border-l border-t">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">محادثات</h1>
        <div className="flex items-center gap-4">
          <UserPlus className="h-8 w-8 cursor-pointer rounded-full fill-[#6B6060] p-1 hover:bg-gray-100 hover:fill-[#000]" />
          <Popover>
            <PopoverTrigger asChild>
              <ThreeDots className="h-8 w-8 cursor-pointer rounded-full fill-[#6B6060] p-1 hover:bg-gray-100 hover:fill-[#000]" />
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-gray-50">
                  <UserPlus size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">إضافة صديق</span>
                </button>
                <button className="group flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-gray-50">
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
      <div className="mt-4 flex gap-2">
        <Tab label="المحادثات" selected={true} onClick={() => {}} />
        <Tab label="الغير مقروءة" selected={false} onClick={() => {}} />
      </div>
      <div className="mt-4 flex w-full flex-col gap-2">
        {fakeRooms.map(chat => (
          <RoomItem key={chat.id} {...chat} />
        ))}
      </div>
      <span className="mt-4 flex items-center justify-center gap-1 text-center text-xs text-[#969696]">
        <Lock className="h-4 w-4 fill-[#969696]" />
        رسائلك الشخصية محمية
        <Link href="https://veil.im/e2ee" className="text-[#DC0E11] underline">
          بتشفير من طرف إلى طرف
        </Link>
      </span>
    </ViewLayout>
  );
}
