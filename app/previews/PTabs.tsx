import Tab from '@/components/utils/Tab';

export default function PTabs() {
  return (
    <div className="flex gap-2">
      <Tab label="المحادثات" selected={true} onClick={() => {}} />
      <Tab label="الغير مقروءة" selected={false} onClick={() => {}} />
    </div>
  );
}
