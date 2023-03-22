import shopify from '../../../lib/shopify.js';

export const load = (async ({ params }) => {
  let query = `
  query {
    product(handle: "${params.slug}") {
      title
      description
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
  `;

  const json = await shopify.graph(query);
  const product = json.data.product


  return {
    product: {
      title: product.title,
      description: product.description,
      image: product.images.edges[0].node.originalSrc,
      slug: product.slug.value
    }
  };
});