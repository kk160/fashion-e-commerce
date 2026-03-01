import { fetchProducts } from '@/services/product.service'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadProducts() {
      try {
        this.loading = true
        this.products = await fetchProducts()
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
})
