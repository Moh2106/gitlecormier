<template>
      <div class="pt-14 gallerie " id="haut">
            <!----------------------  BOUTON DE RETOUR EN ARRIERE -------------------->
            <div class="gallerie__return">
                  <button class="bg-white rounded-lg gallerie__return--pc">
                        <router-link to="/descriptifs">
                              <font-awesome-icon
                                    :icon="['fass', 'arrow-left']"
                              />
                              Retour</router-link
                        >
                  </button>

                  <button
                        class="bg-white rounded-lg gallerie__return--tablette"
                  >
                        <router-link to="/descriptifs">
                              <font-awesome-icon :icon="['fass', 'arrow-left']"
                        /></router-link>
                  </button>
            </div>

            <!------------------- CHAMBRE DU REZ DE CHAUSSE -------------------------------------->
            <div class="gallerie__frame">
                  <div class="titres" id="la-cuisine">
                        <h1 class="title bubble-bottom w-[100%]">
                              La chambre au rez de chaussée
                        </h1>

                        <h1 class="title__mobile w-[100%]">
                              La chambre au rez de chaussée
                        </h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="rdc in chambresRdc" :key="rdc.id">
                              <img
                                    :src="rdc.img"
                                    :alt="rdc.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="rdc.class"
                                    :id="rdc.index"
                              />
                        </div>

                        <div class="details"></div>
                  </div>
            </div>

            <!------------------- CUISINE DU REZ DE CHAUSSE ---------------------------------->
            <div class="gallerie__frame" >
                  <div class="titres" id="le-salon">
                        <h1 class="title bubble-bottom w-[100%]">La cuisine</h1>

                        <h1 class="title__mobile w-[100%]">La cuisine</h1>
                  </div>

                  <div class="gallerie__frame--images mb-4" id="cuisine">
                        <div v-for="cuisine in cuisines" :key="cuisine.id">
                              <img
                                    :src="cuisine.img"
                                    :alt="cuisine.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="cuisine.class"
                                    :id="cuisine.index"
                              />
                        </div>

                        <div class="details">
                              <div
                                    v-for="cuisine in cuisinesDetails"
                                    :key="cuisine.id"
                              >
                                    <img
                                          :src="cuisine.img"
                                          :alt="cuisine.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="cuisine.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALON DU REZ DE CHAUSSE -------------------------------------->
            <div class="gallerie__frame" id="salon">
                  <div class="titres" id="salles-a-manger">
                        <h1 class="title bubble-bottom w-[100%]">Le salon</h1>

                        <h1 class="title__mobile w-[100%]">Le salon</h1>
                  </div>

                  <div class="gallerie__frame--images mb-4" >
                        <div v-for="salon in salons" :key="salon.id">
                              <img
                                    :src="salon.img"
                                    :alt="salon.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="salon.class"
                                    :id="salon.index"
                              />
                        </div>
                        
                        <div class="details">
                              <div
                                    v-for="salon in salonsDetails"
                                    :key="salon.id"
                              >
                                    <img
                                          :src="salon.img"
                                          :alt="salon.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="salon.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALLE A MANGER -------------------------------------->
            <div class="gallerie__frame" id="salle-a-manger">
                  <div class="titres" id="sdb">
                        <h1 class="title bubble-bottom w-[100%]">
                              La salle à manger
                        </h1>

                        <h1 class="title__mobile w-[100%]">
                              La salle à manger
                        </h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="salle in sallesAManger" :key="salle.id">
                              <img
                                    :src="salle.img"
                                    :alt="salle.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :id="salle.index"
                              />
                        </div>

                        <div class="details">
                              <div
                                    v-for="salle in sallesAMangerDetails"
                                    :key="salle.id"
                              >
                                    <img
                                          :src="salle.img"
                                          :alt="salle.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="salle.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALLE DE BAIN -------------------------------------->
            <div class="gallerie__frame" id="salle-de-bain">
                  <div class="titres" id="chambre-palieres">
                        <h1 class="title bubble-bottom w-[100%]">
                              La salle de bain
                        </h1>

                        <h1 class="title__mobile w-[100%]">La salle de bain</h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="salle in sallesDeBain" :key="salle.id">
                              <img
                                    :src="salle.img"
                                    :alt="salle.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="salle.class"
                                    :id="salle.index"
                              />
                        </div>
                  </div>
            </div>

            <!------------------- 1 ER ETAGE -- CHAMBRE PALIERE -------------------------------->
            <div class="gallerie__frame" id="chambre-paliere">
                  <div class="titres" id="chambres2lits">
                        <h1 class="title bubble-bottom w-[100%]">
                              La chambre palière à l'étage
                        </h1>

                        <h1 class="title__mobile w-[100%]">
                              La chambre palière à l'étage
                        </h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div
                              v-for="chambre1 in chambre1Etages"
                              :key="chambre1.id"
                        >
                              <img
                                    :src="chambre1.img"
                                    :alt="chambre1.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="chambre1.class"
                                    :id="chambre1.index"
                              />
                        </div>

                        <div class="details">
                              <div
                                    v-for="chambre1 in chambre1EtagesDetails"
                                    :key="chambre1.id"
                              >
                                    <img
                                          :src="chambre1.img"
                                          :alt="chambre1.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="chambre1.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!--------------------1 ER ETAGE -- CHAMBRE 2 LITS ----------------------------------------->
            <div class="gallerie__frame" id="chambre2lits">
                  <div class="titres" id="jardins">
                        <h1 class="title bubble-bottom w-[100%]">
                              La chambre 2 lits à l'étage
                        </h1>

                        <h1 class="title__mobile w-[100%]">
                              La chambre 2 lits à l'étage
                        </h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div
                              v-for="chambre2 in chambre2Etages"
                              :key="chambre2.id"
                        >
                              <img
                                    :src="chambre2.img"
                                    :alt="chambre2.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="chambre2.class"
                                    :id="chambre2.index"
                              />
                        </div>

                        <div class="details">
                              <div
                                    v-for="chambre2 in chambre2EtagesDetails"
                                    :key="chambre2.id"
                              >
                                    <img
                                          :src="chambre2.img"
                                          :alt="chambre2.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="chambre2.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!-------------------- JARDIN ----------------------------------------->
            <div class="gallerie__frame" id="jardin">
                  <div class="titres">
                        <h1 class="title bubble-bottom w-[100%]">Le jardin</h1>

                        <h1 class="title__mobile w-[100%]">Le jardin</h1>
                  </div>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="jardin in jardins" :key="jardin.id">
                              <img
                                    :src="jardin.img"
                                    :alt="jardin.alt"
                                    @click="Cliquer"
                                    class="items"
                                    :class="jardin.class"
                                    :id="jardin.index"
                              />
                        </div>

                        <div class="details">
                              <div
                                    v-for="jardin in jardinsDetails"
                                    :key="jardin.id"
                              >
                                    <img
                                          :src="jardin.img"
                                          :alt="jardin.alt"
                                          @click="Cliquer"
                                          class="items"
                                          :id="jardin.index"
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!-------------POUR L'AFFICHAGE DES IMAGES ------------------------------->

            <div class="gallerie__popup">
                  <span @click="fermer" class="fermer">&times;</span>
                  <div class="flex items-center justify-between">
                        <img src="" alt="" />
                  </div>
            </div>

            <!--------------Boutton de redirection------------------------------>
            <div class="text-right">
                  <button>
                        <a href="#haut">
                              <font-awesome-icon
                                    icon="fa-solid fa-arrow-up"
                                    class="gallerie__font"
                              />
                        </a>
                  </button>
            </div>
      </div>
