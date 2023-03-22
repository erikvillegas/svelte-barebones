import shopify from '../../lib/shopify.js';

export const load = (async () => {

  let query = `
  {
    products(first: 30) {
      edges {
        node {
          id
          title
          slug: metafield(namespace: "custom", key: "slug") {
            value
          }
          images(first: 1) {
            edges {
              node {
                id
                originalSrc
              }
            }
          }
        }
      }
    }
  }  
  `;

  const json = await shopify.graph(query);
  let products = json.data.products.edges.map(edge => edge.node);
  products = products.filter(product => product.images.edges.length > 0);

  console.log(`products: ${JSON.stringify(products, null, 4)}`);
  

  return {
    products: products.map(product => {
      return {
        title: product.title,
        image: product.images.edges[0].node.originalSrc,
        slug: product.slug.value
      }
    })
  };
}); 