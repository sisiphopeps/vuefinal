<template>
    <div class="container">
        <div class="row justify-content-center gap-3 my-3">
            <div class="card" style="width: 20rem;" v-for="project in projects" :key="project?.id">
                <img :src="project?.image" :alt="project?.name" class="card-img-top" style="height:150px; object-fit:cover;">
                <div class="card-body">
                  <h5 class="card-title">{{ project?.name }}</h5>
                 <a :href="project?.github">Github</a>
                  <a :href="project?.netlify">Netlify</a>
                </div>
              </div>
        </div>
    </div>

  </template>
  <script>
  export default {
     computed: {
      projects() {
        return this.$store.state.projects;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProjects')
    },
  };
  </script>
  <style scoped>
.card a {
  background-color: burlywood;
  text-decoration: none;
  color:black;
  margin:4px;
  padding:3px;
  border:1px solid black;
  border-radius:8px;
  
}

.card {
  background-color: #D9D9D9;
}
body {
  background-clip: #E2CBB9;
}
</style>
  