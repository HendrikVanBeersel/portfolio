<script setup lang="ts">
import EducationItem from '@/components/LineItem.vue'
</script>
<template>
  <main>
    <EducationItem class="mt-10" routerLinkName="">
      <template #icon> <p class="p-2">2023</p> </template>
      <template #heading>Graduate Programming (Cum Laude)</template>
      <template #text class="">
        <p>
          I graduated with the distinction of cum laude. I learned a lot about programming and the Scrum
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

      <template #text class=""> I took a Scrum Master course in june 2023. </template>
    </EducationItem>
  </main>
</template>
