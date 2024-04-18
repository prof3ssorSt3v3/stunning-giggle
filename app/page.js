import MyForm from '@/app/components/myform';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <nav className="m-2">
        <Link href="/users" className="text-sky-600 underline">
          See all users
        </Link>
      </nav>
      <section className="m-2">
        <MyForm />
      </section>
    </main>
  );
}
