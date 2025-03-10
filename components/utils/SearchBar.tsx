import MagnifyingGlass from '@/public/icons/magnifying-glass.svg';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = 'بحث', className }: SearchBarProps) {
  return (
    <div className={`mx-auto flex w-full items-center ${className}`}>
      <div className="relative w-full">
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <MagnifyingGlass className="h-5 w-5 fill-[#565656]/50" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-full border border-[#C8C8C8]/50 bg-[#A7A7A7]/50 px-4 py-2 pr-10 text-right text-[#565656]/50 placeholder-[#565656]/50 focus:outline-none"
        />
      </div>
    </div>
  );
}
