import client from './client';

const getProducts = async () => {
  return await client.get('https://fakestoreapi.com/products?sort=asc');
};

const getProductsByCategory = async category => {
  return await client.get(
    `https://fakestoreapi.com/products/category/${category}`,
  );
};

const getCategories = async () => {
  return await client.get('https://fakestoreapi.com/products/categories');
};

export default {
  getProducts,
  getProductsByCategory,
  getCategories,
};
