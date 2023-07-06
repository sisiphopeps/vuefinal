<template>
  <div class="container">
        <div class="card mb-3" v-for="testimonial in testimonials" style="max-width: 540px;" :key="testimonial.id">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="testimonial.image" class="img-fluid rounded-start" alt="..." style="height:100%; object-fit:cover;">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{testimonial.name}}</h5>
                  <p class="card-text">{{testimonial.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        computed: {
      testimonials() {
        return this.$store.state.testimonials;
      },
    },
    mounted() {
      this.$store.dispatch('fetchTestimonials')
    },  
    }
</script>

<style  scoped>
.container{
  display: grid!important;
  grid-template-columns: repeat(2,1fr)!important;
  }
</style>