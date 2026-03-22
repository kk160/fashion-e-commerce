import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        productList: []
    }),

    actions: {
        addProductToCart(product) {
            this.productList.push(product);
        },
        deleteProductFromCArt(index) {
            this.productList.splice(index,1);
        },
    }
})

