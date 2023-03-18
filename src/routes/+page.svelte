<script>
  export let data;
  console.log(`client-side: data: ${JSON.stringify(data, null, 4)}`);
</script>

<h1>Welcome to SvelteKit!!!</h1>
<h2>{data.todos.title}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
