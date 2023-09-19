<template>
      <div class="alentours" id="haut" v-motion-pop>
            <!---- Petite paragraphe pour une bref description ---->
            <p class="bg-white bg-opacity-90 text-left alentours__paragraph">
                  Profitez de votre séjour pour découvrir notre région, sur
                  cette carte vous trouvevez quelques lieux à visiter dans un
                  rayon de 50 km : fermes, restaurants, sites touristiques,
                  paysages, randonnées, etc ...
            </p>

            <!-- Intégration de la carte avec l'api de google map -->
            <div class="alentours__carte">
                  <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=12r6EtORX4TvW-tF_tddqwHYuHehKG0E&ehbc=2E312F"
                        width="100%"
                        height="600"
                  ></iframe>
            </div>

            <!-- 
                  Insertion des données comme les photos, le nom des sites aux alentours, le site web
                  des entreprises et le l'itinéraire vers gite le cormier via alentours.js
            -->

            <div class="monEnsemble">
                  <div
                        v-for="alentour in alentours"
                        :key="alentour.id"
                        class="monEnsemble__element"
                  >
                        <div
                              class="alentours__card"
                              data-aos="fade-right"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-out"
                        >
                              <div class="alentours__card--image">
                                    <div class="myImage">
                                          <img
                                                :src="alentour.img"
                                                :alt="alentour.titre"
                                          />
                                    </div>

                                    <div class="mapButton">
                                          <button
                                                class="bg-green-600"
                                                v-if="alentour.maps != ''"
                                          >
                                                <a
                                                      :href="alentour.maps"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      >Voir l'itinéraire</a
                                                >
                                          </button>
                                    </div>
                              </div>

                              <div class="alentours__card--description">
                                    <h1
                                          v-text="alentour.titre"
                                          class="font-bold"
                                    ></h1>

                                    <div class="description_tablette_screen">
                                          <div
                                                class="mapButton_tablette_screen"
                                          >
                                                <button
                                                      class="bg-green-600"
                                                      v-if="alentour.maps != ''"
                                                >
                                                      <a
                                                            :href="
                                                                  alentour.maps
                                                            "
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            >Voir
                                                            l'itinéraire</a
                                                      >
                                                </button>
                                          </div>

                                          <div>
                                                <button
                                                      class="bg-red-600"
                                                      v-if="alentour.site != ''"
                                                >
                                                      <a
                                                            :href="
                                                                  alentour.site
                                                            "
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            >Site officiel</a
                                                      >
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

            <div class="bubble">
                  <h2>Quelques sites d'informations</h2>
            </div>

            <div class="monEnsemble">
                  <div
                        v-for="alentour in alentoursSiteInformation"
                        :key="alentour.id"
                        class="monEnsemble__element"
                  >
                        <div
                              class="alentours__card"
                              data-aos="fade-right"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-out"
                        >
                              <div class="alentours__card--image">
                                    <div class="imageInformation">
                                          <img
                                                :src="alentour.img"
                                                :alt="alentour.titre"
                                          />
                                    </div>

                                    <div class="mapButton"></div>
                              </div>

                              <div
                                    class="alentours__card--description information"
                              >
                                    <h1
                                          v-text="alentour.titre"
                                          class="font-bold"
                                    ></h1>
                                    <button
                                          class="bg-red-600"
                                          v-if="alentour.site != ''"
                                    >
                                          <a
                                                :href="alentour.site"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >Site officiel</a
                                          >
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>

            <div></div>

            <!-------------- Boutton de redirection------------------------------>
            <div class="alentours__redirection">
                  <button>
                        <a href="#haut">
                              <font-awesome-icon
                                    icon="fa-solid fa-arrow-up"
                                    class="alentours__redirection--font"
                              />
                        </a>
                  </button>
            </div>
      </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { alentours, alentoursSiteInformation } from "../database/alentours";

export default {
      setup() {
            var mapsButton = ref(false);
            var result = ref(true);

            /*
                  Dans cette partie on recupère le mot saisi dans le input concernant la recherche d'un lieu
                  Ensuite on effectue une recherche sur le tableau alentours récupéré depuis notre base de donnée alentours.js
                  On stocke ensuite les résultats dans un tableau newAlentoursArrays
            */

            /* watch(site, (nouveau) => {
                  console.log(site.value + nouveau);
                  let alentourArray = alentours.filter((element) =>
                        element.titre.includes(nouveau.toUpperCase())
                  );
                  newAlentoursArrays.value = alentourArray;
            });*/

            return {
                  mapsButton,
                  alentours,
                  alentoursSiteInformation,
                  result,
            };
      },
};
</script>

