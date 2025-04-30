export interface Crumb {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  crumbs?: Crumb[];
  className?: string;
}