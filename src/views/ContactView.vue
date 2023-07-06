<template>
    <div>
        <div class="form">
            <form
      action="https://formspree.io/f/mnqkayye"
      method="POST"
    >
    <label for="name">Name:</label><br>
    <input type="text"><br>
      <label for="email">Your email:</label><br>
        <input type="email" name="email" ><br>
      <label>Your message:</label><br>
        <textarea name="message"></textarea><br>
    
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


