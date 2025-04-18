
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6">
      <div className="text-2xl font-bold mb-8 text-blue-600">📊 Survey UI</div>
      <nav className="flex flex-col gap-6 text-gray-700">
        <Link href="/dashboard" className="hover:text-blue-500 transition">🏠 Home</Link>
        <Link href="/dashboard/forms" className="hover:text-blue-500 transition">📝 Forms</Link>
        <Link href="/dashboard/responses" className="hover:text-blue-500 transition">📄 Responses</Link>
      </nav>
    </aside>
  );
}
