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
#app {
  font-family: 'Oleo Script Swash Caps', cursive;
  background: #eef;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

</style>
