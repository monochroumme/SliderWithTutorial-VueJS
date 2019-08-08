<template>
  <div id="container">
    <Header :title="true" />
    <div class="content">
      <div id="content__left">
        <Slider :bus="bus" />
      </div>
      <div id="content__right">
        <form id="form" v-on:submit.prevent="addSlide">
          <label for="link">Ссылка на картинку</label>
          <input id="link" type="text" v-model="link" />
        </form>
        <div id="add" @click="addSlide">
          <img class="black-to-white" alt="PLUS" src="../assets/svg/plus.svg">
        </div>
      </div>
      <TutorialSecond />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import TutorialSecond from '@/components/TutorialSecond.vue';

export default {
  name: "home",
  components: {
    Header,
    Slider,
    TutorialSecond
  },
  data() {
    return {
      link: '',
      bus: new Vue()
    };
  },
  methods: {
    addSlide() {
      if (this.link)
        this.bus.$emit('addSlide', this.link);
    }
  }
};
</script>

<style scoped lang="stylus">
.content
  position absolute
  bottom 0
  top: vw(160,$grid-breakpoints.lg)
  max-width 100%
  display flex
  
  #content__left
    overflow hidden
  
  #content__right
    max-width vw(190)
    min-width vw(190)
    display flex
    flex-direction column
    justify-content space-between
    background-color #cccccc
  
form
  display flex
  flex-direction column
  align-items center
  label
    text-align center
    margin-top vw(20)
    padding 0 vw(10)
    font-size vw(15)
  
#link
  margin-top vw(18)
  max-width 80%
  min-width 80%
  border none
  outline none
  padding vw(2)
  font-size vw(12)
  
#add
  background-color #fc3030
  margin vw(30)
  font-size 0
  img
    padding vw(15)
    width 100%

#add:hover
  cursor pointer
  
@media (max-width:768px)
  .content
    flex-direction column
    top: vw(320,$grid-breakpoints.lg)
    
  #content__right
    max-width 100% !important
    min-width 100% !important
    flex-direction row !important
    max-height: vw(320,$grid-breakpoints.lg)
    form
      padding vw(50)
      align-items flex-start
      justify-content center
      flex-grow 1
      background-color #cccccc
      label
        font-size vw(60)
        text-align left
        padding 0
        margin 0
      #link
        font-size vw(90)
        width 100%
        max-width 100%
    #add
      width vw(400)
      margin 0
      img
        padding vw(60)
      
</style>

