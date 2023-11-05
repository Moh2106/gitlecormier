<template>
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

            <nav id="afficheMenu" class="afficheMenu">
                  <router-link to="/">
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

                        <template v-else> Livres d'or </template>
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

                        <template v-else> Disponibilités </template>
                  </router-link>
            </nav>

            <div class="tablette_menu" id="tablette_menu">
                  <nav
                        class="a"
                        id="afficheMenuTablette"
                        v-if="showMe"
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <router-link to="/" v-on:click="supprimerMenu">
                              <template v-if="chooseEnglishVersion">
                                    Home
                              </template>

                              <template v-else> Accueil </template>
                        </router-link>

                        <router-link
                              to="/descriptifs"
                              v-on:click="supprimerMenu"
                        >
                              <template v-if="chooseEnglishVersion">
                                    Description
                              </template>

                              <template v-else> Descriptifs </template>
                        </router-link>

                        <router-link
                              to="/comment-arriver"
                              v-on:click="supprimerMenu"
                        >
                              <template v-if="chooseEnglishVersion">
                                    How to get there
                              </template>

                              <template v-else> Comment arriver </template>
                        </router-link>

                        <router-link to="/alentours" v-on:click="supprimerMenu">
                              <template v-if="chooseEnglishVersion">
                                    The surroundings
                              </template>

                              <template v-else> Aux alentours </template>
                        </router-link>

                        <router-link to="/livredor" v-on:click="supprimerMenu">
                              <template v-if="chooseEnglishVersion">
                                    Guest book
                              </template>

                              <template v-else> Livres d'or </template>
                        </router-link>

                        <router-link to="/tarifs" v-on:click="supprimerMenu">
                              <template v-if="chooseEnglishVersion">
                                    Prices
                              </template>

                              <template v-else> Tarifs </template>
                        </router-link>

                        <router-link
                              to="/disponibilite"
                              v-on:click="supprimerMenu"
                        >
                              <template v-if="chooseEnglishVersion">
                                    Availability
                              </template>

                              <template v-else> Disponibilités </template>
                        </router-link>

                  </nav>
            </div>

            <div class="header__menu" v-on:click="afficheMenu">
                  <font-awesome-icon
                        icon="fa-solid fa-bars"
                        v-if="afficheHamburger"
                        v-on:click="changeIcon"
                  />

                  <font-awesome-icon
                        icon="fa-solid fa-xmark"
                        v-if="afficheCroix"
                        v-on:click="changeIcon"
                  />
            </div>
      </div>
</template>

<script>
import store from "@/store";
import { computed, ref } from "vue";

