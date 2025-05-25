import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Librarian App',
  description: 'Simple book borrowing system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-[#00316d] border-b shadow px-6 py-3 flex gap-4 text-white font-light ">
          <Link href="/" className="hover:font-bold">
             Home
          </Link>
          <Link href="/books" className="hover:font-bold">
            Books
          </Link>
          <Link href="/members" className="hover:font-bold">
            Members
          </Link>
          <Link href="/borrow" className="hover:font-bold">
            Borrow
          </Link>
          <Link href="/return" className="hover:font-bold">
            Return
          </Link>
        </nav>
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
