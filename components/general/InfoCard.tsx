import { InfoCardProps } from './InfoCard.types';

export default function InfoCard({
  title,
  value,
  containerClass = '',
  titleClass = '',
  valueClass = '',
  children,
}: InfoCardProps) {
  return (
    <div className={`bg-white p-4 shadow rounded-xl ${containerClass}`}>
      {children ? (
        children
      ) : (
        <>
          <h2 className={`text-lg font-semibold mb-2 ${titleClass}`}>{title}</h2>
          <p className={`text-3xl font-bold ${valueClass}`}>{value}</p>
        </>
      )}
    </div>
  );
}