</template>

<script>
import {
      chambresRdc,
      cuisines,
      cuisinesDetails,
      salons,
      salonsDetails,
      sallesDeBain,
      chambre1Etages,
      chambre1EtagesDetails,
      sallesAManger,
      sallesAMangerDetails,
      chambre2Etages,
      chambre2EtagesDetails,
      jardins,
      jardinsDetails,
} from "../database/gallerie";

export default {
      setup() {
            /**
             * Cette fonction permet d'afficher le zoom des photos
             */

            // Indique l'index de l'image
            //var ind = 0;
            
            const Cliquer = () => {
                  const items = document.querySelectorAll(".items");

                  items.forEach((image) => {
                        image.onclick = () => {
                              // recupérer la source de l'image

                              const imageSource = image.src;
                              document.querySelector(
                                    ".gallerie__popup"
                              ).style.display = "block";
                              document.querySelector(
                                    ".gallerie__popup img"
                              ).src = imageSource;

                              //ind = image.id
                        };
                  });
            };

            /**
             * Cette fonction permet de fermer une photo en zoom
             */
            const fermer = () => {
                  document.querySelector(".gallerie__popup span").onclick =
                        () => {
                              document.querySelector(
                                    ".gallerie__popup"
                              ).style.display = "none";
                        };
            };

            return {
                  Cliquer,
                  fermer,
                  chambresRdc,
                  cuisines,
                  cuisinesDetails,
                  salons,
                  sallesDeBain,
                  salonsDetails,
                  sallesAManger,
                  sallesAMangerDetails,
                  chambre1Etages,
                  chambre1EtagesDetails,
                  chambre2Etages,
                  chambre2EtagesDetails,
                  jardins,
                  jardinsDetails,
            };
      },
};
</script>

