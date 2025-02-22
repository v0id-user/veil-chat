import SearchBar from '@/components/utils/SearchBar';
import ThreeDots from '@/public/icons/dots-three-outline-vertical.svg';
import UserPlus from '@/public/icons/user-plus.svg';
import Tab from '@/components/utils/Tab';

export default function Chats() {
  return (
    <div className="flex flex-col h-full p-12 border-l border-t border-b border-black bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">محادثات</h1>
        <div className="flex items-center gap-4">
          <UserPlus className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] hover:bg-gray-100 rounded-full cursor-pointer p-1" />
          <ThreeDots className="w-8 h-8 fill-[#6B6060] hover:fill-[#000] hover:bg-gray-100 rounded-full cursor-pointer p-1" />
        </div>
      </div>
      <SearchBar placeholder="ابحث عن محادثة" className="mt-4" />
      <div className="flex gap-2 mt-4">
        <Tab label="المحادثات" selected={true} onClick={() => {}} />
        <Tab label="الغير مقروءة" selected={false} onClick={() => {}} />
      </div>
    </div>
  );
}
