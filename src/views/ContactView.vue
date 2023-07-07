<script setup lang="ts">
import emailjs from 'emailjs-com'
import { ref } from 'vue'

const email = ref<string>('')
const name = ref<string>('')
const message = ref<string>('')
const buttonOn = ref<boolean>(true)

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
  buttonOn.value = true
}

function submitForm() {
  buttonOn.value = false
  const emailValue = email.value.trim()
  const nameValue = name.value.trim()
  const messageValue = message.value.trim()

  if (emailValue === '' || nameValue === '' || messageValue === '') {
    alert('Please fill out all fields')
  } else if (!isValidEmail(emailValue)) {
    alert('Please enter a valid email address')
  } else if (messageValue.length < 10) {
    alert('Please enter a message with at least 10 characters')
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
</script>
<template>
  <main>
    <form id="form" ref="form" class="flex flex-col" @submit.prevent="submitForm">
      <label>Name</label>
      <input type="text" v-model="name" name="user_name" />
      <label>Email</label>
      <input type="email" v-model="email" name="user_email" />
      <label>Message</label>
      <textarea v-model="message" name="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </main>
</template>
