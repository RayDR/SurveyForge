// components/modules/Dashboard/MenuBar.tsx

import { Menu, X } from 'lucide-react';
import { useConfig } from '../../../contexts/ConfigContext';
import { useTheme } from '../../../contexts/ThemeContext';
import ProfileMenu from './ProfileMenu';
import { useState } from 'react';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/forms-manager', label: 'Forms' },
  { href: '/dashboard/survey-manager', label: 'Surveys' },
  { href: '/dashboard/settings', label: 'Settings' },
];

export default function MenuBar({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
  const { config } = useConfig();
  const { themeKey } = useTheme();
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<{ href: string; label: string }[]>([]);
  const router = useRouter();

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const matches = navLinks.filter(link =>
        link.label.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches);
    }
  };

  const handleSelect = (href: string) => {
    setSearch('');
    setSuggestions([]);
    router.push(href);
  };

  return (
    <header className={`flex items-center justify-between px-4 py-2 shadow theme-${themeKey} border-b-alternate relative`}>
      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2">
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* Title */}
        <h1 className="text-md font-semibold truncate">{config.title}</h1>
      </div>

      {/* Search */}
      <div className="relative flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && suggestions.length > 0) {
              handleSelect(suggestions[0].href);
            }
          }}
          className="w-full rounded-md p-2 border-alternate focus:outline-none focus:ring focus:border-alternate select"
        />
        {suggestions.length > 0 && (
          <div className="absolute top-12 left-0 right-0 border-alternate rounded-md shadow-md z-50 overflow-hidden select">
            {suggestions.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(link.href)}
                className="w-full text-left px-4 py-2 btn-primary"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Profile */}
      <ProfileMenu />
    </header>
  );
}
