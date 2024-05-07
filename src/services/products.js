import client from './client';

const getProducts = async () => {
  return await client.post('https://fakestoreapi.com/products?sort=asc');
};

export default {
  getProducts,
};
