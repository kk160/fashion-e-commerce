<template>
  <main>
    <div>
      <Filter />
      <div>
        <SearchBar />
        <ProductList />
      </div>
    </div>
  </main>
</template>

<script>
import Filter from '@/components/Filter.vue'
import ProductList from '@/components/ProductList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    Filter,
    ProductList,
    SearchBar,
  },
}
</script>
