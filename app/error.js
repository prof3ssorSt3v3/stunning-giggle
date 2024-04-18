'use client';

export default function Error({ error, reset }) {
  const errObj = JSON.parse(error.message);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div>
        <h1 className="text-2xl">Something went wrong!</h1>
        <h2 className="text-xl">Error Code: {errObj.code}</h2>

        <p className="text-lg text-amber-500">{errObj.message}</p>
        <p>
          <button
            className="text-sky-600 underline"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Back Home
          </button>
        </p>
      </div>
    </main>
  );
}
