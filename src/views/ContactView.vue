<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const text = ref('')
const modal = ref(false)
const modaltext = ref('error')

async function SendEmail() {
  console.log('email', email.value)
  console.log('text', text.value)
  await fetch('https://formspree.io/f/xvoebzzg', {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, text: text.value })
  }).then((response) => {
    if (response.ok) {
      console.log('succes')
      modaltext.value = 'maile sent succesfully'
      modal.value = true
    } else {
      console.log('fail')
      modaltext.value = 'Service is currently not working!\nPlease contact me with linkedin'
      modal.value = true
    }
  })
}
</script>
<template>
  <form class="flex w-4/5 flex-col sm:w-3/5 xl:w-1/2" @submit.prevent>
    <label for="email">email: </label>
    <input
      v-model="email"
      id="email"
      type="email"
      name="email"
      placeholder="your email"
      required
      class="mb-8 p-2 text-black"
    />

    <label for="message">message: </label>
    <textarea
      v-model="text"
      type="text"
      id="message"
      name="message"
      placeholder="your message"
      required
      class="mb-8 p-2 text-black"
    ></textarea>

    <button
      @click="SendEmail"
      type="submit"
      class="self-center rounded-lg border-8 border-primary px-5 py-1 hover:border-secundary"
    >
      submit
    </button>
    <div
      v-if="modal"
      class="absolute z-10 flex flex-col self-center border-8 border-primary bg-white object-center p-5 text-black"
    >
      <p class="whitespace-pre">{{ modaltext }}</p>
      <button
        class="rounded-lg border-8 border-primary bg-black px-5 py-1 text-white hover:border-secundary hover:bg-secundary"
        @click="modal = false"
      >
        Close
      </button>
    </div>
  </form>
</template>
