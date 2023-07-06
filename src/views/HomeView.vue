<template>
  <div class="home">
    <p>
      S.Pepengweni<br/>
      Web Developer
    </p>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>

<style scoped>
.home {
  background-image: url(https://i.postimg.cc/hjPBL6KW/nude-color-background-1080-x-1920-t0snieucs4r32iv4.jpg);
  object-fit: cover;
  color:white;
  font-weight: bold;
 background-size: cover;
 min-height:100vh;
}
@media (width <800px){
  .home{
    object-fit: contain;
    width: 100%;
    color:white;
    font-weight: bold;
   background-size: cover;
   min-height:100vh;
  }
}
</style>
