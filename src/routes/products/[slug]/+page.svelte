<script>
  export let data;
  const product = data.product;
</script>

<h1>{product.title}</h1>

<div class="container">
    <div class="item">
      <a href="products/{product.slug}">
        <img src={product.image} alt={product.title} />
      </a>
    </div>
</div>

<style>
  .item img {
    width: 200px;
  }

  .container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 186px);
    padding: 2rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>