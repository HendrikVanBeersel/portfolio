<template>
  <li>
    <div class="flex h-6 flex-row space-x-2">
      <h4 class="mt ml-5 flex flex-row text-sm underline decoration-secundary decoration-4">
        <slot name="name"> </slot>
      </h4>
      <slot name="icon"></slot>
    </div>

    <ul class="flex flex-wrap">
      <slot name="listOfCards"></slot>
    </ul>
  </li>
</template>
