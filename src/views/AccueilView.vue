<template>
      <div class="accueil pt-20 pb-4">
            <div>
                  <!--La partie du slide-->
                  <swiper
                        :spaceBetween="30"
                        :centeredSlides="true"
                        :autoplay="{
                              delay: 3500,
                              disableOnInteraction: false,
                        }"
                        :pagination="{
                              clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="monSwipe mb-4 container"
                  >
                        <swiper-slide
                              class="monSwipe__capture"
                              v-for="accueil in accueils"
                              :key="accueil.id"
                        >
                              <img :src="accueil.img" alt="" />
                        </swiper-slide>
                  </swiper>
            </div>

            <!--La partie de Bienvenue-->
            <div class="accueil__description bg-green-700 bg-opacity-90">
                  <h1 class="font-medium">
                        Bienvenue à Hauville dans la chaumière du gîte du
                        Cormier.
                  </h1>
                  <p>
                        Cécile et Gérard vous accueillent au cœur de l’arrière
                        pays normand. <br />
                        Dans les boucles de la Seine. <br />
                        A 7 min des autoroutes A13 et A28. <br />
                        A 25 min du centre de Rouen (76).
                  </p>
            </div>

            <br />

            <!--La partie vidéo -->
            <div class="accueil__video">
                  <video
                        src="../assets/Vidéo/video_presentation_cormier.mp4"
                        type="video/mp4"
                        controls
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  ></video>
            </div>

            <br />

            <!---------------Gallerie des 4 photos ---------------------------------------->
            <div
                  class="accueil__gallery mb-6"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
            >
                  <div class="accueil__gallery--items" @click="Cliquer">
                        <img
                              src="../../public/pictures/descriptif/jardin/jeux_enfants.jpg"
                              alt=""
                        />
                        <div>
                              <h2>
                                    Pour occuper les enfants

                                    <br />

                                    <font-awesome-icon
                                          icon="fa-solid fa-magnifying-glass-plus"
                                          class="plus"
                                    />
                              </h2>
                        </div>

                        <div class="accueil__gallery--text text-left">
                              Pour se dépenser, <br>
                              Pour s'amuser, <br>
                              Pour sauter, <br>
                              Pour crier, <br>
                              Pour jouer ...
                        </div>
                  </div>

                  <div class="accueil__gallery--items" @click="Cliquer">
                        <img
                              src="../../public/pictures/descriptif/jardin/jaccuzzi.jpg"
                              alt=""
                        />
                        <div>
                              <h2>
                                    Pour profiter des étoiles
                                    <br />

                                    <font-awesome-icon
                                          icon="fa-solid fa-magnifying-glass-plus"
                                          class="plus"
                                    />
                              </h2>
                        </div>

                        <div class="accueil__gallery--text">
                              Au coucher du soleil, <br>
                               Où après diner pour
                              contempler la voie lactée, <br>
                               Les petites bulles du
                              Jaccuzzi à 38 dégrés vous feront tout oublier
                        </div>
                  </div>

                  <div class="accueil__gallery--items" @click="Cliquer">
                        <img
                              src="../assets/RezDeChaussee/rdc_chaumiere3.jpg"
                              alt=""
                        />
                        <div>
                              <h2 class="title">
                                    Pour profiter de l'hiver

                                    <font-awesome-icon
                                          icon="fa-solid fa-magnifying-glass-plus"
                                          class="plus"
                                    />
                              </h2>
                        </div>

                        <div class="accueil__gallery--text text-left">
                              La cheminée au foyer ouvert, <br>
                               Le coeur de la
                              chaumière au 18ème siècle. <br />

                              Le feu s'invite à l'apéritif, <br>
                              Les ombres et les
                              crépitements captent l'attention des petits et des
                              grands.
                        </div>
                  </div>

                  <div class="accueil__gallery--items" @click="Cliquer">
                        <img
                              src="../assets/Cormier/cormier_ping_pong.jpg"
                              alt="Terrain de Ping Pong"
                        />

                        <div>
                              <h2>
                                    Pour s'amuser en famille

                                    <font-awesome-icon
                                          icon="fa-solid fa-magnifying-glass-plus"
                                          class="plus"
                                    />
                              </h2>
                        </div>

                        <div class="accueil__gallery--text">
                              Pour le tournoi du grand Chelem, <br />
                              Qui perd gagne ...
                              <br />
                              Gagne le droit de débarasser la table.
                        </div>
                  </div>
            </div>

            <div class="accueil__popup">
                  <span @click="fermer">&times;</span>

                  <div
                        class="accueil__popup--main flex justify-around w-4/5 m-auto pt-12"
                  >
                        <div class="w-4/5 transition-all">
                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                                    alt=""
                              />
                        </div>

                        <div class="accueil__popup--paragraph">Paragraphe</div>
                  </div>
            </div>
      </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { accueils } from "../database/accueil";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

