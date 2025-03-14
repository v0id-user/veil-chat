export default function MessagesList({ children }: { children: React.ReactNode }) {
  return <div className="h-full flex-1 space-y-6 overflow-y-auto px-2">{children}</div>;
}
