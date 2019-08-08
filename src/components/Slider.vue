<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
      <img class="slide" :src="require('../assets/img/1.jpg')">
    </swiper-slide>
    <swiper-slide>
      <img class="slide" :src="require('../assets/img/2.jpg')">
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button swiper-button-prev" slot="button-prev">
      <img class="black-to-white" :src="require('../assets/svg/arrow.svg')">
    </div>
    <div class="swiper-button swiper-button-next" slot="button-next">
      <img class="black-to-white" :src="require('../assets/svg/arrow.svg')">
    </div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Slider",
  props: ['bus'],
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.bus.$on('addSlide', this.addSlide);
  },
  methods: {
    addSlide(link) {
      this.$refs.mySwiper.swiper.appendSlide(
        `<div class="swiper-slide">
          <img class="slide" src="${link}" alt="ERROR: Failed to add an image">
        </div>`
        );
    }
  }
};
</script>

<style lang="stylus">
.slide
  width 100%;
  object-fit cover
  height 86vh
  
.swiper-slide
  width 100% !important

.swiper-button
  background none
  width vw(30)
  height vw(40)
  margin-left vw(5)
  margin-right vw(5)
  font-size 0
  margin-top vw(-35)
  img
    height vw(40)

.swiper-button-next
  right vw(10)

.swiper-button-prev
  transform: scaleX(-1);
  left vw(10)
  
.swiper-pagination
  color white
  bottom vw(90)
  font-size vw(20)
  
@media (max-width:768px)
  .swiper-button
    width vw(130)
    height vw(170)
    margin-left vw(40)
    margin-right vw(40)
    margin-top vw(-240)
    img
      height vw(170)
      
  .swiper-pagination
    bottom vw(400)
    font-size vw(80)
</style>

