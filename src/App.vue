<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const currentRoute = ref<string>('home')
watch(useRoute(), (to, from) => {
  try {
    currentRoute.value = to.name!.toString()
  } catch (e) {
    currentRoute.value = ''
  }
})
</script>

<template>
  <div class="flex min-h-screen">
    <header class="p-8 basis-1/2 flex flex-col justify-center">
      <img
        alt="Vue logo"
        class="p-2 self-center"
        src="@/assets/logo.svg"
        width="300"
        height="300"
      />

      <h1 class="p-2 self-center text-5xl">Hendrik Van Beersel</h1>

      <nav class="flex justify-center text-xl">
        <RouterLink class="p-2" to="/">Home</RouterLink>
        <RouterLink class="p-2" to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView class="basis-1/2 self-center" />
  </div>
</template>
