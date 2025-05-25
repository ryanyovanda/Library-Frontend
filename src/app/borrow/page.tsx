'use client';

import { useEffect, useState } from 'react';
import { getBooks, getMembers, borrowBook } from '@/lib/api';

export default function BorrowPage() {
  const [members, setMembers] = useState<{ code: string; name: string }[]>([]);
  const [books, setBooks] = useState<{ code: string; title: string }[]>([]);
  const [memberCode, setMemberCode] = useState('');
  const [bookCode, setBookCode] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => {
      const membersData = await getMembers();
      const booksData = await getBooks();
      setMembers(membersData);
      setBooks(booksData);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await borrowBook({ memberCode, bookCode });
    
        if (res?.message) {
          setStatus(` ${res.message}`);
        } else {
          setStatus('Book borrowed successfully');
        }
      } catch (err) {
        setStatus(' Failed to borrow book');
      }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Borrow a Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Select Member</label>
          <select
            className="w-full border p-2 rounded"
            value={memberCode}
            onChange={(e) => setMemberCode(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {members.map((m) => (
              <option key={m.code} value={m.code}>
                {m.code} - {m.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Book</label>
          <select
            className="w-full border p-2 rounded"
            value={bookCode}
            onChange={(e) => setBookCode(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {books.map((b) => (
              <option key={b.code} value={b.code}>
                {b.code} - {b.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {status && <p className="mt-3">{status}</p>}
      </form>
    </main>
  );
}
