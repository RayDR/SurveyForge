
export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 shadow rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Total Surveys</h2>
        <p className="text-3xl text-blue-600 font-bold">12</p>
      </div>
      <div className="bg-white p-4 shadow rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Total Responses</h2>
        <p className="text-3xl text-green-600 font-bold">340</p>
      </div>
    </div>
  );
}
