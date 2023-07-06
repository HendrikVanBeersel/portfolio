<script setup lang="ts">
import HomeItem from '@/components/HomeItem.vue'
</script>
<template>
  <main>
    <HomeItem routerLinkName="">
      <template #icon> <p class="p-2">2023</p> </template>
      <template #heading>Graduate Programing (Cum Laude)</template>
      <template #text class="">
        <p>
          I graduated with a cum laude distinction. I learned a lot about programming and the scrum
          process. I also learned how to work in a team and how to communicate effectively.
        </p>
      </template>
    </HomeItem>
    <HomeItem routerLinkName="">
      <template #icon> <p class="p-2">2023</p> </template>
      <template #heading>
        <p>
          Certified Scrum Master
          <img class="inline h-12" src="@/assets/seal-csm.png" alt="csm image" />
        </p>
      </template>

      <template #text class=""> I took a scrum master course in june 2023. </template>
    </HomeItem>
  </main>
</template>