<style lang="scss" scoped>
.gallerie {
      width: 100%;
      background: rgba($color: #fff, $alpha: 0.3);
      position: relative;
      overflow: hidden;

      @media screen and (max-width: 769px) {
            margin-top: 3em;
      }

      @media screen and (max-width: 550px) {
            margin-top: 1em;
      }

      .pc {
            display: block;

            @media screen and (max-width: 769px) {
                  display: none;
            }
      }

      .mobile {
            display: none;

            @media screen and (max-width: 769px) {
                  display: block;
            }
      }

      &__return {
            position: fixed;
            transform: translateY(20em);
            z-index: 10;
            //border: 2px solid red;

            button {
                  background: rgb(22, 163, 74);
                  color: #fff;
                  padding: 0.2rem 0.5rem;
                  font-size: 1.1rem;

                  &:hover {
                        background: rgb(25, 183, 83);
                  }
            }

            &--pc {
                  @media screen and (max-width: 769px) {
                        display: none;
                  }
            }

            &--tablette {
                  display: none;

                  @media screen and (max-width: 769px) {
                        display: block;
                        margin-left: 0.3em;
                  }

                  @media screen and (max-width: 550px) {
                        margin-left: 0em;
                  }
            }
      }

      &__frame {
            width: 90%;
            margin: auto;
            transform: translateX(2em);

            @media screen and (max-width: 769px) {
                  width: 95%;
                  transform: translateX(0.5em);
            }

            @media screen and (max-width: 550px) {
                  //width: 100%;
                  transform: translateX(-0.6em);
            }

            &--images {
                  display: grid;
                  grid-template-columns: repeat(25, 1fr);
                  grid-gap: 2em;
                  width: 100%;
                  margin: auto;
                  transform: translateX(2em);
                  margin-bottom: 1em;

                  @media screen and (max-width: 769px) {
                        grid-gap: 1em;
                  }

                  @media screen and (max-width: 550px) {
                        margin-top: 0.5em;
                        grid-gap: 0.5em;
                  }

                  div {
                        grid-column: span 12;

                        .photo_long_format {
                              grid-row: auto;
                              padding: 0 6.4em;

                              @media screen and (max-width: 769px) {
                                    padding: 0 3.4em;
                              }

                              @media screen and (max-width: 476px) {
                                    padding: 0 2em;
                              }
                        }

                        .photo_court_format {
                              img {
                                    object-fit: contain;
                              }
                        }
                  }

                  div {
                        img {
                              cursor: pointer;
                              object-fit: contain;
                        }
                  }

                  .details {
                        display: flex;
                        flex-wrap: wrap;

                        div {
                              width: 30%;
                              margin-right: 1em;
                              margin-bottom: 0.5em;
                              border-radius: 0.1em;

                              @media screen and (max-width: 769px) {
                                    width: 30%;
                                    margin-right: 0.5em;
                              }

                              @media screen and (max-width: 769px) {
                                    width: 30.5%;
                                    margin-right: 0.3em;
                              }
                        }
                  }
            }

            &--photos {
                  width: 100%;
                  display: grid;
                  grid-template-columns: repeat(5, 1fr);
                  grid-gap: 0.5rem;

                  div {
                        img {
                              object-fit: cover;
                              border-radius: 0.5em;
                              cursor: pointer;
                        }
                  }
            }
      }

      .titres {
            //margin-bottom: 0.5em;
            @media screen and (max-width: 550px) {
                  width: 50%;
                  margin: auto;
                  //margin-top: 6em;
            }
            .title {
                  margin: auto;
                  padding: 0.3em;
                  //border-radius: 50%;
                  background: rgb(22, 163, 74);
                  color: #fff;
                  margin-bottom: 1em;
                  font-weight: 600;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  @media screen and (max-width: 550px) {
                        display: none;
                        //font-size: 0.9em;
                  }

                  &__mobile {
                        display: none;

                        @media screen and (max-width: 550px) {
                              display: block;
                              background: rgb(22, 163, 74);
                              color: #fff;
                              margin-bottom: 1em;
                              font-weight: 600;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              padding: 0.3em;
                              width: auto;
                              margin: auto;
                              border-radius: 0.5em;
                              font-size: 0.8em;
                              transform: translateX(1em);
                        }
                  }
            }
      }

      .bubble-bottom {
            /* Modify size here: */
            --size: 13em;

            position: relative;
            width: var(--size);
            height: calc(var(--size) * 0.3);
            border-radius: 10px;

            &::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  width: 0;
                  height: 0;
                  border: calc(var(--size) * 0.13) solid transparent;
                  border-top-color: rgb(22, 163, 74);
                  border-bottom: 0;
                  margin-left: calc(var(--size) * 0.13 * -1);
                  margin-bottom: calc(var(--size) * 0.1 * -1);
            }
      }

      &__popup {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 100000;
            display: none;
            transition: 0.5s ease-in-out;
            backdrop-filter: blur(15px);

            .fermer {
                  position: absolute;
                  top: 0;
                  right: 10px;
                  font-size: 4rem;
                  font-weight: bolder;
                  color: #fff;
                  cursor: pointer;
                  z-index: 100000;
            }

            img {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  max-width: 1300px;
                  width: 80%;
                  height: 90vh;
                  object-fit: contain;

                  @media screen and (max-width: 550px) {
                        width: 95%;
                  }
            }
      }

      &__font {
            font-size: 1.5em;
            padding: 0.7em;
            border-radius: 50%;
            color: #fff;
            margin-right: 0.5em;
            background: rgb(22, 163, 74);
      }
}


</style>
