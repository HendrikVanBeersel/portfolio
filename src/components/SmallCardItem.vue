<template>
  <li
    class="m-2 flex w-[45%] flex-row rounded-2xl border border-tertiary px-1 py-2 sm:w-60 lg:w-48"
  >
    <div class="flex basis-1/4 flex-col justify-center">
      <slot name="icon"></slot>
    </div>
    <div class="basis-3/4">
      <h3 class="underline decoration-secundary decoration-4">
        <slot name="name"> </slot>
      </h3>
      <p class="m-2 text-xs"><slot name="details"></slot></p>
    </div>
  </li>
</template>
