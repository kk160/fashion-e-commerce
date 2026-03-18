import { fetchProduct, fetchProducts } from '@/services/product.service'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
  }),

  actions: {
    async loadProducts() {
      try {
        this.loading = true;
        this.products = await fetchProducts();
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async loadProduct(id) {
      try {
        this.loading = true;
        this.selectedProduct = await fetchProduct(id)
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
})
