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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

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
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 768px) {
    font-family: 'Poppins', sans-serif;
  }
}

html{ 
  scroll-behavior: smooth;
}

</style>
