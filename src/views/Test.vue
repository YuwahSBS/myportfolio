<template>
  <div class="box" ref="box">Animate Me</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const box = ref(null)

onMounted(() => {
  gsap.from(box.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1
  })
})
</script>

<style scoped>
.box {
  margin-top: 120vh; /* So you can scroll to see the effect */
  background: #42b983;
  color: white;
  padding: 40px;
  text-align: center;
}
</style>
