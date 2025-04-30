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
    <div className={`info-card ${containerClass}`}>
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
