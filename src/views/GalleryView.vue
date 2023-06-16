<template>
      <div class="pt-14 gallerie" id="haut">
            <!----------------------  BOUTON DE RETOUR EN ARRIERE -------------------->
            <div class="gallerie__return">
                  <button class="bg-white rounded-lg">
                        <router-link to="/descriptifs">
                              <font-awesome-icon
                                    :icon="['fass', 'arrow-left']"
                              />
                              Retour</router-link
                        >
                  </button>
            </div>

            <!------------------- CHAMBRE DU REZ DE CHAUSSE -------------------------------------->
            <div class="gallerie__frame" >
                  <h1 class="title bubble-bottom" id="chambre-rez-de-chaussee">
                        Chambre du Rez de chaussee
                  </h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="rdc in chambresRdc" :key="rdc.id">
                              <img
                                    :src="rdc.img"
                                    :alt="rdc.alt"
                                    @click="Cliquer"
                                    class="items"
                              />
                        </div>

                        <div class="details"></div>
                  </div>
            </div>

            <!------------------- CUISINE DU REZ DE CHAUSSE -------------------------------------->
            <div class="gallerie__frame">
                  <h1 class="title bubble-bottom" id="cuisine">La cuisine</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="cuisine in cuisines" :key="cuisine.id">
                              <img
                                    :src="cuisine.img"
                                    :alt="cuisine.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALON DU REZ DE CHAUSSE -------------------------------------->
            <div class="gallerie__frame" >
                  <h1 class="title bubble-bottom" id="salon">Le salon</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="salon in salons" :key="salon.id">
                              <img
                                    :src="salon.img"
                                    :alt="salon.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALLE A MANGER -------------------------------------->
            <div class="gallerie__frame" >
                  <h1 class="title bubble-bottom" id="salle-a-manger">La salle à manger</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="salle in sallesAManger" :key="salle.id">
                              <img
                                    :src="salle.img"
                                    :alt="salle.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!------------------- SALLE DE BAIN -------------------------------------->
            <div class="gallerie__frame" >
                  <h1 class="title bubble-bottom" id="salle-de-bain">La salle de bain</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="salle in sallesDeBain" :key="salle.id">
                              <img
                                    :src="salle.img"
                                    :alt="salle.alt"
                                    @click="Cliquer"
                                    class="items"
                              />
                        </div>

                        <!----<div class="details">
                              <div
                                    v-for="salon in salonsDetails"
                                    :key="salon.id"
                              >
                                    <img
                                          :src="salon.img"
                                          :alt="salon.alt"
                                          @click="Cliquer"
                                          class="items"
                                    />
                              </div>
                        </div> -->
                  </div>
            </div>

            <!------------------- 1 ER ETAGE -- CHAMBRE 1 -------------------------------->

            <div class="gallerie__frame" >
                  <h1 class="title bubble-bottom" id="chambre1">Chambre 1 Etage</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="chambre1 in chambre1Etages" :key="chambre1.id">
                              <img
                                    :src="chambre1.img"
                                    :alt="chambre1.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!--------------------1 ER ETAGE -- CHAMBRE 2----------------------------------------->

            <div class="gallerie__frame">
                  <h1 class="title bubble-bottom" id="chambre2">Chambre 2 Etage</h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="chambre2 in chambre2Etages" :key="chambre2.id">
                              <img
                                    :src="chambre2.img"
                                    :alt="chambre2.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>


            <!-------------------- JARDIN ----------------------------------------->

            <div class="gallerie__frame" id="jardin">
                  <h1 class="title bubble-bottom"> Le jardin </h1>

                  <div class="gallerie__frame--images mb-4">
                        <div v-for="jardin in jardins" :key="jardin.id">
                              <img
                                    :src="jardin.img"
                                    :alt="jardin.alt"
                                    @click="Cliquer"
                                    class="items"
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
                                    />
                              </div>
                        </div>
                  </div>
            </div>

            <!-------------POUR L'AFFICHAGE DES IMAGES ------------------------------->

            <div class="gallerie__popup">
                  <span @click="fermer" class="fermer">&times;</span>
                  <div class="flex items-center justify-between">
                        <span
                              class="bg-[rgb(22,163,74)] text-2xl border-green-600 mt-[25%] p-2"
                        >
                              <button v-on:click="prev">
                                    <font-awesome-icon
                                          :icon="['fass', 'arrow-left']"
                                          class="text-white"
                                    />
                              </button>
                        </span>

                        <!-- Dans cette partie les images cliqués s'afficheront -->
                        <img src="" alt="" />

                        <span class="bg-[rgb(22,163,74)] text-2xl mt-[25%] p-2">
                              <button v-on:click="next" id="previous">
                                    <font-awesome-icon
                                          :icon="['fass', 'arrow-right']"
                                          class="text-white"
                                    />
                              </button>
                        </span>
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
import { rezDeChausseDatabase } from "../database/rezdechausse";
import { etages } from "../database/etage";
import { jardin_database } from "../database/jardin";
import { chambresRdc, cuisines, cuisinesDetails, salons, salonsDetails, sallesDeBain, chambre1Etages, chambre1EtagesDetails, sallesAManger, sallesAMangerDetails, chambre2Etages, chambre2EtagesDetails, jardins, jardinsDetails } from "../database/gallerie";
//import { sallesAManger } from "../database/gallerie";

