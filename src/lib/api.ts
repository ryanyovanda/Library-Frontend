const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export async function getBooks() {
  const res = await fetch(`${API_BASE_URL}/books`);
  return res.json();
}

export async function getMembers() {
  const res = await fetch(`${API_BASE_URL}/members`);
  return res.json();
}

export async function borrowBook(data: { memberCode: string; bookCode: string }) {
  const res = await fetch(`${API_BASE_URL}/borrow`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function returnBook(data: { memberCode: string; bookCode: string }) {
  const res = await fetch(`${API_BASE_URL}/return`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
