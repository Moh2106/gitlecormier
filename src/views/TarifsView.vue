<template>
      <div class="pt-16 pb-16 tarif" id="tarif">
            <div class="flex">
                  <!---------- Armoire de déroulement   ------>
                  <div class="tarif__part_one">
                        <!--  Tarifs vacances -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[45vh] mb-4"
                        >
                              <h2>
                                    Tarifs vacances <br />
                                    (Pour une semaine)
                              </h2>
                        </div>

                        <!--  Tarifs basse saison -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[40vh] mb-4"
                        >
                              <h2>Tarifs basse saison</h2>
                        </div>

                        <!--  A votre arrivée -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[16vh] mb-4"
                        >
                              <h2>A votre arrivée</h2>
                        </div>

                        <!--  Pour votre confort -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[40vh] mb-4"
                        >
                              <h2>Pour votre confort</h2>
                        </div>

                        <!-- Réservation -->

                        <div
                              class="bg-white opacity-90 rounded-lg h-[20vh] mb-4"
                        >
                              <h2>Réservation</h2>
                        </div>
                  </div>

                  <div class="tarif__second_part">
                        <!--<h2 class="bg-white">{{ position }}</h2>-->

                        <!-- Insertion des saisons, dates et prix à partir de tarifs de database -->

                        <div class="tarif__vacance">
                              <div
                                    class="tarif__vacance--awesome"
                                    id="tarif__vacance--awesome"
                                    v-on:mouseenter="handleSouris"
                                    v-once
                              >
                                    <font-awesome-icon
                                          icon="fa-solid fa-hand-point-right"
                                          class="font"
                                    />
                              </div>

                              <div class="tarif__vacance--bird" id="myBird">
                                    <img
                                          src="../assets/Tarifs/bird.png"
                                          alt=""
                                    />
                              </div>

                              <div
                                    class="tarif__vacance--card"
                                    id="tarif__vacance--card"
                              >
                                    <div
                                          v-for="tarif in tarifs_vacances"
                                          :key="tarif.id"
                                          class="elements"
                                    >
                                          <div
                                                class="bg-white rounded-lg h-[45vh] mb-4"
                                                data-aos="flip-up"
                                                v-if="tarif.position < position"
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[30vh] ease-in-out hover:cursor-pointer"
                                                >
                                                      <img
                                                            :src="tarif.photo"
                                                            :alt="tarif.saison"
                                                            class="transition duration-300 ease-in-out hover:cursor-pointer hover:scale-150 image"
                                                      />
                                                </div>

                                                <h1
                                                      v-text="tarif.saison"
                                                      class="font-semibold text-lg"
                                                ></h1>
                                                <p v-html="tarif.date"></p>
                                                <p
                                                      v-text="tarif.prix"
                                                      class="text-2xl font-semibold"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!-- Tarifs basse saison -->
                        <div class="tarif__basse-saison">
                              <div
                                    class="tarif__basse-saison--awesome"
                                    id="tarif__basse-saison--awesome"
                                    v-on:mouseenter="handleBasseSaison"
                              >
                                    <font-awesome-icon
                                          icon="fa-solid fa-hand-point-right"
                                          class="font"
                                    />
                              </div>

                              <div
                                    class="tarif__basse-saison--ecureuil"
                                    id="ecureuil"
                              >
                                    <img
                                          src="../assets/Tarifs/ecureuil2.png"
                                          alt="ecureuil"
                                    />
                              </div>

                              <div
                                    class="tarif__basse-saison--card"
                                    id="tarif__basse-saison--card"
                              >
                                    <div
                                          v-for="tarif in tarifs_basse_saison"
                                          :key="tarif.id"
                                          class="elements"
                                    >
                                          <div
                                                class="bg-white rounded-lg h-[40vh] mb-4"
                                                data-aos="zoom-in-down"
                                                v-if="
                                                      tarif.position <
                                                      positionBasse
                                                "
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[30vh]"
                                                >
                                                      <img
                                                            :src="tarif.photo"
                                                            :alt="tarif.saison"
                                                            class="transition duration-300 ease-in-out hover:scale-125"
                                                      />
                                                </div>

                                                <h1
                                                      v-text="tarif.saison"
                                                      class="font-semibold text-lg"
                                                ></h1>
                                                <p v-html="tarif.periode"></p>
                                                <p
                                                      v-text="tarif.prix"
                                                      class="text-2xl font-semibold"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div
                              class="tarif__arrive"
                              id="tarif__arrive"
                              v-on:mouseenter="afficheAVotreArrive"
                        >
                              <div
                                    class="tarif__arrive--awesome"
                                    id="tarif__arrive--awesome"
                              >
                                    <h2>
                                          <font-awesome-icon
                                                icon="fa-solid fa-question"
                                                class="icon"
                                          /><font-awesome-icon
                                                icon="fa-solid fa-question"
                                                class="icon"
                                          /><font-awesome-icon
                                                icon="fa-solid fa-question"
                                                class="icon"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__arrive--text"
                                    id="tarif__arrive--text"
                              >
                                    <p>
                                          Une caution de
                                          <span class="tarif__price">300€</span>
                                          vous sera demandée lors de votre
                                          arrivée puis, restituée à votre départ
                                          si les écrans plats sont toujours là
                                          &#128512;.
                                    </p>

                                    <p>
                                          Attention le chauffage est en plus, et
                                          suivant votre consommation. Comptez
                                          environ
                                          <span class="tarif__price">10€</span>
                                          par jour en plein hiver.
                                    </p>
                              </div>
                        </div>

                        <!-----  Pour votre confort ------>
                        <div
                              class="tarif__confort"
                              v-on:mouseenter="affichePourVotreConfort"
                        >
                              <div
                                    class="tarif__confort--awesome"
                                    id="tarif__confort--awesome"
                              >
                                    <h2>
                                          <font-awesome-icon
                                                icon="fa-regular fa-face-smile"
                                                class="iconConfort"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__confort--text"
                                    id="tarif__confort--text"
                              >
                                    <p>Par semaine :</p>
                                    <ul>
                                          <li>
                                                Préparation d'un lit 2 personnes
                                                :
                                                <span class="tarif__price"
                                                      >8€</span
                                                >
                                          </li>
                                          <li>
                                                Préparation d'un lit 1 personne
                                                :
                                                <span class="tarif__price"
                                                      >6€</span
                                                >,
                                          </li>
                                          <li>
                                                Mise à disposition des
                                                serviettes de bain :
                                                <span class="tarif__price"
                                                      >6€</span
                                                >
                                                par personne
                                          </li>
                                          <li>
                                                forfait ménage :
                                                <span class="tarif__price"
                                                      >40€</span
                                                >.
                                          </li>
                                          <li>
                                                A préciser à la réservation (un
                                                simple coup de fil à Cécile
                                                suffira).
                                          </li>
                                    </ul>

                                    <br />

                                    <p>
                                          Vos animaux de compagnie sont les
                                          bienvenus, et
                                          <span class="font-semibold"
                                                >chez nous c'est sans
                                                surcoût</span
                                          >
                                    </p>

                                    <br />

                                    <p>
                                          Pour vos journées en télétravail, le
                                          gîte est équipé de la fibre internet
                                          très haut débit 120 Mo/s.
                                    </p>
                              </div>
                        </div>

                        <!------- Réservations ------>

                        <div
                              class="tarif__reservation"
                              v-on:mouseenter="afficheReservation"
                        >
                              <div
                                    class="tarif__reservation--awesome"
                                    id="tarif__reservation--awesome"
                              >
                                    <h2>
                                          <font-awesome-icon
                                                icon="fa-regular fa-calendar"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__reservation--text"
                                    id="tarif__reservation--text"
                              >
                                    <p class="">
                                          Alors n'attendez plus, les
                                          réservations s'effectuent sur le site
                                          de gîte de France.

                                          <br />

                                          <span class="">
                                                Cliquez
                                                <a
                                                      href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html"
                                                >
                                                      <img
                                                            src="../assets/Liens/logo_gite_eure_de_france.jpg"
                                                            alt=""
                                                            class=""
                                                      />
                                                </a>
                                                pour réserver.
                                          </span>
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { tarifs_vacances, tarifs_basse_saison } from "../database/tarifs";
export default {
      setup() {
            var position = ref(0);
            var positionBasse = ref(0);
            var count = 0;
            var bird;
            var ecureuil;
            //var compte = 0;
            const intervalId = ref(null);

            onMounted(() => {
                  bird = document.getElementById("myBird");
                  ecureuil = document.getElementById("ecureuil");
            });

            /**
             * Cette fonction permet de recupérer la
             * position de l'élément bird (oiseau)
             */
            const interval = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition = bird.getBoundingClientRect();

                        // Pour récupérer la position en x du bird lors de l'animation
                        position.value = elementPosition.x;

                        count++;

                        // Cette partie permet d'arreter la fonction setIntervall
                        if (count === 3) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 500);
            };

            var compteur = 0;
            const handleSouris = () => {
                  if (compteur < 1) {
                        interval(), tarifVacance();
                        ++compteur;
                  }
            };

            /**
             * Cette fonction permet d'effectuer les
             * changements dans le DOM dès que je passe
             * la souris sur iconTouch (tarif__vacance--awesome)
             */
            const tarifVacance = () => {
                  const iconTouch = document.getElementById(
                        "tarif__vacance--awesome"
                  );

                  const myBird = document.getElementById("myBird");

                  const tarifCard = document.getElementById(
                        "tarif__vacance--card"
                  );

                  iconTouch.style.opacity = 0;
                  myBird.style.display = "block";
                  //tarifCard.style.visibility = "visible";

                  tarifCard.style.opacity = 1;
            };

            /// basse saison
            var countBasseSaison = 0;
            const intervalBasseSaison = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition =
                              ecureuil.getBoundingClientRect();

                        // Pour récupérer la position en x du bird lors de l'animation
                        positionBasse.value = elementPosition.x;

                        countBasseSaison++;

                        // Cette partie permet d'arreter la fonction setIntervall
                        if (countBasseSaison === 3) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 500);
            };

            const tarifBasse = () => {
                  const iconTouch = document.getElementById(
                        "tarif__basse-saison--awesome"
                  );

                  const ecureuil = document.getElementById("ecureuil");

                  const tarifCard = document.getElementById(
                        "tarif__basse-saison--card"
                  );

                  iconTouch.style.opacity = 0;
                  ecureuil.style.display = "block";
                  //tarifCard.style.visibility = "visible";

                  tarifCard.style.opacity = 1;
            };

            var compte = 0;
            const handleBasseSaison = () => {
                  if (compte < 1) {
                        intervalBasseSaison(), tarifBasse();
                        ++compte;
                  }
            };

            // A votre arrive
            const afficheAVotreArrive = () => {
                  const arriveAwesome = document.getElementById(
                        "tarif__arrive--awesome"
                  );

                  const arriveText = document.getElementById(
                        "tarif__arrive--text"
                  );

                  arriveAwesome.style.display = "none";

                  arriveAwesome.scrollTop = arriveAwesome.scrollHeight;

                  arriveText.style.transition = "1s ease-in";

                  arriveText.style.opacity = 1;
                  arriveText.style.left = 0;
            };

            // Pour votre confort
            const affichePourVotreConfort = () => {
                  const confortAwesome = document.getElementById(
                        "tarif__confort--awesome"
                  );

                  const confortText = document.getElementById(
                        "tarif__confort--text"
                  );

                  confortAwesome.style.display = "none";
                  confortText.style.transition = "1s ease-in";
                  confortText.style.opacity = 1;
                  confortText.style.left = 0;
            };

            // Réservation
            const afficheReservation = () => {
                  const reservationAwesome = document.getElementById(
                        "tarif__reservation--awesome"
                  );

                  const reservationText = document.getElementById(
                        "tarif__reservation--text"
                  );

                  reservationAwesome.style.display = "none";

                  reservationText.style.transition = "1s ease-in";
                  reservationText.style.opacity = 1;
                  reservationText.style.left = 0;
            };

            return {
                  tarifs_vacances,
                  tarifs_basse_saison,
                  position,
                  positionBasse,

                  afficheAVotreArrive,
                  affichePourVotreConfort,
                  afficheReservation,

                  tarifVacance,

                  handleBasseSaison,
                  handleSouris,
            };
      },
};
</script>

