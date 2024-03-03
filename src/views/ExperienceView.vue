<script setup lang="ts">
import ExperienceItem from '@/components/LineItem.vue'
</script>
<template>
  <main>
    <ExperienceItem class="mt-10" routerLinkName="">
      <template #icon> <p class="w-44 p-2">Oktober 2023 - now</p> </template>
      <template #heading>junior consultant at <a href="https://aexis.com/">AEXIS</a></template>
      <template #text>
        <p class="mr-10">
          I'm currently working at AEXIS I'm busy with the finhosta aplication and learning to work
          with the api of tm1 and cognos.
        </p>
      </template>
    </ExperienceItem>
    <ExperienceItem class="mt-10" routerLinkName="">
      <template #icon> <p class="w-44 p-2">schoolyear 2022-2023</p> </template>
      <template #heading
        >Internship with <a href="https://but.digital/be-en/">BUT digital</a>
      </template>
      <template #text>
        <p class="mr-10">
          I have really good memories of this experience and learned a lot. After this internship, I
          felt ready to start working as a programmer.
        </p>
        <p class="underline">References available upon request.</p>
      </template>
    </ExperienceItem>
  </main>
</template>
