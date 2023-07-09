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
  <div class="flex flex-col min-h-screen" :class="'xl:' + mainFlexDirection">
    <header
      class="xl:p-8 basis-1/2 flex flex-col justify-center"
      :class="'xl:' + headerFlexDirection"
    >
      <img
        alt="Vue logo"
        class="p-2 self-center"
        :class="
          currentRoute === 'home'
            ? 'h-80 w-80'
            : 'h-14 w-14' + ' xl:' + headerFlexDirection === 'flex-col'
            ? 'h-80 w-80'
            : 'h-14 w-14'
        "
        src="@/assets/logo.svg"
      />

      <h1
        class="p-2 self-center text-3xl"
        :class="'xl:' + headerFlexDirection === 'flex-col' ? 'text-5xl' : 'text-4xl'"
      >
        Hendrik Van Beersel
      </h1>

      <nav class="flex flex-wrap justify-center p-2 text-xl border-4 rounded-xl border-tertiary">
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/">Home</RouterLink>
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/skills"
          >Skills</RouterLink
        >
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/experience"
          >Experience</RouterLink
        >
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/projects"
          >Projects</RouterLink
        >
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/education"
          >Education</RouterLink
        >
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/aboutMe"
          >About Me</RouterLink
        >
        <RouterLink class="px-2 border-4 border-secundary rounded-lg" to="/contact"
          >Contact</RouterLink
        >
      </nav>
    </header>

    <RouterView class="basis-1/2 self-center" />
  </div>
</template>
