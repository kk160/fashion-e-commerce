import * as productApi from '../api/product.api'

export const fetchProducts = async () => {
  const response = await productApi.getProducts();
  return response.data;
}

export const fetchProduct = async (id) => {
  const response = await productApi.getProductById(id);
  return response.data;
}
