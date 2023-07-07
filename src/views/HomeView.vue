<template>
  <div class="home">
    <img src="https://i.postimg.cc/hjPBL6KW/nude-color-background-1080-x-1920-t0snieucs4r32iv4.jpg" alt="" id="homeImg">
    <p class="textHome">
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
  position: relative;
  text-align: center;
}
.textHome{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  font-size: 30px;
}
#homeImg {
  width: 100%;
  height: 100vh;
}
@media (width < 800px){
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
