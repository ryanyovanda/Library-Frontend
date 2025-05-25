import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">Library System</h1>
      <p className="text-gray-600">Welcome! Select an action below.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/books" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Books
        </Link>
        <Link href="/members" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Members
        </Link>
        <Link href="/borrow" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Borrow Book
        </Link>
        <Link href="/return" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Return Book
        </Link>
      </div>
    </main>
  );
}
