<template>
  <div id="container">
    <Header colored="white" :title="false" />
    <router-link to="/second" id="start">Начать</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "home",
  components: {
    Header
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>

<style scoped lang="stylus">
#container 
  background #333
  min-height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

#start
  display block
  background #fff
  border-radius vw(3)
  color #333;
  text-decoration none
  font-size vw(24)
  text-transform uppercase
  cursor pointer
  padding vw(17) vw(54)
  z-index 1
  
@media (max-width:768px)
  #start
    font-size vw(80)
    padding vw(40) vw(140)
    border-radius vw(20)
</style>

