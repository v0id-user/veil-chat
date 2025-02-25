'use client';
import { useState } from 'react';
import PSearchBar from './PSearchBar';
import PTabs from './PTabs';
import PChatItem from './PChatItem';
export default function Previews() {
  const [selectedComponent, setSelectedComponent] = useState('searchBar');

  const renderPreview = () => {
    switch (selectedComponent) {
      case 'searchBar':
        return <PSearchBar />;
      case 'tabs':
        return <PTabs />;
      case 'chatItem':
        return <PChatItem />;
      default:
        return <div className="p-8">Select a component to preview</div>;
    }
  };

  if (process.env.NEXT_PUBLIC_DEBUG === 'false' || process.env.NEXT_PUBLIC_DEBUG === undefined) {
    window.location.href = '/';
    return;
  }

  return (
    <div className="flex min-h-screen ltr:flex-row rtl:flex-row-reverse">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
        <h1 className="text-xl font-bold mb-4">Components</h1>
        <button
          onClick={() => setSelectedComponent('searchBar')}
          className={`w-full text-left p-2 rounded ${
            selectedComponent === 'searchBar' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          SearchBar
        </button>
        <button
          onClick={() => setSelectedComponent('tabs')}
          className={`w-full text-left p-2 rounded ${
            selectedComponent === 'tabs' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          Tabs
        </button>
        <button
          onClick={() => setSelectedComponent('chatItem')}
          className={`w-full text-left p-2 rounded ${
            selectedComponent === 'chatItem' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
        >
          ChatItem
        </button>
      </div>

      {/* Preview Area */}
      <div className="flex-1 bg-white">{renderPreview()}</div>
    </div>
  );
}
