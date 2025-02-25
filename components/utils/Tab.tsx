interface TabProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function Tab({ label, selected, onClick }: TabProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-4 py-2 ${
        selected ? 'bg-[#DC0E11]/50 text-[#DC0E11]' : 'bg-gray-100/50 text-gray-500'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
