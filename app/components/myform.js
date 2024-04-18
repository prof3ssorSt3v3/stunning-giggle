import { handleForm } from '@/app/actions.js';

export default function MyForm() {
  return (
    <form action={handleForm}>
      <h2 className="text-amber-400 text-2xl">Add a User</h2>
      <p className="p-2">
        <label htmlFor="name" className="text-lg mr-2">
          Name:
        </label>
        <input type="text" name="name" id="name" placeholder="type your name" className="py-1 px-2 text-slate-900 text-lg" />
      </p>
      <p className="p-2 text-center">
        <button className="py-1 px-2 bg-sky-200 text-slate-900">Send</button>
      </p>
      <p>This will generate an error 50% of the time.</p>
    </form>
  );
}
