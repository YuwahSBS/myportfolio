import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "@/assets/global.css";
import App from "@/App.vue";
import Projects from "@/views/Projects.vue";
import Test from '@/views/Test.vue';

import $ from 'jquery';
const Home2 = () => import('@/views/Home2.vue');
window.$ = $;
window.jQuery = $;

export default {
  mounted() {
    $('body').css('background-color', 'lightblue');
  }
}

const routes = [
  {
    path: "/",
    component: Home2,
    meta: {title : "My Portfolio Website"}
  },
   {
    path: "/allprojects",
    component: Projects,
  },
  {
    path: "/test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

createApp(App).use(router).mount("#app");

// AOS.init({
//   duration: 800,       // Animation duration in ms
//   once: true,          // Only animate once
//   offset: 120,        
// })

