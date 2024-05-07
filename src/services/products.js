import client from './client';

const getProducts = async () => {
  return await client.post('https://fakestoreapi.com/products?sort=asc');
};

const getCategories = async () => {
  return await client.get('https://fakestoreapi.com/products/categories');
};

export default {
  getProducts,
  getCategories,
};
