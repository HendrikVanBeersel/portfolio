<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref, watch } from 'vue'
import IconSpin from '@/components/icons/animatedIcons/IconSpin.vue'

const email = ref<string>('')
const name = ref<string>('')
const message = ref<string>('')
const buttonIsDisabled = ref<boolean>(false)

function sendEmail(infoToSend: Record<string, string>) {
  emailjs.send('service_dff52cf', 'template_81r8e2l', infoToSend, 'cAFPwog3gCQZfpObs').then(
    (result) => {
      console.log('SUCCESS!', result.text)
      alert('Message sent successfully')
    },
    (error) => {
      console.log('FAILED...', error.text)
      alert('Message failed to send')
    }
  )
  buttonIsDisabled.value = false
}

function submitForm() {
  buttonIsDisabled.value = true
  const emailValue = email.value.trim()
  const nameValue = name.value.trim()
  const messageValue = message.value.trim()

  if (emailValue === '' || nameValue === '' || messageValue === '') {
    alert('Please fill out all fields')
    buttonIsDisabled.value = false
  } else if (!isValidEmail(emailValue)) {
    alert('Please enter a valid email address')
    buttonIsDisabled.value = false
  } else if (messageValue.length < 10) {
    alert('Please enter a message with at least 10 characters')
    buttonIsDisabled.value = false
  } else {
    const InfoToSend = {
      user_name: nameValue,
      message: messageValue,
      user_email: emailValue
    }
    sendEmail(InfoToSend)
  }
}

function isValidEmail(email: string) {
  // Use a regular expression to validate the email format
  const emailPattern = /^\S+@\S+\.\S+$/
  return emailPattern.test(email)
}
watch(buttonIsDisabled, (newValue) => {
  if (newValue) {
    submitForm()
  } else {
  }
})
</script>
<template>
  <main class="w-full p-10 sm:p-16 md:p-20 flex flex-col">
    <label>Name:</label>
    <input class="text-black" type="text" v-model="name" name="user_name" />
    <label class="mt-4">Email:</label>
    <input class="text-black" type="email" v-model="email" name="user_email" />
    <label class="mt-4">Message:</label>
    <textarea class="text-black" v-model="message" name="message"></textarea>
    <button
      :disabled="buttonIsDisabled"
      class="mt-4 border-4 border-primary rounded-lg bg-primary text-xl inline-flex items-center justify-center"
      type="submit"
      v-on:click="buttonIsDisabled = true"
    >
      <IconSpin v-show="buttonIsDisabled" />
      <span v-show="!buttonIsDisabled">Send</span>
    </button>
  </main>
</template>
