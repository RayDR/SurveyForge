// components/modules/Dashboard/Sidebar.tsx

import { useRouter } from 'next/router';
import { useTheme } from '../../../contexts/ThemeContext';
import { useConfig } from '../../../contexts/ConfigContext';
import {
  ChevronDown, ChevronUp, Home, Settings,
  FileText, Plus, Zap, Info, ChevronsLeft, ChevronsRight
} from 'lucide-react';
import { Bell, LogOut, Settings as SettingsIcon, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
  { href: '/dashboard/forms-manager', label: 'Forms', icon: <FileText size={18} /> },
  { href: '/dashboard/survey-manager', label: 'Surveys', icon: <Zap size={18} /> },
  {
    label: 'More',
    icon: <Plus size={18} />,
    submenu: [
      { href: '/dashboard/nothing', label: 'Nothing', icon: <Info size={16} /> },
    ]
  },
  { href: '/dashboard/settings', label: 'Settings', icon: <Settings size={18} /> },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const { config } = useConfig();
  const { themeKey } = useTheme();
  const router = useRouter();
  const { asPath } = router;

  const [expandedMenus, setExpandedMenus] = useState<Record<number, boolean>>({});
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('sidebar:collapsed');
    if (stored !== null) setCollapsed(stored === 'true');
  }, []);

  const toggleCollapsed = () => {
    const next = !collapsed;
    localStorage.setItem('sidebar:collapsed', String(next));
    setCollapsed(next);
  };

  const toggleExpand = (idx: number) => {
    if (collapsed) {
      setCollapsed(false);
      return;
    }
    setExpandedMenus((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  console.log(asPath);
  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return asPath === '/dashboard';
    }
    return asPath.startsWith(href);
  };
  

  const handleNavigate = (href: string) => {
    if (asPath !== href) {
      router.push(href);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen
        ${collapsed ? 'w-16' : 'w-64'}
        md:relative flex flex-col justify-between
        transition-[width] duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 theme-${themeKey} shadow-lg
      `}
    >
      {/* Header */}
      <div>
        {/* Logo & Short Title */}
        <div className="flex items-center justify-between px-4">
          {config.logo ? (
            <img
              src={config.logo}
              alt="📊"
              className="h-8 object-contain"
            />
          ) : '📊'}
          <span className="text-xl font-bold truncate">{!collapsed && config.shortTitle}</span>
          <button
            onClick={toggleCollapsed}
            className="text-white opacity-70 hover:opacity-100 transition"
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 px-2">
          {navLinks.map((link, idx) => (
            link.submenu ? (
              <div key={idx} className="flex flex-col">
                <button
                  onClick={() => toggleExpand(idx)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md transition-all hover:bg-white/10 ${
                    expandedMenus[idx] ? 'bg-white/10' : ''
                  }`}
                >
                  <span className="flex items-center gap-2 font-medium">
                    {link.icon} {!collapsed && link.label}
                  </span>
                  {!collapsed && (
                    expandedMenus[idx] ? <ChevronUp size={18} /> : <ChevronDown size={18} />
                  )}
                </button>
                {!collapsed && expandedMenus[idx] && link.submenu.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleNavigate(sub.href)}
                    className={`ml-6 mt-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-left ${
                      isActive(sub.href) ? 'bg-white/10 border-l-4 border-current' : ''
                    } hover:bg-white/10`}
                  >
                    <span className="flex gap-2 items-center">{sub.icon} {sub.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={idx}
                onClick={() => handleNavigate(link.href)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all duration-200 w-full text-left ${
                  isActive(link.href) ? 'bg-white/10 border-l-4 border-current' : ''
                } hover:bg-white/10`}
              >
                <span className="flex items-center gap-2">
                  {link.icon}
                  {!collapsed && link.label}
                </span>
              </button>
            )
          ))}
        </nav>
      </div>

      {/* Footer Shortcuts */}
      <div className="mt-4 pt-3 border-t border-white/10 flex justify-around px-2 overflow-y-hidden">
        <button className="hover:scale-110 transition" title="Notifications">
          <Bell size={20} />
        </button>
        <button className="hover:scale-110 transition" title="Profile">
          <User size={20} />
        </button>
        <button className="hover:scale-110 transition" title="Settings" onClick={() => handleNavigate('/dashboard/settings')}>
          <SettingsIcon size={20} />
        </button>
        <button className="hover:scale-110 transition" title="Logout">
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
}
