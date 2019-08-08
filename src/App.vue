<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app, body, html {
  height: 100%;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.black-to-white {
  filter: invert(1);
}

.z-index-100 {
  z-index: 100;
}
</style>
