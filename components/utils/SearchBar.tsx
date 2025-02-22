import MagnifyingGlass from '@/public/icons/magnifying-glass.svg';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = 'بحث', className }: SearchBarProps) {
  return (
    <div className={`flex items-center mx-auto w-full ${className}`}>
      <div className="relative w-full">
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <MagnifyingGlass className="fill-[#565656] w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full py-2 px-4 pr-10 rounded-full border border-[#C8C8C8] bg-[#A7A7A7] text-[#565656] focus:outline-none text-right placeholder-[#565656]"
        />
      </div>
    </div>
  );
}
