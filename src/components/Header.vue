<template>
  <div class="header">
    <div class="header__logo header__logo--left" :class="colored">
      <a href="#">
        <img id="psLogo" :src="require('../assets/svg/pl-logo.svg')" class="inject-header"/>
      </a>
      <div id="title" v-if="title">Тестовое задание</div>
    </div>
    <div class="header__logo header__logo--right" :class="colored">
      <a href="#">
        <img id="ytLogo" :src="require('../assets/svg/yt-logo.svg')" class="inject-header"/>
      </a>
    </div>
  </div>
</template>

<script>
  import SVGInjector from 'svg-injector';

  export default {
    name: "Header",

    props: {
      colored: String,
      title: Boolean
    },

    mounted() {
      let imgs = document.querySelectorAll('img.inject-header');
      let curSvg = 0, cs;

      // Options
      let ops = {
        evalScripts: 'once',
        pngFallback: 'assets/png',
        each: (svg) => {
          if (curSvg === 0) {
            if (this.colored === "white") {
              svg.children[curSvg].style.fill = "white";
            }
          }
          else if (curSvg === 1) {
            if (this.colored === "white") {
              cs = svg.querySelectorAll('.c');
              for (let i = 0; i < cs.length; i++)
                cs[i].style.fill = "white";
            }
          }
          curSvg++;
        }
      };

      // Trigger the injection
      SVGInjector(imgs, ops);
    }
  };
</script>

<style lang="stylus">
.header 
  height: vw(160,$grid-breakpoints.lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 vw(40,$grid-breakpoints.lg)
  position: absolute;
  top: 0;
  width: 100%;
  
.header__logo--left
  display: flex;
  align-items: center;
  
#title
  padding-left: vw(40);
  font-size: vw(30);
  
#psLogo
  width vw(104)
  height vw(80)
  
#ytLogo
  width vw(178)
  height vw(40)
  
@media (max-width:768px)
  .header
    height: vw(320,$grid-breakpoints.lg);
    
  #psLogo
    width vw(208)
    height vw(160)
  
  #ytLogo
    width vw(356)
    height vw(80)

  #title
    display none
</style>
