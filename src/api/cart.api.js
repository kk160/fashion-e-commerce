import http from './http'

export const getCarts = () => {
  return http.get('/carts')
}

export const getCartById = (id) => {
  return http.get(`/carts/${id}`)
}
