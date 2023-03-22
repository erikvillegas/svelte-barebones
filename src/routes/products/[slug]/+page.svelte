<script>
  export let data;
  const { product } = data;
</script>

<h1>{product.title}</h1>
<p>{product.description}</p>
<img src={product.image} alt={product.title} />
