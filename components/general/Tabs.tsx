// components/general/Tabs.tsx

import { ReactNode, useState, isValidElement } from 'react';

interface Tab {
  label: string;
  content?: ReactNode;
}

interface TabsProps {
  tabs: (Tab | string)[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const normalizeTabs = () => {
    return tabs.map(tab => {
      if (typeof tab === 'string') {
        return { label: tab, content: undefined };
      }
      return tab;
    });
  };

  const normalizedTabs = normalizeTabs();

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b border-color-alt mb-6">
        {normalizedTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 font-semibold transition-colors duration-200 ${
              activeTab === index
                ? 'border-b border-primary text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-2">
        {/* Display content if available */}
        {normalizedTabs[activeTab].content && isValidElement(normalizedTabs[activeTab].content)
          ? normalizedTabs[activeTab].content
          : null}
      </div>
    </div>
  );
}
