<template>
  <div class="container" id="skill">
    <div class="row">
      <div class="col">
        <h1>SKILLS</h1>
      </div>
    </div>
    <div class="row">
        <div class="col-sm-6 col-lg-6" id="cards">
          <div  v-for="skill in skills" :key="skill.id">
              <img :src="skill.image" class="card-img-top" id="skillImg" alt="...">
                <p class="card-text">{{skill.rate}}</p>
            </div>
        </div>
        <div class="col-sm-6 col-lg-6">
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
    <div>
    </div>
    <a href="https://drive.google.com/file/d/1M7HuxHgsv5U8fIG5MpItgKiV9giMYwLd/view" class="card-link">Download CV</a>
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
.card-link {
  display: flex;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: purple;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109) ;
  width:120px;
  align-items: center;
}
.card-link:hover {
  background-color:  #F3DEBA;
}

@media(width < 350px) {
#skillImg {
  width: 6rem;
}
}
</style>