//import './style.css';

//import "./main.css";
import "../../src/main.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
      components: {
            Swiper,
            SwiperSlide,
      },

      setup() {
            // Cette fonction permet d'agrandir l'image en cliquant sur son div parent

            const Cliquer = () => {
                  const items = document.querySelectorAll(
                        ".accueil__gallery--items"
                  );

                  items.forEach((image) => {
                        image.onclick = (e) => {
                              const source =
                                    e.currentTarget.querySelector("img").src;
                              document.querySelector(
                                    ".accueil__popup"
                              ).style.display = "block";
                              document.querySelector(
                                    ".accueil__popup img"
                              ).src = source;

                              // Pour récupérer le paragraphe de l'image
                              const myText = e.currentTarget.querySelector(
                                    "div.accueil__gallery--text"
                              ).innerHTML;

                              // Pour affecter le paragraphe de l'image dans la classe accueil__popup--paragraph
                              document.querySelector(
                                    "div.accueil__popup--paragraph"
                              ).innerHTML = myText;
                        };
                  });
            };

            // Cette fonction permet de fermer l'image qui sera affiché

            const fermer = () => {
                  document.querySelector(".accueil__popup span").onclick =
                        () => {
                              document.querySelector(
                                    ".accueil__popup"
                              ).style.display = "none";
                        };
            };

            return {
                  fermer,
                  Cliquer,
                  accueils,
                  modules: [Autoplay, Pagination, Navigation],
            };
      },
};
</script>

<style lang="scss" scoped>
.accueil {

      .monSwipe {
            width: 70%;
            height: 65vh;
            margin-bottom: 1.5em;

            &__capture {
                  img {
                        width: 100%;
                        margin: auto;
                        max-width: 1380px;
                        min-width: 800px;
                        height: 100%;
                        object-fit: contain;
                  }
            }
      }

      &__description {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            color: #fff;

            h1 {
                  font-size: 2em;

                  @media screen and (max-width: 550px) {
                        font-size: 1em;
                  }
            }

            p {
                  @media screen and (max-width: 550px) {
                        font-size: 0.8em;
                  }
            }
      }

      &__video {
            width: 60%;
            height: auto;
            margin: auto;
            margin-bottom: 2em;
            object-fit: cover;

            video {
                  width: 100%;
                  height: 100%;
            }
      }

      /*&__details {
            margin-top: 1em;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            background: #fff;

            &--capacite {
                  width: 40%;
                  margin: auto;
                  align-items: center;
                  justify-content: center;
                  border-radius: 0.5em;
                  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                  background: #0f4c5c;
                  color: #fff;
            }
      }*/

      &__gallery {
            width: 85%;
            margin: auto;
            max-height: 95%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            &--text {
                  display: none;
            }

            &--items {
                  padding: 0.5em;
                  max-height: 100%;
                  position: relative;

                  @media screen and (max-width: 550px) {
                  }

                  img {
                        border-radius: 0.5em;
                        width: 300px;
                        height: 200px;

                        /*@media screen and (max-width: 550px){
                        width: 150%;
                    }*/
                  }

                  div {
                        position: absolute;
                        cursor: pointer;
                        top: 6px;
                        width: 95%;
                        height: 94%;
                        opacity: 0;
                        transition: all 0.5s ease-in-out;

                        &:hover {
                              opacity: 1;
                              //
                              h2 {
                                    transform: translateY(00%);
                                    transition: 0.5s;
                                    text-align: left;
                              }
                        }
                        //
                        h2 {
                              font-size: 1.5em;
                              color: #fff;
                              height: 100%;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              transform: translateY(100%);
                              border-radius: 0.5em;
                              background: rgba(0, 0, 0, 0.5);
                              font-family: "Great Vibes", cursive;
                              font-size: 2rem;
                              text-align: left;

                              .plus {
                                    font-size: 1.5em;
                                    display: block;
                                    margin: 0 1em;

                                    &:hover {
                                          font-size: 1.7em;
                                          margin: 0 0.5em;

                                          .title{
                                                text-align: left;
                                          }
                                    }
                              }
                        }
                  }
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
            // backdrop-filter: blur(30px);
            backdrop-filter: contrast(40%) brightness(90%) blur(10px);

            &--main {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
            }

            span {
                  position: absolute;
                  top: 0;
                  right: 10px;
                  font-size: 100px;
                  font-weight: bolder;
                  color: #fff;
                  cursor: pointer;
                  z-index: 100000;
            }

            img {
                  object-fit: cover;
                  display: flex;
                  justify-content: center;
                  align-items: center;
            }

            &--paragraph {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: rgba(255, 255, 255, 0.8);
                  border-radius: 0.5rem;
                  font-family: "Great Vibes", cursive;
                  font-size: 2rem;
                  text-align: left;
                  padding-left: 1rem;
            }
      }

}
</style>
