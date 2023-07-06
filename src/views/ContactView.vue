<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message
      }

      emailjs
        .send('<service_dff52cf>', '<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_USER_ID>')
        .then(() => {
          alert('Email sent successfully!')
          this.resetForm()
        })
        .catch((error) => {
          console.error('Error sending email:', error)
        })
    },
    resetForm() {
      this.formData.name = ''
      this.formData.email = ''
      this.formData.message = ''
    }
  }
}
</script>
<template>
  <main>
    <div><h2>Contact info</h2></div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </main>
</template>
