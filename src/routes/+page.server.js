/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = Math.floor(Math.random() * 10) + 1;
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  let json = await response.json();
  console.log('got todos on server');
  return {
    todos: json
  };
}