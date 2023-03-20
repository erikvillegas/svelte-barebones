import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'checkout.catperson.com',
  storefrontAccessToken: process.env.SHOPIFY_API_KEY,
  apiVersion: '2023-01'
});

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params }) => {

  const products = await client.product.fetchAll();
  const titles = products.map(product => {
    return {
      title: product.title
    }
  });

  // randomize the order of the products
  for (let i = titles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [titles[i], titles[j]] = [titles[j], titles[i]];
  }

  return {
    products: titles
  };
});