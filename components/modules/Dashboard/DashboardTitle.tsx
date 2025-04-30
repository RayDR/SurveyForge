import { ReactNode } from 'react';

interface DashboardTitleProps {
  title: string;
  icon?: ReactNode;
  className?: string;
}

export default function DashboardTitle({ title, icon, className = '' }: DashboardTitleProps) {
  return (
    <h1 className={`text-2xl font-bold flex items-center gap-2 ${className}`}>
      {icon && <span className="text-xl">{icon}</span>}
      {title}
    </h1>
  );
}