<style lang="scss" scoped>
.blinking {
      animation: blink 3s infinite;
}

@keyframes blink {
      0% {
            opacity: 1;
      }
      50% {
            opacity: 0;
      }
      100% {
            opacity: 1;
      }
}

@keyframes moving {
      0% {
            //display: none;
      }

      33% {
            //position: relative;
            transform: translateX(150%);
            opacity: 1;
      }

      66% {
            // position: relative;
            transform: translateX(300%);
      }

      99% {
            //position: relative;
            transform: translateX(500%);
            opacity: 1;
            //display: none;
      }

      100% {
            transform: translateX(550%);
            opacity: 0;
      }
}

.tarif {
      width: 95%;
      margin: auto;
      //position: relative;
      .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.5em;
      }

      &__part_one {
            background: url("../assets/Tarifs/tarif_part_one_bg.jpg");
            width: 25%;
            //max-width: 25%;
            height: auto;
            margin-right: 3em;
            //padding-top: 10em;
      }

      &__second_part {
            width: 100%;
            //border: 5px solid #08863b;
      }

      &__vacance {
            //display: flex;
            position: relative;
            height: 45vh;
            margin-bottom: 1em;
            //border: 5px solid orange;

            &--bird {
                  //width: 15%;
                  position: absolute;
                  height: 25vh;
                  animation: moving 2s linear;
                  left: -5%;
                  z-index: 100;
                  display: none;
                  opacity: 0;
            }

            &--card {
                  display: flex;
                  opacity: 0;
                  //border: 2px solid orange;
                  //visibility: hidden;
                  .elements {
                        //display: none;
                        width: 30%;
                        margin-right: 1em;
                        //visibility: visible;

                        .image {
                              //border: 2px solid red;
                              //transform: scale(1.5em);

                              &:hover {
                                    transform: scale(1.5em);
                                    cursor: pointer;
                              }
                        }
                  }
            }

            &--awesome {
                  position: absolute;
                  z-index: 100;
                  //background: #fff;
                  width: 100%;
                  height: 45vh;
                  text-align: left;
                  //border: 10px solid red;

                  .font {
                        font-size: 6em;
                        color: #08863b;
                        animation: blink 3s infinite;
                  }
            }
      }

      &__basse-saison {
            position: relative;
            height: 40vh;
            margin-bottom: 1em;

            &--ecureuil {
                  width: 25%;
                  position: absolute;
                  height: 25vh;
                  animation: moving 2s linear;
                  left: -5%;
                  z-index: 100;
                  display: none;
                  opacity: 0;
            }

            &--awesome {
                  position: absolute;
                  z-index: 100;
                  height: 40vh;
                  width: 100%;
                  text-align: left;
                  //border: 3px solid red;

                  .font {
                        font-size: 6em;
                        color: #08863b;
                        animation: blink 3s infinite;
                  }
            }

            &--card {
                  display: flex;
                  opacity: 0;

                  .elements {
                        width: 30%;
                        margin-right: 1em;
                  }
            }
      }

      &__arrive {
            position: relative;
            height: 16vh;
            margin-bottom: 1em;
            text-align: left;
            //border: 3px solid orange;

            &--awesome {
                  position: absolute;
                  font-size: 5em;
                  //border: 3px solid red;
                  width: 100%;

                  .icon {
                        margin-right: 0.3em;
                        color: #fff;
                  }
            }

            &--text {
                  opacity: 0;
                  background: #fff;
                  height: 15vh;
                  padding: 0.5em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;
            }
      }

      &__confort {
            position: relative;
            height: 40vh;
            //border-radius: 0.5em;
            //padding-left: 1em;
            text-align: left;
            margin-bottom: 1em;

            &--awesome {
                  position: absolute;
                  font-size: 8em;
                  //border: 2px solid red;
                  width: 100%;
                  height: 100%;

                  .iconConfort {
                        color: #08a045;
                  }
            }

            &--text {
                  background: #fff;
                  //display: none;
                  opacity: 0;
                  padding: 1em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;

                  p {
                        text-align: left;

                        img {
                              width: 30%;
                              display: inline;
                        }
                  }

                  ul {
                        text-align: left;

                        li {
                              margin-left: 2em;
                        }
                  }
            }
      }

      &__reservation {
            position: relative;
            height: 20vh;
            text-align: left;

            &--awesome {
                  position: absolute;
                  font-size: 5em;
                  width: 100%;
                  height: 100%;
            }

            &--text {
                  background: #fff;
                  opacity: 0;
                  height: 100%;
                  padding: 1em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;

                  img {
                        display: inline;
                        width: 20%;
                  }
            }
      }

      /*&__title {
            background: #fff;
            width: 30%;
            margin: auto;
            border-radius: 50%;
            margin-bottom: 0.5em;
            margin-top: 1em;
            padding: 0.5em;
      }*/

      &__card {
            position: relative;

            /*&--solo{
                  img{
                        width: 110%;
                  }
            }*/

            &--solo,
            .paragraphe {
                  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                        rgba(0, 0, 0, 0.12) 0px -12px 30px,
                        rgba(0, 0, 0, 0.12) 0px 4px 6px,
                        rgba(0, 0, 0, 0.17) 0px 12px 13px,
                        rgba(0, 0, 0, 0.09) 0px -3px 5px;
                  transition: 0.25s linear;
            }

            &:hover {
                  cursor: pointer;

                  /*.prix {
                        display: block;
                  }*/
            }
      }

      /*&__button_reservation {
            background: #08a045;
            padding: 0.1em 0.3em;
            color: #fff;
            border-radius: 0.3em;

            &:hover {
                  background: #08863b;
            }
      }*/

      &__cliquer {
            border-radius: 50%;
      }

      &__price {
            font-weight: 600;
            font-size: 1.2em;
      }

      @media screen and (max-width: 550px) {
            padding-top: 3em;
      }

      @media screen and (max-width: 768px) {
            padding-top: 5em;
      }

      /*&__title {
            background: rgb(22 163 74);
            margin: auto;
            color: blanchedalmond;
            font-weight: 600;
      }*/

      @media screen and (max-width: 768px) {
            width: 100%;

            &__iframe {
                  width: 90%;
            }
      }

      @media screen and (max-width: 550px) {
            width: 100%;
            font-size: 0.8em;

            &__iframe {
                  width: 90%;
            }
      }
}
</style>
