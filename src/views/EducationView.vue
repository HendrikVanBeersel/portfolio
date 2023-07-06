<script setup lang="ts">
import EducationItem from '@/components/LineItem.vue'
</script>
<template>
  <main>
    <EducationItem routerLinkName="">
      <template #icon> <p class="p-2">2023</p> </template>
      <template #heading>Graduate Programing (Cum Laude)</template>
      <template #text class="">
        <p>
          I graduated with a cum laude distinction. I learned a lot about programming and the scrum
          process. I also learned how to work in a team and how to communicate effectively.
        </p>
      </template>
    </EducationItem>
    <EducationItem routerLinkName="">
      <template #icon> <p class="p-2">2023</p> </template>
      <template #heading>
        <p>
          Certified Scrum Master
          <img class="inline h-12" src="@/assets/seal-csm.png" alt="csm image" />
        </p>
      </template>

      <template #text class=""> I took a scrum master course in june 2023. </template>
    </EducationItem>
  </main>
</template>
