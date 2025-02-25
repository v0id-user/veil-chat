interface ViewLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export default function ViewLayout({ children, className }: ViewLayoutProps) {
  const baseClass = 'flex flex-col h-full p-10 border-black bg-white min-w-[550px] max-w-[650px]';
  const mergedClass = `${baseClass} ${className}`;
  return <div className={mergedClass}>{children}</div>;
}
