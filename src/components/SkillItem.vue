<template>
  <li class="flex flex-row border border-tertiary py-2 px-1 m-2 w-48 rounded-2xl">
    <div class="basis-1/4 flex flex-col justify-center">
      <slot name="icon"></slot>
    </div>
    <div class="basis-3/4 ">
      <h3 class="underline decoration-4 decoration-secundary">
        <slot name="name"> </slot>
      </h3>
      <p class="text-xs"><slot name="details"></slot></p>
    </div>
  </li>
</template>
