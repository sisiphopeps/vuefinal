<template>
    <div>
        <div class="form">
            <form
      action="https://formspree.io/f/mnqkayye"
      method="POST"
    >
    <label for="name">Name:</label><br>
    <input v-model="name" type="text" placeholder="Enter your full name"><br>

      <label for="email">Your email:</label><br>
        <input v-model="email" type="email" name="email" placeholder="Enter your email address" ><br>

      <label>Your message:</label><br>
        <textarea v-model="MIDIMessageEvent" name="message" placeholder="Type your message"></textarea><br>
    
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.form {
    background-color:#E2CBB9 ;
}
</style>


