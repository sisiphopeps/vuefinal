<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <routerLink to="/">HOME</routerLink>
          </li>
          <li class="nav-item">
            <routerLink to="/about">ABOUT</routerLink>
          </li>
          <li class="nav-item">
            <routerLink to="/resume">RESUME</routerLink>
          </li>
          <li class="nav-item">
            <routerLink to="/projects">PROJECTS</routerLink>
          </li>
          <li class="nav-item">
            <routerLink to="/testimonials">TESTIMONIALS</routerLink>
          </li>
          <li>
            <routerLink to="/contact">CONTACT</routerLink>
          </li>
          
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>