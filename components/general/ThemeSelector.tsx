// components/general/ThemeSelector.tsx

import { ThemeKey } from '../../contexts/ThemeContext';

interface ThemeSelectorProps {
  selectedTheme: ThemeKey;
  onChange: (theme: ThemeKey) => void;
}

const themes: { key: ThemeKey; colors: string[] }[] = [
  { key: 'light', colors: ['#ffffff', '#f3f4f6', '#d1d5db'] },
  { key: 'dark', colors: ['#1f2937', '#374151', '#9ca3af'] },
  { key: 'blue', colors: ['#dbeafe', '#60a5fa', '#1e40af'] },
  { key: 'red', colors: ['#fee2e2', '#f87171', '#b91c1c'] },
];

export default function ThemeSelector({ selectedTheme, onChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-items-center grid grid-cols-2 gap-4">
      {themes.map((theme) => (
        <button
          key={theme.key}
          onClick={() => onChange(theme.key)}
          className={`p-2 rounded-lg border-alternate transition-all ${
            selectedTheme === theme.key ? 'border-alternate' : 'border-white-300 hover:border-black-400'
          }`}
        >
          <div className="flex text-center space-x-1">
            {theme.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded border-alternate"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div className="text-xs mt-2 text-center capitalize">{theme.key}</div>
        </button>
      ))}
    </div>
  );
}
