<template>
      <div class="descriptif pt-20 pb-4">
            <div
                  class="descriptif__paragraph text-left"
                  data-aos="zoom-out-down"
            >
                  <p>
                        La chaumière normand du 18è siècle, le charme de
                        l'ancien et le confort actuel. 3000 m² de jardin
                        paysager privatif. Une grande terrasse plein Sud, le
                        jaccuzzi à température, de nombreux jeux pour enfants,
                        tous les équipements pour cuisiner. Les méandres de la
                        Seine vous attendent à 10 minutes à vélo, la forêt de
                        Brotonne 7000ha commence juste au bout de la rue.
                  </p>
            </div>

            <!------------- REZ DE CHAUSSE    -------------------------------------------->

            <h1 class="title mt-4 mb-4" data-aos="flip-right">
                  Rez-de-chaussée
            </h1>
            <div class="flex justify-between m-auto descriptif__section">
                  <swiper
                        :slidesPerView="1"
                        :spaceBetween="20"
                        :loop="true"
                        :pagination="{
                              clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper w-4/5 m-auto"
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <swiper-slide
                              v-for="rdc in rezDeChausses"
                              :key="rdc.id"
                        >
                              <img :src="rdc.img" :alt="rdc.alt" class="b" />
                        </swiper-slide>
                  </swiper>

                  <!----------------Texte descriptif -------------------------------->
                  <div
                        class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left rounded-lg"
                        data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <h1 class="font-semibold">Au rez-de-chaussée :</h1>

                        <ul class="w-4/5">
                              <li
                                    v-for="description in rdcDescription"
                                    :key="description.id"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in"
                              >
                                    {{ description.details }}
                              </li>
                        </ul>

                        <div
                              class="plan"
                              data-aos="fade-left"
                              data-aos-duration="500"
                              data-aos-easing="ease-in"
                        >
                              <img
                                    src="../assets/RezDeChaussee/gite_le_cormier_rdc_plan.jpg"
                                    alt=""
                              />

                              <div>
                                    <button v-on:click="afficheChambreRdc">
                                          <img
                                                src="../assets/RezDeChaussee/rdc_chambre_plan.jpg"
                                                alt=""
                                                class="plan__rdc-chambre"
                                          />
                                    </button>

                                    <button v-on:click="afficheSdbRdc">
                                          <img
                                                src="../assets/RezDeChaussee/rdc_sdb_plan.jpg"
                                                alt=""
                                                class="plan__rdc-sdb"
                                          />
                                    </button>

                                    <button v-on:click="afficheCuisineRdc">
                                          <img
                                                src="../assets/RezDeChaussee/rdc_cuisine_plan.jpg"
                                                alt=""
                                                class="plan__rdc-cuisine"
                                          />
                                    </button>

                                    <button v-on:click="afficheSalonRdc">
                                          <img
                                                src="../assets/RezDeChaussee/rdc_salon_plan.jpg"
                                                alt=""
                                                class="plan__rdc-salon"
                                          />
                                    </button>

                                    <button v-on:click="afficheSalleAMangerRdc">
                                          <img
                                                src="../assets/RezDeChaussee/rdc_sejour_plan.jpg"
                                                alt=""
                                                class="plan__rdc-sejour"
                                          />
                                    </button>
                              </div>

                              <div></div>
                        </div>

                        <div
                              data-aos="fade-left"
                              data-aos-duration="500"
                              data-aos-easing="ease-in"
                        >
                              Passer la souris sur le plan pour plus de détails
                        </div>
                  </div>
            </div>

            <!-------------------------- 1ER ETAGE ------------------------------------>
            <h1 class="title" data-aos="flip-right">Au 1er Etage</h1>
            <div class="flex justify-between m-auto descriptif__section">
                  <swiper
                        :slidesPerView="1"
                        :spaceBetween="20"
                        :loop="true"
                        :pagination="{
                              clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper w-4/5 m-auto"
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <swiper-slide v-for="etage in etages" :key="etage.id">
                              <img
                                    :src="etage.img"
                                    :alt="etage.alt"
                                    class="b"
                              />
                        </swiper-slide>
                  </swiper>

                  <!----------------Texte descriptif -------------------------------->
                  <div
                        class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left rounded-lg"
                        data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <h1 class="font-semibold">Au 1 er étage :</h1>

                        <ul class="w-4/5">
                              <li
                                    v-for="description in etageDescription"
                                    :key="description.id"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in-out"
                              >
                                    {{ description.details }}
                              </li>

                              <div class="plan"
                              data-aos="fade-left"
                              data-aos-duration="500"
                              data-aos-easing="ease-in">
                                    <img
                                          src="../assets/Etage/gite_le_cormier_1er_etage.jpg"
                                          alt="Plan du 1er étage"
                                    />
                                    <div>
                                          <button v-on:click="afficheChambre1">
                                                <img
                                                      src="../assets/Etage/etage1_chambre1.jpg"
                                                      alt=""
                                                      class="plan__chambre1"
                                                />
                                          </button>

                                          <button v-on:click="afficheChambre2">
                                                <img
                                                      src="../assets/Etage/etage1_chambre2.jpg"
                                                      alt=""
                                                      class="plan__chambre2"
                                                />
                                          </button>
                                    </div>
                              </div>
                        </ul>
                  </div>
            </div>

            <!-------------------------- LE JARDIN ------------------------------------->
            <h1 class="title" data-aos="flip-right">Le jardin</h1>
            <div class="flex justify-between m-auto descriptif__section">
                  <swiper
                        :slidesPerView="1"
                        :spaceBetween="20"
                        :loop="true"
                        :pagination="{
                              clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper w-4/5 m-auto"
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <swiper-slide
                              v-for="jardin in jardin_database"
                              :key="jardin.id"
                        >
                              <img :src="jardin.img" alt="" class="b" />
                        </swiper-slide>
                  </swiper>

                  <!----------------Texte descriptif -------------------------------->
                  <div
                        class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left rounded-lg description"
                        data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <h1 class="font-semibold">Dans le jardin :</h1>

                        <ul class="w-4/5">
                              <li
                                    v-for="description in jardinDescription"
                                    :key="description.id"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in"
                              >
                                    {{ description.details }}
                              </li>
                        </ul>

                        <div class="plan w-4/5" data-aos="fade-left"
                              data-aos-duration="500"
                              data-aos-easing="ease-in">
                              <img
                                    src="../assets/Jardin/jardin528.jpg"
                                    alt=""
                              />

                              <div>
                                    <router-link to="">Jardin</router-link>
                              </div>
                        </div>
                  </div>
            </div>

            <!----------------------Lien vers gallery photo ----------------------------->
            <!--<div class="descriptif__gallery">
                  <button>
                        <router-link
                              to="/descriptifs/gallerie"
                              class="bg-green-600 text-white font-bold p-2 rounded-lg hover:bg-green-700"
                        >
                              Gallerie photo
                        </router-link>
                  </button>
            </div>-->
      </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import jardin dataset
