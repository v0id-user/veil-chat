import MagnifyingGlass from '@/public/icons/magnifying-glass.svg';

export default function SearchBar() {
  return (
    <div className="flex items-center mx-auto w-full px-4 lg:w-2/3 lg:px-0">
      <div className="relative w-full">
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <MagnifyingGlass className="fill-[#565656]" />
        </div>
        <input
          type="text"
          placeholder="بحث"
          className="p-2 w-full rounded-full border border-[#C8C8C8] bg-[#A7A7A7] text-[#565656] focus:outline-none pr-10 text-right placeholder-[#565656]"
        />
      </div>
    </div>
  );
}
