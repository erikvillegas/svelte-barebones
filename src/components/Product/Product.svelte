<script>
  export let product;
  
</script>

<div class="product">
  <a href="products/{product.slug}">
    <img src={product.image} alt={product.title} />
  </a>
  <span>{product.title}</span>
</div>

<style>
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product img {
    width: 200px;
  }
</style>