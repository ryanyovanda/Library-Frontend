
import { getBooks } from '@/lib/api';

type Book = {
  code: string;
  title: string;
  author: string;
  availableStock: number;
};

export default async function BooksPage() {
  const books: Book[] = await getBooks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Book List</h1>
      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Code</th>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3 text-center">Available</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.code} className="border-t">
                <td className="p-3">{book.code}</td>
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3 text-center">{book.availableStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
