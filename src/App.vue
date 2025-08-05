<template>
   <div>
    <customloading v-if="loading" />
    <div v-else id="app">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref , onMounted } from 'vue'
// import Loader from './views/Loader.vue'
import customloading from './views/CustomLoading.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000) // Simulate loading delay
})
</script>