export default {
      setup() {
            const afficheCroix = ref(false);
            const afficheHamburger = ref(true);
            const showMe = ref(false);

            // Cette fonction va permettre de changer les icones du menu
            var changeIcon = () => {
                  afficheCroix.value = !afficheCroix.value;
                  afficheHamburger.value = !afficheHamburger.value;
            };

            // Cette fonction va permettre d'afficher le menu
            var afficheMenu = () => {
                  showMe.value = !showMe.value;
            };

            // Cette fonction va permettre de supprimer le menu du DOM
            var supprimerMenu = () => {
                  changeIcon();
                  showMe.value = !showMe.value;
            };

            var chooseEnglishVersion = computed(() => {
                  return store.state.englishVersion;
            });

            const englishVersion = () => {
                  store.commit("setEnglishVersion");
            };

            const frenchVersion = () => {
                  store.commit("setFrenchVersion");
            };

            const updateWidthInner = () => {
                  store.commit("setUpdateWebWidthInner")
            }

            /*var ma = computed(() => {
                  return store.state.updateWidthInner;
            });*/

            /*var corr = () => {
                  if(ma.value){
                        updateWidthInner()
                        window.innerWidth = 1440
                        console.log(`La valeur de window.innerWidth ${window.innerWidth}`);
                  }
            }*/

            return {
                  chooseEnglishVersion,
                  afficheCroix,
                  afficheHamburger,
                  showMe,

                  afficheMenu,
                  supprimerMenu,
                  changeIcon,
                  englishVersion,
                  frenchVersion,
                  updateWidthInner,
                  
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
      z-index: 1000;
      width: 100%;
      //border: 4px solid red;

      @media screen and (max-width: 769px) {
            //display: block;
            //display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            height: 9vh;
            width: 100wh;
            //position: sticky;
            //top: 1em;
      }

      @media screen and (max-width: 550px) {
            display: flex;
            font-family: Arial, Helvetica, sans-serif;
            height: 7vh;
            //font-family: "Poppins", sans-serif;
      }

      .first {
            width: 120%;

            @media screen and (max-width: 769px) {
                  width: 100%;
            }

            @media screen and (max-width: 550px) {
                  //background: #fff;
            }

            img {
                  @media screen and (max-width: 550px) {
                        width: 12%;
                  }
            }

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
      }

      &__title {
            color: #fff;
            padding: 0 1em;
            display: flex;
            //justify-content: center;
            //align-items: center;
            justify-items: center;
            margin-top: 0.5em;
            font-weight: 800;
            font-size: 1.4em;

            @media screen and (max-width: 769px) {
                  //width: 100%;
                  //margin: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #08a045;
            }

            @media screen and (max-width: 550px) {
                  //width: 100%;
                  transform: translateY(-0.2em);
            }
      }

      &__menu {
            display: none;

            @media screen and (max-width: 769px) {
                  font-size: 2em;
                  font-weight: 900;
                  margin-right: 0.5em;
                  z-index: 1000;
                  display: block;
                  color: #08a045;
            }

            /*@media screen and (max-width: 550px) {
                  font-size: 2em;
                  font-weight: 900;
                  margin-right: 0.5em;
                  z-index: 1000;
                  display: block;
            }*/
      }

      .flex {
            width: 120%;

            img {
                  object-fit: contain;

                  @media screen and (max-width: 1200px){
                        width: 12%;
                  }

                  @media screen and (max-width: 769px){
                        width: 8%;
                  }

                  @media screen and (max-width: 550px){
                        width: 10%;
                  }
            }

            
      }

      .afficheMenu {
            display: flex;
            justify-content: center;
            align-items: center;
            //position: relative;
            width: 300%;
            transition: 1s ease-in-out;

            @media screen and (max-width: 1300px) {
                  width: 360%;
            }

            @media screen and (max-width: 769px) {
                  //padding: 0 0.5em 0.5em 0.5em;
                  //font-size: 0.8em;
                  //width: auto;
                  //position: absolute;
                  //top: 5em;
                  display: none;
                  //width: 100%;
                  //height: 100vh;
            }

            @media screen and (max-width: 550px) {
                  /*display: block;
                  background: rgb(112, 7, 165);
                  width: 50%;
                  position: absolute;
                  left: 600px;
                  transition: 0.3s ease-in-out;
                  border-radius: 0.2em;
                  opacity: 0;
                  font-size: 1em;
                  font-weight: 600;*/
            }

            a {
                  padding: 0 1.5em 0.5em 1.5em;
                  align-items: center;
                  display: block;

                  @media screen and (max-width: 1300px) {
                        font-size: 0.9em;
                  }

                  /*@media screen and (max-width: 769px) {
                        background: #08a045;
                        display: block;
                        padding: 1em;
                        font-size: 1em;
                        margin: 0;
                  }*/

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

                        @media screen and (max-width: 1200px) {
                              margin: 0 0.1rem;
                        }

                        @media screen and (max-width: 769px) {
                              //transform: translateX(0.2em);
                              //font-size: 0.8em;
                              //transform: scale3d(0em);
                              //border-radius: 0em;
                              margin: 0em;
                        }
                  }

                  &.router-link-exact-active {
                        border-bottom: 3px solid #fff;
                        font-weight: 700;
                        background: #08a045;
                        border-radius: 0.5em;
                        color: #fff;

                        @media screen and (max-width: 769px) {
                              border-bottom: 0;
                              background: #fff;
                              color: #08a045;
                        }
                  }
            }
      }

      .tablette_menu {
            display: none;
            //position: absolute;

            @media screen and (max-width: 769px) {
                  display: block;

                  nav {
                        width: 100%;
                        position: absolute;
                        text-align: left;

                        //right: -100em;
                        top: 4.5em;
                        left: 0em;
                        //transition: 20s linear all;
                        //right: 0;

                        @media screen and (max-width: 550px) {
                              top: 3.5em;
                        }

                        a {
                              background: #08a045;
                              border: 1px solid #08a045;

                              @media screen and (max-width: 769px) {
                                    background: #08a045;
                                    display: block;
                                    padding: 1em;
                                    font-size: 1em;
                                    margin: 0;
                              }

                              &.router-link-exact-active {
                                    border-bottom: 3px solid #fff;
                                    font-weight: 700;
                                    background: #08a045;
                                    border-radius: 0.5em;
                                    color: #fff;

                                    @media screen and (max-width: 769px) {
                                          border-bottom: 0;
                                          background: #fff;
                                          color: #08a045;
                                          border-radius: 0%;
                                    }
                              }
                        }
                  }

                  //position: absolute;
                  //right: 20px;
            }
      }
}

/*.a.isActive {
      display: block;
      position: absolute;
      left: 0;
      top: 5em;
      //transition: 20s linear all;
      /*position: absolute;
      left: 195px;
      top: 5px;
      opacity: 1;
}

.active {
      display: block;
      transition: 20s linear all;
      //left: 0;
}*/
</style>
