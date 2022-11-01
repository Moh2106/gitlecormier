<template>
  <div>
    <header-view/>
    <router-view/>
    <footer-view/>
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue'
import HeaderView from './components/HeaderView.vue'
export default {
  components: { FooterView, HeaderView },
    setup() {
    },
}
</script>

<style lang="scss">
* { 
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Oleo Script Swash Caps', cursive;
  background: #eef;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('../src/assets/Cormier/cormier_background.jpg');
  background-attachment: scroll;
}

html{ 
  scroll-behavior: smooth;
}

</style>
