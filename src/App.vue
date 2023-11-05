<template>
      <div>
            <header-view class="header" />
            <router-view />
      </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import AOS from "aos";
import store from "./store";
import { computed } from "vue";

export default {
      components: { HeaderView },
      setup() {
            AOS.init();

            const updateWidthInner = () => {
                  store.commit("setUpdateWebWidthInner")
                  console.log(`La valeur de window.innerWidth ${window.innerWidth}`);
            };


            var ma = computed(() => {
                  return store.state.updateWidthInner;
            });

            var corr = () => {
                  if(ma.value){
                        window.innerWidth = 1440
                  }
            }

            return{
                  ma,
                  corr,
                  updateWidthInner
            }
      },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

@import "aos/dist/aos.css";

// font-family: 'Great Vibes', cursive;

* {
      margin: 0;
      box-sizing: border-box;
}
#app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      background: url("../src/assets/Cormier/cormier_background.jpg");
      background-attachment: scroll;
      font-family: "Poppins", sans-serif;

      @media screen and (max-width: 769px) {
            background: url("../src/assets/Cormier/cormier_background_mobile.jpg");
            background-attachment: local;
      }
}

html {
      scroll-behavior: smooth;
}

.web-version{
      width: 1440px;
      transform: scale(0.1em);
}
</style>
