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
const mainFlexDirection = computed(() => {
  if (
    currentRoute.value === 'home' ||
    currentRoute.value === 'experience' ||
    currentRoute.value === 'education'
  ) {
    return 'flex-row'
  } else {
    return 'flex-col'
  }
})
const headerFlexDirection = computed(() => {
  if (
    currentRoute.value === 'home' ||
    currentRoute.value === 'experience' ||
    currentRoute.value === 'education'
  ) {
    return 'flex-col'
  } else {
    return 'flex-row'
  }
})
</script>

<template>
  <div class="flex min-h-screen" :class="mainFlexDirection">
    <header class="p-8 basis-1/2 flex justify-center" :class="headerFlexDirection">
      <img
        alt="Vue logo"
        class="p-2 self-center"
        :class="headerFlexDirection === 'flex-col' ? 'h-80 w-80' : 'h-14 w-14'"
        src="@/assets/logo.svg"
      />

      <h1
        class="p-2 self-center"
        :class="headerFlexDirection === 'flex-col' ? 'text-5xl' : 'text-4xl'"
      >
        Hendrik Van Beersel
      </h1>

      <nav
        class="flex flex-row justify-center py-2 text-xl divide-x-4 divide-secundary border-y-4 border-tertiary"
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
