import InfoCard from '../../general/InfoCard';

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <InfoCard
        title="Total Surveys"
        value={12}
        titleClass="text-blue-800"
        valueClass="text-blue-600"
      />
      <InfoCard
        title="Total Responses"
        value={340}
        titleClass="text-green-800"
        valueClass="text-green-600"
      />
    </div>
  );
}