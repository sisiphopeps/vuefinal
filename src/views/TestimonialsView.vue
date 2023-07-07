<template>
   <div class="container">
        <div class="row justify-content-center gap-3 my-3">
            <div class="card" style="width: 20rem;" v-for="testimonial in testimonials" :key="testimonial?.id">
                <img :src="testimonial?.image" :alt="testimonial?.name" class="card-img-top img-fluid" style="height:250px; object-fit:cover;">
                <div class="card-body">
                  <h5 class="card-title">{{ testimonial?.name }}</h5>
                  <p class="card-description"> {{ testimonial?.description }}</p>
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
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}

.card-img-top{
  object-fit: cover;
  object-position: top;
  height: 800px;

}
.card{
  background-color: #D9D9D9;
  box-shadow: 4px 8px 0px grey;
}


</style>
