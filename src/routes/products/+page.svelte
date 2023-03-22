<script>
  import Product from '../../components/Product.svelte';
  export let data;
</script>

<h1>Products!</h1>

<div class="grid-container">
  {#each data.products as product}
      <Product product={product} />
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 186px);
    padding: 2rem;
  }
</style>