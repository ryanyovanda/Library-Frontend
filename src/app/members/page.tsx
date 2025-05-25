import { getMembers } from '@/lib/api';

type Member = {
  code: string;
  name: string;
  borrowedCount: number;
};

export default async function MembersPage() {
  const members: Member[] = await getMembers();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Member List</h1>
      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Code</th>
              <th className="p-3">Name</th>
              <th className="p-3 text-center">Borrowed Books</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.code} className="border-t">
                <td className="p-3">{member.code}</td>
                <td className="p-3">{member.name}</td>
                <td className="p-3 text-center">{member.borrowedCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