import { jardin_database } from "../database/jardin";
// import rez de chausse dataset
import { rezDeChausses, etages } from "../database/descriptif";
import { rezDeChausseDatabase } from "../database/rezdechausse";
// import etage dataset
//import { etages } from "../database/etage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "./main.css";
import "../../src/main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
      components: {
            Swiper,
            SwiperSlide,
      },

      setup() {
            const afficheChambreRdc = () => {
                  window.location.href =
                        "/descriptifs/gallerie#chambre-rez-de-chaussee";
            };

            const afficheCuisineRdc = () => {
                  window.location.href = "/descriptifs/gallerie#cuisine";
            };

            const afficheSdbRdc = () => {
                  window.location.href = "/descriptifs/gallerie#salle-de-bain";
            };

            const afficheSalonRdc = () => {
                  window.location.href = "/descriptifs/gallerie#salon";
            };

            const afficheSalleAMangerRdc = () => {
                  window.location.href = "/descriptifs/gallerie#salle-a-manger";
            };

            const afficheChambre1 = () => {
                  window.location.href = "/descriptifs/gallerie#chambre1";
            };

            const afficheChambre2 = () => {
                  window.location.href = "/descriptifs/gallerie#chambre2";
            };

            const jardinDescription = [
                  {
                        id: 1,
                        details: "3000 m²",
                  },

                  {
                        id: 2,
                        details: "SPA (Jaccuzzi)",
                  },

                  {
                        id: 3,
                        details: "Garage",
                  },

                  {
                        id: 4,
                        details: "Bassin (avec poissons rouges)",
                  },

                  {
                        id: 4,
                        details: "Jeux",
                  },

                  {
                        id: 6,
                        details: "Barbecue",
                  },
            ];

            const etageDescription = [
                  {
                        id: 1,
                        details: "1 chambre palière",
                  },

                  {
                        id: 2,
                        details: "(1 lit 1 personne)",
                  },

                  {
                        id: 3,
                        details: "Bureau",
                  },

                  {
                        id: 4,
                        details: "Placard",
                  },

                  {
                        id: 4,
                        details: "1 chambre (2 lits 1 personnes)",
                  },
            ];

            const rdcDescription = [
                  {
                        id: 1,
                        details: "Salle à manger",
                  },

                  {
                        id: 2,
                        details: "Salon",
                  },

                  {
                        id: 3,
                        details: "Cuisine",
                  },

                  {
                        id: 4,
                        details: "Buanderie",
                  },

                  {
                        id: 4,
                        details: "1 chambre (1 lit 2 personnes)",
                  },

                  {
                        id: 6,
                        details: "Salle d'eau",
                  },

                  {
                        id: 7,
                        details: "WC",
                  },
            ];

            return {
                  modules: [Pagination, Navigation],
                  rezDeChausses,
                  jardin_database,
                  rezDeChausseDatabase,
                  etages,
                  jardinDescription,
                  etageDescription,
                  rdcDescription,
                  afficheChambreRdc,
                  afficheCuisineRdc,
                  afficheSalonRdc,
                  afficheSdbRdc,
                  afficheSalleAMangerRdc,
                  afficheChambre1,
                  afficheChambre2,
            };
      },
};
</script>

