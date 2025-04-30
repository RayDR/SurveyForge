import { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import MenuBar from './MenuBar';
import { useTheme } from '../../../contexts/ThemeContext';

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeKey } = useTheme();

  return (
    <div className={`flex h-screen theme-${themeKey}`}>
      <Sidebar isOpen={menuOpen} />

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="flex-1 w-full flex flex-col">
        <MenuBar isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