export default {
      setup() {
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
                        };
                  });
            };

            const fermer = () => {
                  document.querySelector(".gallerie__popup span").onclick =
                        () => {
                              document.querySelector(
                                    ".gallerie__popup"
                              ).style.display = "none";
                        };
            };

            var ind = 0;

            const prev = () => {
                  //afficherCodePrecedent()
                  var images = document.querySelectorAll(".items");

                  /*var tableau = Object.entries(images).map(function(entry) {
            return entry;
          });*/

                  ind--;
                  if (ind < 0) {
                        ind = images.length - 1;
                  }

                  images.forEach((image) => {
                        const imageSource = image.src;
                        document.querySelector(
                              ".gallerie__popup"
                        ).style.display = "none";
                        document.querySelector(".gallerie__popup img").src =
                              imageSource;

                        //image.style.display = 'none';
                  });

                  const imageSuivant = images[ind].src;
                  document.querySelector(".gallerie__popup").style.display =
                        "block";
                  document.querySelector(".gallerie__popup img").src =
                        imageSuivant;

                  //images[ind].style.display = 'block';
                  //console.log(images.length);
            };

            // Next

            const next = () => {
                  var images = document.querySelectorAll(".items");

                  /*var tableau = Object.entries(images).map(function(entry) {
            return entry;
          });

          console.log(tableau)

          images.forEach((image) => {
            ind = tableau.indexOf(image['img.items'])
            console.log(ind)
          })*/

                  ind++;

                  if (ind >= images.length) {
                        ind = 0;
                  }

                  images.forEach((image) => {
                        //ind = tableau.indexOf(image)
                        //ind++;
                        //console.log(ind);
                        const imageSource = image.src;
                        document.querySelector(
                              ".gallerie__popup"
                        ).style.display = "none";
                        document.querySelector(".gallerie__popup img").src =
                              imageSource;

                        //image.style.display = 'none';
                  });

                  const imageSuivant = images[ind].src;
                  document.querySelector(".gallerie__popup").style.display =
                        "block";
                  document.querySelector(".gallerie__popup img").src =
                        imageSuivant;

                  //images[ind].style.display = 'block';
                  console.log(images.length);
            };

            return {
                  Cliquer,
                  fermer,
                  next,
                  prev,
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


                  rezDeChausseDatabase,
                  etages,
                  jardin_database,
            };
      },
};
</script>

<style lang="scss" scoped>
.gallerie {
      width: 100%;
      background: rgba($color: #fff, $alpha: 0.3);

      &__return {
            width: 90%;
            margin: auto;
            text-align: left;
            margin-top: 1em;

            button {
                  background: rgb(22, 163, 74);
                  color: #fff;
                  padding: 0.2rem 0.5rem;
                  font-size: 1.1rem;

                  &:hover {
                        background: rgb(25, 183, 83);
                  }
            }
      }

      &__frame {
            width: 90%;
            margin: auto;

            &--images {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  grid-gap: 0.5rem;

                  div {
                        img {
                              object-fit: cover;
                              border-radius: 0.5em;
                              cursor: pointer;
                        }
                  }

                  .details {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 0.5rem;
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

      .title {
            //width: 35%;
            margin: auto;
            padding: 0.3em;
            border-radius: 50%;
            background: rgb(22, 163, 74);
            color: #fff;
            margin-bottom: 1em;
            font-weight: 600;
      }

      .bubble-bottom {
            /* Modify size here: */
            --size: 12em;

            position: relative;
            width: var(--size);
            height: calc(var(--size) * 0.25);
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
                  margin-bottom: calc(var(--size) * 0.13 * -1);
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
                  width: 800px;
                  object-fit: cover;
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