<style lang="scss" scoped>
.mySwiper {
      height: 55vh;
      width: 100%;
}

.b {
      width: 100%;
      height: 100%;
      object-fit: contain;
}

.bubble-bottom {
      /* Modify size here: */
      --size: 10em;

      position: relative;
      width: var(--size);
      height: calc(var(--size) * 0.2);
      background: #fff;
      border-radius: 10px;
}

.bubble-bottom:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: calc(var(--size) * 0.13) solid transparent;
      border-top-color: #fff;
      border-bottom: 0;
      margin-left: calc(var(--size) * 0.13 * -1);
      margin-bottom: calc(var(--size) * 0.13 * -1);
}

.descriptif {
      width: 80%;
      margin: auto;

      @media screen and (max-width: 768px) {
            width: 90%;
      }

      @media screen and (max-width: 550px) {
            width: 95%;
            font-size: 0.7em;
      }

      &__paragraph {
            //background: #386641;
            background: #08a045;
            color: #fff;
            border-radius: 0.5em;
            padding: 1em;
            margin-bottom: 1em;
            font-size: 0.9em;

            @media screen and (max-width: 768px) {
                  //font-size: 0.7em;
            }
      }
      .title {
            background: #fff;
            width: 20%;
            margin: auto;
            border-radius: 50%;
            margin-bottom: 0.5em;
            margin-top: 1em;
            padding: 0.5em;
            //box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

            @media screen and (max-width: 550px) {
                  width: 50%;
                  font-weight: 600;
                  //font-size: 0.8em;
            }
      }

      /*.description{
          /*:hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            /*transform: scale3d(0.8em);
            transition: 0.5s ease-in-out;
          }
         }*/

      .plan {
            position: relative;

            &__rdc-chambre {
                  position: absolute;
                  width: 21.5%;
                  top: 22%;
                  left: 2%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__rdc-sdb {
                  position: absolute;
                  width: 16%;
                  top: 22%;
                  left: 20%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__rdc-cuisine {
                  position: absolute;
                  width: 8%;
                  top: 22%;
                  left: 36%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__rdc-salon {
                  position: absolute;
                  width: 25%;
                  top: 22%;
                  right: 32%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__rdc-sejour {
                  position: absolute;
                  width: 21%;
                  top: 22%;
                  right: 11%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__chambre1 {
                  position: absolute;
                  width: 45%;
                  top: 20%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            &__chambre2 {
                  position: absolute;
                  width: 55%;
                  top: 20%;
                  right: 11%;
                  opacity: 0;

                  &:hover {
                        transition: 0.5s ease-in;
                        opacity: 1;
                  }
            }

            //*button{

            /*&__chambre1 {
                        position: absolute;
                        width: 20%;
                        top: 1%;
                  }
            }*/
      }

      &__section {
            // width: 90%;

            @media screen and (max-width: 768px) {
                  display: block;
            }

            @media screen and (max-width: 550px) {
                  display: flex;
                  flex-direction: column-reverse;
                  font-weight: 500;

                  div {
                        width: 100%;
                        margin-bottom: 0.5em;
                        border-radius: 0.5em;
                  }
            }
      }

      &__slide {
            color: #000;
            margin-bottom: 1em;

            &--rezchausse {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 70%;
                  margin: auto;
                  background: #fff;

                  /*.taille{
                width: 70%;
                height: 50%;
                text-align: center;

                img{ 
                  width: 100%;
                  height: 350px;
                  object-fit: fill;
                  object-position: center;
                }
            }*/
            }

            &--text {
                  width: 30%;
            }
      }

      /*&__gallery {
            text-align: right;
            margin: 1em;

            button {
                  //background: rgba($color: #fff, $alpha: 1);
                  //color: #000;
                  //font-weight: 600;
                  padding: 0.5em;
                  border-radius: 0.5em;
            }
      }*/
}
</style>
