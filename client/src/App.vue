<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-primary 2xl:px-14 md:px-7 px-2 h-[100px] flex justify-between">
    <router-link to="/">
      <img src="src/assets/img/logo.png" class="h-[50px] md:h-[75px] 2xl:h-[100px]" alt="Halve maan met de letters C en S, voor Cornell van der Straaten">
    </router-link>
    <nav class="flex gap-5 items-center">
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'over-mij' }">Over mij</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'projecten'}" >Projecten</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'artikelen'}">Artikelen</router-link>
      <svg @click="changeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white font-extrabold">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </nav>
    <!--  Responsive Nav  -->
    <nav class="fixed top-[100px] p-5 right-0 flex flex-col gap-5 bg-primary z-10">
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'over-mij' }">Over mij</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'projecten'}" >Projecten</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'artikelen'}">Artikelen</router-link>
    </nav>
  </header>

  <RouterView />

  <footer class="bg-primary 2xl:px-14 md:px-7 px-2 2xl:py-14 py-7 flex md:justify-center justify-items-end z-0">
    <nav class="flex flex-col sm:flex-row gap-5 md:items-center items-start">
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'home' }">Home</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'over-mij' }">Over mij</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'projecten'}" >Projecten</router-link>
      <router-link class="hover:text-secondary text-white text-lg" :to="{ name: 'artikelen'}">Artikelen</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return { show: false }
  },
  methods: {
    display() {
      console.log("clicked")
      this.show = !this.show
    }
  }
}

</script>