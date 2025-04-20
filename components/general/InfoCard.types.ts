import { ReactNode } from 'react';

export interface InfoCardProps {
  title?: string;
  value?: string | number;
  containerClass?: string;
  titleClass?: string;
  valueClass?: string;
  children?: ReactNode;
}