<template class="relative">
      <div class="header">

            <div class="first">

                  <div class="flex">
                        <img
                              src="../assets/Liens/logo_gite_france.png"
                              alt="Logo de gite de France"
                              class="w-[10%] mt-[0.3rem] ml-[0.3rem]"
                        />
                        <h1 class="header__title">𝕲î𝖙𝖊 𝖑𝖊 𝖈𝖔𝖗𝖒𝖎𝖊𝖗</h1>

                        <!----<div class="first__drap">
                               French drap 
                               
                              <img
                                    src="../assets/Header/france_drap.png"
                                    alt=""
                                    title="Français"
                                    v-on:click="frenchVersion"
                              />

                                English drap 
                              <img
                                    src="../assets/Header/united-kingdom.png"
                                    alt=""
                                    title="English"
                                    v-on:click="englishVersion"
                              />

                        </div>-->
                  </div>
            </div>

            <nav id="afficheMenu" class="a">
                  <router-link to="/" v-on:click="supprimerMenu">
                        <template v-if="chooseEnglishVersion"> Home </template>

                        <template v-else> Accueil </template>
                  </router-link>

                  <router-link to="/descriptifs">
                        <template v-if="chooseEnglishVersion">
                              Description
                        </template>

                        <template v-else> Descriptifs </template>
                  </router-link>

                  <router-link to="/comment-arriver">
                        <template v-if="chooseEnglishVersion">
                              How to get there
                        </template>

                        <template v-else> Comment arriver </template>
                  </router-link>

                  <router-link to="/alentours">
                        <template v-if="chooseEnglishVersion">
                              The surroundings
                        </template>

                        <template v-else> Aux alentours </template>
                  </router-link>

                  <router-link to="/livredor">
                        <template v-if="chooseEnglishVersion">
                              Guest book
                        </template>

                        <template v-else> Livres d'ôr </template>
                  </router-link>

                  <router-link to="/tarifs">
                        <template v-if="chooseEnglishVersion">
                              Prices
                        </template>

                        <template v-else> Tarifs </template>
                  </router-link>

                  <router-link to="/disponibilite">
                        <template v-if="chooseEnglishVersion">
                              Availability
                        </template>

                        <template v-else> Disponibilité </template>
                  </router-link>
            </nav>

            <div class="header__menu">
                  <font-awesome-icon
                        icon="fa-solid fa-bars"
                        v-on:click="afficheMenu"
                  />
            </div>
      </div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";

export default {
      setup() {
            var afficheMenu = () => {
                  var e = document.getElementById("afficheMenu");
                  e.classList.toggle("isActive");
            };

            var supprimerMenu = () => {
                  var nav = document.querySelectorAll(".nav__link");
                  var e = document.getElementById("afficheMenu");
                  console.log(nav);

                  nav.forEach((el) => {
                        el.addEventListener("click", () => {
                              e.classList.remove("isActive");
                        });
                  });
            };

            var chooseEnglishVersion = computed(() => {
                  return store.state.englishVersion;
            });

            const englishVersion = () => {
                  store.commit("setEnglishVersion");
            };

            const frenchVersion = () => {
                  store.commit("setFrenchVersion");
            }

            return {
                  chooseEnglishVersion,
                  afficheMenu,
                  supprimerMenu,

                  englishVersion,
                  frenchVersion,
            };
      },
};
</script>

<style lang="scss" scoped>
.header {
      display: flex;
      justify-content: flex-start;
      color: #fff;
      backdrop-filter: brightness(95%) blur(3px);
      height: 7.5vh;
      font-family: "Poppins", sans-serif;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100000;
      width: 100%;

      @media screen and (max-width: 768px) {
            display: block;
      }

      @media screen and (max-width: 550px) {
            display: flex;
            font-family: "Poppins", sans-serif;
      }

      .first {
            width: 120%;
            &__drap {
                  //border: red solid 3px;
                  width: 20%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  //height: 5vh;

                  img {
                        display: inline;
                        width: 25%;
                        margin-right: 0.5em;
                        cursor: pointer;
                  }
            }
            @media screen and (max-width: 768px) {
                  background: #fff;
            }

            @media screen and (max-width: 550px) {
                  //background: #fff;
            }
      }

      &__title {
            color: #fff;
            padding: 0 1em;
            display: flex;
            justify-items: center;
            margin-top: 0.5em;
            font-weight: 800;
            font-size: 1.4em;

            @media screen and (max-width: 768px) {
                  width: 25%;
                  margin: auto;
                  color: #08a045;
            }

            @media screen and (max-width: 550px) {
                  width: 100%;
            }
      }

      &__menu {
            display: none;

            @media screen and (max-width: 550px) {
                  font-size: 2em;
                  font-weight: 900;
                  margin-right: 0.5em;
                  z-index: 1000;
                  display: block;
            }
      }

      .flex {
            width: 100%;

            img {
                  object-fit: contain;
            }
      }

      nav {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 230%;

            @media screen and (max-width: 768px) {
                  padding: 0 0.5em 0.5em 0.5em;
                  font-size: 0.8em;
                  width: auto;
            }

            @media screen and (max-width: 550px) {
                  display: block;
                  background: rgb(112, 7, 165);
                  width: 50%;
                  position: absolute;
                  left: 600px;
                  transition: 0.3s ease-in-out;
                  border-radius: 0.2em;
                  opacity: 0;
                  font-size: 1em;
                  font-weight: 600;
            }

            a {
                  padding: 0 1.5em 0.5em 1.5em;
                  align-items: center;

                  @media screen and (max-width: 768px) {
                        padding: 0 0.5em 0.5em 0.5em;
                        font-size: 0.8em;
                  }

                  @media screen and (max-width: 550px) {
                        display: block;
                  }

                  &:hover {
                        transition: 0.5s ease-in-out;
                        transform: scale3d(1em);
                        font-size: 1.05em;
                        background: #08a045;
                        border-radius: 0.5em;
                        margin: 0 0.3rem;

                        @media screen and (max-width: 768px) {
                              transform: translateX(0.2em);
                              font-size: 0.8em;
                        }
                  }

                  &.router-link-exact-active {
                        border-bottom: 3px solid #fff;
                        font-weight: 700;
                        background: #08a045;
                        border-radius: 0.5em;
                        color: #fff;

                        @media screen and (max-width: 768px) {
                              border-bottom: 2px solid #fff;
                        }
                  }
            }
      }
}

.a.isActive {
      position: absolute;
      left: 195px;
      top: 5px;
      opacity: 1;
}
</style>