<style lang="scss" scoped>
.alentours {
      margin-top: 3em;
      padding-top: 2em;
      width: 90%;
      margin: auto;
      padding-bottom: 2em;
      transition: 0.25s ease-in;

      @media screen and (max-width: 769px) {
            margin-top: 1.5em;
            width: 99%;
      }

      @media screen and (max-width: 550px) {
            margin-top: 0.5em;
      }

      .monEnsemble {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            @media screen and (max-width: 769px) {
                  width: 100%;
                  grid-template-columns: repeat(2, 1fr);
                  grid-gap: 0.1em;
                  margin: 0;
            }

            @media screen and (max-width: 550px) {
                  grid-template-columns: repeat(1, 1fr);
            }

            /*&__element{
                  @media screen and (max-width: 769px){
                        width: 100%;
                  }
            }*/
      }

      .bubble {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background: rgba(8, 160, 69, 0.8);
            color: #ffffff;
            //font-family: Arial;
            font-size: 1.1em;
            text-align: center;
            width: 20%;
            margin: auto;
            height: 10vh;
            border-radius: 10px;
            padding: 0px;

            @media screen and (max-width: 769px) {
                  width: 40%;
                  height: 8vh;
            }

            @media screen and (max-width: 550px) {
                  width: 45%;
                  margin-bottom: 0.5em;
            }

            &::after {
                  content: "";
                  position: absolute;
                  display: block;
                  width: 0;
                  z-index: 1;
                  border-style: solid;
                  border-width: 20px 20px 0 0;
                  border-color: rgba(8, 160, 69, 0.8) transparent transparent
                        transparent;
                  bottom: -20px;
                  left: 50%;
                  margin-left: -10px;

                  @media screen and (max-width: 550px) {
                        bottom: -19.5px;
                  }
            }
      }

      &__carte {
            margin-bottom: 1em;
      }

      &__paragraph {
            padding: 1em;
            border-radius: 0.5em;
            margin: 2.5em 0 1em 0;

            @media screen and (max-width: 769px) {
                  font-family: Arial, Helvetica, sans-serif;
            }
      }

      &__card {
            background: #fff;
            border-radius: 0.5em;
            margin: 1em;
            //position: relative;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                  rgba(0, 0, 0, 0.12) 0px -12px 30px,
                  rgba(0, 0, 0, 0.12) 0px 4px 6px,
                  rgba(0, 0, 0, 0.17) 0px 12px 13px,
                  rgba(0, 0, 0, 0.09) 0px -3px 5px;

            @media screen and (max-width: 769px) {
                  width: 95%;
            }

            &:hover {
                  transition: 0.5s;

                  .mapButton {
                        transition: ease-in-out 50s;
                        display: block;
                        background: rgba(170, 221, 204, 0.5);

                        @media screen and (max-width: 769px) {
                              display: none;
                        }

                        button {
                              animation: tada; /* referring directly to the animation's @keyframe declaration */
                              animation-duration: 2s; /* don't forget to set a duration! */
                        }
                  }
            }

            &--image {
                  position: relative;
                  height: 100%;

                  .myImage {
                        img {
                              width: 100%;
                              height: 250px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              //object-fit: cover;
                        }
                  }

                  .imageInformation {
                        width: 100%;

                        img {
                              width: 100%;
                              margin: auto;
                              height: 250px;
                              object-fit: contain;
                        }
                  }

                  .mapButton {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0em;
                        display: none;

                        button {
                              padding: 0.5em;
                              border: 2px solid #fff;
                              color: #fff;
                              border-radius: 0.5em;
                              width: 32%;
                              margin: auto;
                              position: relative;
                              top: 45%;
                              background: rgb(22, 163, 74);
                              border: none;

                              @media screen and (max-width: 769px) {
                                    width: 50%;
                              }

                              &:hover {
                                    background: rgb(22, 163, 74);
                                    border: none;
                              }
                        }
                  }
            }

            &--description {
                  .description_tablette_screen {
                        @media screen and (max-width: 769px) {
                              display: flex;
                              justify-content: center;
                        }

                        button {
                              @media screen and (max-width: 769px) {
                                    padding: 0.5em;
                                    margin: 0 0.5em 0.5em 0.3em;
                              }
                        }
                  }

                  .mapButton_tablette_screen {
                        display: none;

                        @media screen and (max-width: 769px) {
                              display: block;
                        }
                  }
                  button {
                        color: #fff;
                        padding: 0.3em;
                        border-radius: 0.5em;
                        margin-bottom: 0.3em;

                        &:hover {
                              background: rgb(185, 14, 14);
                        }
                  }
            }

            .information {
                  background: rgba(22, 163, 74, 0.5);
                  border-radius: 0.5em;
            }
      }

      &__redirection {
            text-align: right;

            &--font {
                  font-size: 1.5em;
                  padding: 0.7em;
                  border-radius: 50%;
                  margin-right: 0.5em;
                  background: #08a045;
                  color: #fff;
                  transform: translateX(2.5em);

                  @media screen and (max-width: 769px) {
                        transform: translateX(0em);
                  }
            }
      }
}
</style>
