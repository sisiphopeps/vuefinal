<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: {
    NavbarComp, FooterComp
  }
}
</script>

<style>
#app {
  font-family: 'Cormorant', serif;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #E2CBB9;

  display: grid;
  grid-template-columns: repeat (3, 1fr );
  grid-template-rows: auto minmax(74.2vh, 1fr) auto;


















}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
