<script setup lang="ts">
defineProps<{ routerLinkName: string }>()
</script>
<template>
  <div class="relative flex flex-row justify-start items-center ml-1 sm:ml-1">
    <div
      class="absolute left-[1px] border-r-2 border-tertiary h-60 xl:h-40 w-[6.25%] xl:w-[4.166667%]"
    ></div>
    <h3
      v-if="!routerLinkName"
      class="z-10 self-center basis-[12.5%] xl:basis-1/12 rounded-full border-2 border-tertiary bg-slate-950"
    >
      <slot name="icon"></slot>
    </h3>
    <button
      v-else
      @click="$router.push({ name: routerLinkName })"
      class="z-10 self-center basis-[12.5%] xl:basis-1/12 rounded-full border-2 border-tertiary bg-slate-950"
    >
      <slot name="icon"></slot>
    </button>
    <div class="basis-11/12 self-center">
      <h2
        v-if="!routerLinkName"
        class="xl:pl-4 mb-4 text-xl underline underline-offset-8 decoration-8 decoration-secundary"
      >
        <slot name="heading"></slot>
      </h2>

      <button
        v-else
        @click="$router.push({ name: routerLinkName })"
        class="xl:pl-4 mb-4 text-xl underline underline-offset-8 decoration-8 decoration-secundary"
      >
        <slot name="heading"></slot>
      </button>
      <p class="xl:m-2 mb-6 px-2 xl:px-4">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
