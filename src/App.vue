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
  <header class="p-8">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="p-4">
      <h1>Hendrik Van Beersel</h1>

      <nav class="flex justify-center">
        <RouterLink class="p-2" to="/">Home</RouterLink>
        <RouterLink class="p-2" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
