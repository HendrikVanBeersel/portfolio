<script setup lang="ts">
defineProps<{ routerLinkName: string }>()
</script>
<template>
  <div class="relative ml-1 flex flex-row items-center justify-start">
    <div
      class="absolute left-[1px] h-60 w-[6.25%] border-r-2 border-tertiary sm:h-40 sm:w-[4.166667%]"
    ></div>
    <h3
      v-if="!routerLinkName"
      class="z-10 basis-[12.5%] self-center rounded-full border-2 border-tertiary bg-slate-950 sm:basis-1/12"
    >
      <slot name="icon"></slot>
    </h3>
    <button
      v-else
      @click="$router.push({ name: routerLinkName })"
      class="z-10 basis-[12.5%] self-center rounded-full border-2 border-tertiary bg-slate-950 sm:basis-1/12"
    >
      <slot name="icon"></slot>
    </button>
    <div class="basis-11/12 self-center">
      <h2
        v-if="!routerLinkName"
        class="mb-4 text-xl underline decoration-secundary decoration-8 underline-offset-8 lg:pl-4"
      >
        <slot name="heading"></slot>
      </h2>

      <button
        v-else
        @click="$router.push({ name: routerLinkName })"
        class="mb-4 text-xl underline decoration-secundary decoration-8 underline-offset-8 lg:pl-4"
      >
        <slot name="heading"></slot>
      </button>
      <p class="mb-6 px-2 lg:m-2 lg:px-4">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
