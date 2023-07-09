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
  <div class="flex min-h-screen flex-col" :class="'lg:' + mainFlexDirection">
    <header
      class="flex basis-1/2 flex-col justify-center xl:p-8"
      :class="'lg:' + headerFlexDirection"
    >
      <img
        alt="Vue logo"
        class="lg ml-4 self-center p-2"
        :class="
          (currentRoute === 'home' ? 'h-80 w-80 ' : 'h-14 w-14') +
          ' ' +
          (headerFlexDirection === 'flex-col' ? 'lg:h-80 lg:w-80' : 'lg:h-14 lg:w-14')
        "
        src="@/assets/logo.svg"
      />

      <h1
        class="self-center p-2 text-3xl"
        :class="'xl:' + headerFlexDirection === 'flex-col' ? 'text-5xl' : 'text-4xl'"
      >
        Hendrik Van Beersel
      </h1>

      <nav
        class="flex flex-wrap justify-center rounded-xl border-4 border-tertiary p-2 text-xl md:flex-row"
      >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/skills"
          >Skills</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/experience"
          >Experience</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/projects"
          >Projects</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/education"
          >Education</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/aboutMe"
          >About Me</RouterLink
        >
        <RouterLink
          class="rounded-lg border-4 border-secundary px-2 md:rounded-none md:border-y-0"
          to="/contact"
          >Contact</RouterLink
        >
      </nav>
    </header>

    <RouterView class="basis-1/2 self-center" />
  </div>
</template>
