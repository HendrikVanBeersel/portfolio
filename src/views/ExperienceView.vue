<script setup lang="ts">
import HomeItem from '@/components/HomeItem.vue'
</script>
<template>
  <main>
    <HomeItem routerLinkName="">
      <template #icon> <p class="p-2 w-24">2022-2023</p> </template>
      <template #heading
        >Internship with <a href="https://but.digital/be-en/">BUT digital</a>
      </template>
      <template #text class="">
        <p>
          I have really good memories of this experience and learned a lot. After this internship, I
          felt ready to start working as a programmer.
        </p>
        <p>References available upon request.</p>
      </template>
    </HomeItem>
  </main>
</template>
