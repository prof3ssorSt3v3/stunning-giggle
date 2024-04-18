import Link from 'next/link';

export default async function Page() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const resp = await fetch(url);

  if (!resp.ok) throw new Error(JSON.stringify({ message: 'Failed to get users', code: resp.status }));

  const data = await resp.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <nav className="m-2">
        <Link href="/" className="text-sky-600 underline">
          Back Home
        </Link>
      </nav>
      <section className="m-2">
        {data.map((user) => {
          return (
            <p key={user.uid}>
              {user.id} {user.name}
            </p>
          );
        })}
      </section>
    </main>
  );
}
