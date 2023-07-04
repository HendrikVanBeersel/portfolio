<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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

      <nav
        class="flex justify-center py-2 text-xl divide-x-4 divide-secundary border-y-4 border-tertiary"
      >
        <RouterLink class="px-2" to="/">Home</RouterLink>
        <RouterLink class="px-2" to="/skills">Skills</RouterLink>
        <RouterLink class="px-2" to="/experience">Experience</RouterLink>
        <RouterLink class="px-2" to="/projects">Projects</RouterLink>
        <RouterLink class="px-2" to="/education">Education</RouterLink>
        <RouterLink class="px-2" to="/aboutMe">About Me</RouterLink>
        <RouterLink class="px-2" to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <RouterView class="basis-1/2 self-center" />
  </div>
</template>
