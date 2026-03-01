import http from './http'

export const getProducts = () => {
  return http.get('/products')
}

export const getProductById = (id) => {
  return http.get(`/products/${id}`)
}
