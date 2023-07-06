<template>
  <div class="container" id="skill">
    <div class="row">
      <div class="col">
        <h1>SKILLS</h1>
      </div>
    </div>
    <div class="row">
        <div class="col-6" id="cards">
          <div class="m-2" v-for="skill in skills" :key="skill.id" style="width: 10rem;">
              <img :src="skill.image" class="card-img-top" alt="...">
                <p class="card-text">{{skill.rate}}</p>
            </div>
        </div>
        <div class="col-6">
          <div id="edu">
            <h1>EDUCATION</h1>
            <div class="card" v-for="education in education" :key="education.id">
                <p class="card-text">{{education.period}}</p>
                <div class="card-body">
                  <p class="card-text">{{education.name}}</p>
                  <p class="card-text">{{education.desc}}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        computed: {
      skills() {
        return this.$store.state.skills;
      },
        education(){
            return this.$store.state.education;
        }
     
    },
    mounted() {
      this.$store.dispatch('fetchSkills');
      this.$store.dispatch('fetchEducation')
    },  
    }
</script>

<style  scoped>
#cards {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
</style>