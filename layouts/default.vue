<template>
  <div>
    <div
      :class="'parent splashdtf-hero-image transition-all ' + backgroundSet"
      :style="'background-color:' + backgroundColorSet"
    >
      <Header />
      <div class="max-w-6xl mx-auto">
        <Nuxt />
      </div>
      <div class="splashdtf-hero">
        <div class="splashdtf-hero-image splashdtf-hero-image--pansexual"></div>
        <div class="splashdtf-hero-image splashdtf-hero-image--romantic"></div>
        <div
          class="splashdtf-hero-image splashdtf-hero-image--single-person"
        ></div>
        <div
          class="splashdtf-hero-image splashdtf-hero-image--single-vegan"
        ></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      color: ["#5EA3FF", "#2982f6", "#02C2F1", "#00C4D0"],
      background: [
        "splashdtf-hero-image--pansexual",
        "splashdtf-hero-image--romantic",
        "splashdtf-hero-image--single-person",
        "splashdtf-hero-image--single-vegan",
      ],
      index: 0,
      backgroundSet: "splashdtf-hero-image--single-vegan",
      backgroundColorSet: "#00C4D0",
    };
  },
  created() {
    setInterval(() => {
      this.backgroundSet = this.background[this.index];
      this.backgroundColorSet = this.color[this.index];
      this.index++;
      if (this.index === this.background.length) this.index = 0;
    }, 4000);
  },
};
</script>

<style scoped>

@media (min-width: 766px) {
  .splashdtf-hero {
    transition: opacity 300ms linear;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 200;
    right: 0;
  }
  .splashdtf-hero-image--pansexual {
    background-position: right bottom;
    background-size: 500px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/pansexual.jpg);
  }
  .splashdtf-hero-image--romantic {
    background-position: right bottom;
    background-size: 600px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/romantic.jpg);
  }
  .splashdtf-hero-image--single-person {
    background-position: right bottom;
    background-size: 500px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/single_person.jpg);
  }
  .splashdtf-hero-image--single-vegan {
    background-position: right bottom;
    background-size: 400px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/single_vegan.jpg);
  }
}
@media (min-width: 1000px) {
  .parent {
    min-height: 760px;
  }
  .splashdtf-hero {
    transition: opacity 300ms linear;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 200;
    right: 0;
  }
  .splashdtf-hero-image--pansexual {
    background-position: calc(50% + 375px) calc(100% + 10px);
    background-size: 900px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/pansexual.jpg);
  }
  .splashdtf-hero-image--romantic {
    background-position: calc(50% + 275px) calc(80% + 10px);
    background-size: 1100px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/romantic.jpg);
  }
  .splashdtf-hero-image--single-person {
    background-position: calc(50% + 300px) calc(100% + 20px);
    background-size: 730px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/single_person.jpg);
  }
  .splashdtf-hero-image--single-vegan {
    background-position: calc(50% + 300px) calc(100% + 10px);
    background-size: 600px auto;
    background-repeat: no-repeat;
    background-image: url(https://cdn.okccdn.com/media/img/every_single_person/photos/single_vegan.jpg);
  }
}
</style>
