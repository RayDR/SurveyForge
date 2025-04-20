import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <aside className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:block`}>
        <div className="text-2xl font-bold mb-8 text-blue-600">📊 Survey UI</div>
        <nav className="flex flex-col gap-6 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-500">🏠 Home</Link>
          <Link href="/dashboard/forms-manager" className="hover:text-blue-500">📝 Forms</Link>
          <Link href="/dashboard/responses-manager" className="hover:text-blue-500">📄 Responses</Link>
          <Link href="/dashboard/settings" className="hover:text-blue-500">⚙️ Settings</Link>
        </nav>
      </aside>
    </>
  );
}

