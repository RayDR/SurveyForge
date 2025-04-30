import Link from 'next/link';
import { useRouter } from 'next/router';
import { BreadcrumbsProps } from '../../general/Breadcrumbs.types';

export default function Breadcrumbs({ crumbs, className = '' }: BreadcrumbsProps) {
  const router = useRouter();

  const defaultCrumbs = router.asPath
    .split('?')[0]
    .split('#')[0]
    .split('/')
    .filter(Boolean)
    .map((part, idx, arr) => ({
      label: part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      href: '/' + arr.slice(0, idx + 1).join('/')
    }));

  const finalCrumbs = crumbs ?? defaultCrumbs;

  return (
    <nav className={`text-sm text-gray-500 mb-4 ${className}`}>
      {finalCrumbs.map((crumb, i) => (
        <span key={i} className="inline-block">
          {crumb.href && i !== finalCrumbs.length - 1 ? (
            <>
              <Link href={crumb.href} className="hover:underline">{crumb.label}</Link>
              <span className="mx-2">/</span>
            </>
          ) : (
            <span className="font-semibold">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
