<script setup lang="ts"></script>

<template>
  <div class="relative flex flex-row justify-start items-center">
    <div class="absolute left-[1px] border-r-2 border-tertiary h-40 w-[4.166667%]"></div>

    <div class="z-10 self-center basis-1/12 rounded-full border-2 border-tertiary bg-slate-950">
      <slot name="icon"></slot>
    </div>
    <div class="basis-11/12 self-center">
      <h3 class="pl-4 mb-6 text-xl underline underline-offset-8 decoration-8 decoration-secundary">
        <slot name="heading"></slot>
      </h3>
      <p class="m-2 mb-6 px-4">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
