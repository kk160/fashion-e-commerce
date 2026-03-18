<template>
    <main v-if="product">
        <div>
            <img :src="product.image" alt="product.title" />
            <div>
                <img :src="product.image" alt="product.title" />
            </div>
        </div>
        <div>
            <div>
                <img src="" alt="">
            </div>
            <div>
                <div>
                    <p>{{ product.title }}</p>
                    <p>$ {{ product.price }}</p>
                    <p>MRP incl. of all taxes</p>
                </div>
                <p>{{ product.description }}</p>
            </div>
            <button>Add</button>
        </div>
    </main>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
const productStore = useProductStore()

onMounted(async () => {
  await productStore.loadProduct(productId);
})

const product = computed(() => {
  return productStore.selectedProduct;
})

</script>