export default {
  graph: async (query) => {
    const response = await fetch('https://checkout.catperson.com/api/2023-01/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_API_KEY
      },
      body: query
    })
  
    return await response.json();
  }
}