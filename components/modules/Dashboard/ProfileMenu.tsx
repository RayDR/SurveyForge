// components/modules/Dashboard/ProfileMenu.tsx

import { useState, useEffect, useRef } from 'react';
import { Settings, Bell, LogOut, User } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { themeKey } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="rounded-full w-8 h-8 bg-red-500 text-white flex items-center justify-center font-bold hover:opacity-90 transition"
        onClick={() => setOpen(!open)}
      >
        SF
      </button>

      {open && (
        <div className={`absolute right-0 mt-2 w-48 theme-${themeKey} border-secondary shadow-lg rounded-md py-2 z-50`}>
          <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:scale-110 transition">
            <User size={16} /> Profile
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:scale-110 transition">
            <Bell size={16} /> Notifications
          </button>
          <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:scale-110 transition">
            <Settings size={16} /> Settings
          </button>
          <div className="border-alternate my-2"></div>
          <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-600 hover:scale-110 transition">
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
