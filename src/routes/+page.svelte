<script>
  export let data;
  console.log(`client-side: data: ${JSON.stringify(data, null, 4)}`);
</script>

<h1>Products</h1>

<ul>
{#each data.products as product}
  <li>{product.title}</li>
{/each}
</ul>