<template>
 
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
        <img src="https://i.postimg.cc/5y76mQpZ/IMG-0070.png" alt="image" class="sisipho">
      </div>
      <div class="col">
        <h1>About me</h1>
        <p>I go by the name Sisipho Pepengweni. I was born an bred in a small town called 
        Cofimvaba in the Eastern Cape. I currently reside in Lower crosssroad, a small 
        Township in Cape Town. I am an aspiring full stack developer who's interest is 
        enhancing my professional skills and gaining professional experience in the field.
        I spend most of my time on computers because I am intrigued by how these 
        machines work. My love for coding developed when I attended a career exhibition
        at UCT.</p>
      </div>
     
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
p{
  margin-top: 0;
}
h1{
  margin-top: 50px;
}

.sisipho{
  width: 300px;
  height:300px;
  border-radius: 300px;
}

.card {
  background-color: #E2CBB9;
  height: max-content;
  text-align: center;
}
@media (width < 340px){
  .sisipho{
    width: 200px;
    height:200px;
    border-radius: 200px;
    margin-top: 15px;
  }
  h1{
    margin-top: 20px;
  }
}
</style>
