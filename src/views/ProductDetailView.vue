<template>
    <main v-if="product">
        <div class="product-detail-container">
            <div class="product-detail-images-container">
                <div class="product-bg-image-container product-image-frame">
                    <img :src="product.image" alt="product.title" class="" />
                </div>
                <div class="product-image-gallery">
                    <div class="product-image-frame">
                        <img :src="product.image" alt="product.title" />
                    </div>
                </div>
            </div>
            <div class="product-information-container">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <div>
                        <p class="product-title">{{ product.title }}</p>
                        <p class="product-price">$ {{ product.price }}</p>
                        <p class="product-price-information">MRP incl. of all taxes</p>
                    </div>
                    <p>{{ product.description }}</p>
                </div>
                <button @click="addToCart" class="btn-add-to-cart">Add</button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const productId = route.params.id;
const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(async () => {
  await productStore.loadProduct(productId);
})

const product = computed(() => {
  return productStore.selectedProduct;
})

const addToCart = () => {
    cartStore.addProductToCart(product);
}

</script>

<style scoped>
.product-detail-container{
    display: flex;
    padding: 5vh 10vw;
    height: calc(100vh - 150px);
}
.product-detail-images-container {
    display: flex;
    margin-right: 100px;
    max-width: 60%;
}
.product-bg-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 80%;
}
.product-image-gallery {
    margin-left: 40px;
    width: 20%;
}

.product-image-gallery .product-image-frame{
    padding: 10px;
}
.product-information-container {
    display: flex;
    flex-direction: column;
    padding: 50px 40px 12px 40px;
    max-width: 40%;
    border: solid #d9d9d9;
    border-width: 1px;
}
.product-title {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
}
.product-price {
    margin-bottom: 21px;
    font-size: 16px;
    font-weight: bold;
}
.product-price-information {
    margin-bottom: 48px;
    opacity: 0.5;
    font-weight: bold;
}
.btn-add-to-cart {
    margin-top: auto;
    padding: 15px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    background-color: #D9D9D9;
}
.btn-add-to-cart:hover {
    cursor: pointer;
}
</style>