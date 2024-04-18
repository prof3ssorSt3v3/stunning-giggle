'use server';

import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

export async function handleForm(formData) {
  //maybe there is an issue with the data...
  let url = 'https://jsonplaceholder.typicode.com/users';
  if (Math.round(Math.random())) {
    url = 'https://jsonplaceholder.typicode.com/non-existant'; //to trigger an error 50% of the time
  }
  const resp = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  if (!resp.ok) {
    let msg = JSON.stringify({ message: 'unable to get valid users', code: resp.status });
    throw new Error(msg); //triggers error.js
  }
  if (Math.round(Math.random())) {
    //half the time throw an error
    let msg = JSON.stringify({ message: 'randomly generated error', code: 637 });
    throw new Error(msg); //triggers error.js
  }

  redirect('http://localhost:3000/users');
}
