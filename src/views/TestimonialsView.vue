<template>
  <div class="container">
    <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-auto">
      <div class="col">
        <div class="card mb-3" v-for="testimonial in testimonials" :key="testimonial.id">
          <img :src="testimonial.image" class="img-fluid rounded-start" alt="..." id="testiImg">
          <div class="card-body">
            <h5 class="card-title">{{testimonial.name}}</h5>
            <p class="card-text">{{testimonial.description}}</p>
          </div>
    </div>
      </div>
    </div> -->
    <div class="row">
      <div class="col">
        <div
          class="card mb-3"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="testimonial.image"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ testimonial.name }}</h5>
                <p class="card-text">
                  {{testimonial.description}}
                </p>
              </div>
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
/*.container {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
}*/
.card {
  height: 18rem;
}

img {
  height: 18rem;
}
#testiImg {
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}

@media (width < 540px) {
  #testiImg {
    height: 100%;
    width: 100%;
  }

  .card {
    height: max-content;
  }
  /*.card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 250px;
  }*/
}
</style>
