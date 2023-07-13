<template>
      <div class="pt-16 pb-16 tarif" id="tarif">
            <div class="flex">
                  <!---------- Armoire de déroulement   ------>
                  <div class="tarif__part_one">
                        <!--  Tarifs vacances -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[40vh] mb-[3.1rem]"
                        >
                              <h2>
                                    Tarifs vacances <br />
                                    (Pour une semaine)
                              </h2>
                        </div>

                        <!--  Tarifs basse saison -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[38vh] mb-[3.3rem]"
                        >
                              <h2>Tarifs basse saison</h2>
                        </div>

                        <!--  A votre arrivée -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[15vh] mb-8"
                        >
                              <h2>A votre arrivée</h2>
                        </div>

                        <!--  Pour votre confort -->
                        <div
                              class="bg-white opacity-90 rounded-lg h-[32vh] mb-8"
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
                        <!-- Insertion des saisons, dates et prix à partir de tarifs de database -->
                        <!----<h2 class="bg-white">{{ position }}</h2>-->

                        <!------------------------------------>
                        <div class="tarif__vac" v-on:mouseenter="handleVacance">
                              <div
                                    class="tarif__vac--bird"
                                    id="bird"
                                    :class="{ animation: animeTarifVac }"
                              >
                                    <img
                                          src="../assets/Tarifs/rouge_gorge_vol.png"
                                          alt=""
                                    />
                              </div>

                              <div
                                    class="tarif__vac--awesome"
                                    id="vac--awesome"
                              >
                                    <img
                                          src="../assets/Tarifs/rougegorge.png"
                                          alt=""
                                          class="move"
                                    />

                                    <p>Arrivée samedi</p>

                                    <!----<font-awesome-icon
                                          icon="fa-solid fa-hand-point-right"
                                          class="font"
                                          id="tarif__vacance--awesome"
                                    />-->
                              </div>

                              <div class="tarif__vac--cards" id="vac--cards">
                                    <div
                                          class="elements"
                                          v-for="tarif in tarifs_vacances"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg"
                                                v-if="tarif.position < position"
                                                data-aos="flip-up"
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[25vh]"
                                                >
                                                      <img
                                                            :src="tarif.photo"
                                                            :alt="tarif.saison"
                                                      />
                                                </div>

                                                <h2
                                                      v-text="tarif.saison"
                                                      class="font-medium"
                                                ></h2>
                                                <p v-html="tarif.date"></p>
                                                <p
                                                      v-text="tarif.prix"
                                                      class="font-semibold text-2xl"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!--  Waves -->
                        <div class="tarif__waves" id="tarif__waves">
                              <div v-if="activeWaveVacance">
                                    <div
                                          class="custom-shape-divider-bottom-1688724135"
                                    >
                                          <svg
                                                data-name="Layer 1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 1200 120"
                                                preserveAspectRatio="none"
                                          >
                                                <path
                                                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                                      class="shape-fill"
                                                ></path>
                                          </svg>
                                    </div>

                                    <p>Arrivée samedi</p>
                              </div>
                        </div>

                        <!------------ Basse --------------------------->
                        <div class="tarif__basse">
                              <div
                                    class="tarif__basse--ecureuil"
                                    id="ecureuil"
                                    :class="{ animation: animeBasseSaison }"
                              >
                                    <img
                                          src="../assets/Tarifs/grive_musicienne_vol.png"
                                          alt="grive musicienne"
                                    />
                              </div>

                              <div
                                    class="tarif__basse--awesome"
                                    id="basse--awesome"
                              >
                                    <p>Arrivée libre</p>

                                    <img
                                          src="../assets/Tarifs/grive_musicienne.png"
                                          alt="grive musicienne"
                                          class="move"
                                          id="tarif__basse--awesome"
                                    />

                                    <!----<font-awesome-icon
                                          icon="fa-solid fa-hand-point-right"
                                          class="font"
                                          id="tarif__basse--awesome"
                                    />-->
                              </div>

                              <div class="tarif__basse--cards" id="basse--card">
                                    <div
                                          class="elements"
                                          v-for="tarif in tarifs_basse_saison"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg"
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

                                                <h2
                                                      v-text="tarif.periode"
                                                      class="font-medium"
                                                ></h2>

                                                <p
                                                      v-text="tarif.prix"
                                                      class="font-semibold text-2xl"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!--  Waves -->
                        <div class="tarif__waves" id="waves__basse">
                              <div v-if="activeWaveBasse">
                                    <div
                                          class="custom-shape-divider-bottom-1688724135"
                                    >
                                          <svg
                                                data-name="Layer 1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 1200 120"
                                                preserveAspectRatio="none"
                                          >
                                                <path
                                                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                                      class="shape-fill"
                                                ></path>
                                          </svg>
                                    </div>

                                    <p>Arrivée libre</p>
                              </div>
                        </div>

                        <!---- Tarif arrive ---->
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
                                          <img
                                                src="../assets/Tarifs/pigeon_ramier.gif"
                                                alt=""
                                                class="emojiArrive"
                                          />

                                          <!----<img src="../assets/Tarifs/pigeon-gif-download-free.gif" alt="" class="emojiArrive">-->

                                          <font-awesome-icon
                                                icon="fa-solid fa-question"
                                                class="icon"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__arrive--text"
                                    id="tarif__arrive--text"
                              >
                                    <div v-if="animeArrive">
                                          <p>
                                                <font-awesome-icon
                                                      icon="fa-solid fa-check"
                                                      class="mr-2"
                                                />
                                                Une caution de
                                                <span class="tarif__price"
                                                      >300€</span
                                                >
                                                vous sera demandée lors de votre
                                                arrivée puis, restituée à votre
                                                départ si les écrans plats sont
                                                toujours là &#128512;.
                                          </p>

                                          <p>
                                                <font-awesome-icon
                                                      icon="fa-solid fa-check"
                                                      class="mr-2"
                                                />
                                                Vos animaux de compagnie sont
                                                les bienvenus, et
                                                <span class="font-semibold"
                                                      >chez nous c'est sans
                                                      surcoût</span
                                                >
                                          </p>

                                          <p>
                                                <font-awesome-icon
                                                      icon="fa-solid fa-check"
                                                      class="mr-2"
                                                />
                                                Pour vos journées en
                                                télétravail, le gîte est équipé
                                                de la fibre internet très haut
                                                débit 120 Mo/s.
                                          </p>
                                    </div>
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
                                          <!----<font-awesome-icon
                                                icon="fa-regular fa-face-smile"
                                                class="iconConfort"
                                          />-->

                                          <!----<img
                                                src="../assets/Tarifs/emoji_confort_gift.gif"
                                                alt=""
                                                class="emojiConfort"
                                          />-->

                                          <img
                                                src="../assets/Tarifs/merle_1.png"
                                                alt=""
                                                class="emojiConfort move"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__confort--text"
                                    id="tarif__confort--text"
                              >
                                    <div v-if="animeConfort">
                                          <ul>
                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Préparation d'un lit 2
                                                      personnes :
                                                      <span class="tarif__price"
                                                            >8€</span
                                                      >
                                                </li>
                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Préparation d'un lit 1
                                                      personne :
                                                      <span class="tarif__price"
                                                            >6€</span
                                                      >,
                                                </li>
                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Mise à disposition des
                                                      serviettes de bain :
                                                      <span class="tarif__price"
                                                            >6€</span
                                                      >
                                                      par personne
                                                </li>
                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Forfait ménage :
                                                      <span class="tarif__price"
                                                            >40€</span
                                                      >.
                                                </li>
                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      A préciser à la
                                                      réservation (un simple
                                                      coup de fil à Cécile
                                                      suffira).
                                                </li>

                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Pour le bois
                                                      <span class="tarif__price"
                                                            >50€
                                                      </span>
                                                      le stère
                                                </li>

                                                <li>
                                                      <font-awesome-icon
                                                            icon="fa-solid fa-check"
                                                            class="mr-2"
                                                      />
                                                      Attention le chauffage est
                                                      en plus, et suivant votre
                                                      consommation. Comptez
                                                      environ
                                                      <span class="tarif__price"
                                                            >10€</span
                                                      >
                                                      par jour en plein hiver.
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>

                        <!------- Réservations ------>

                        <div class="tarif__reservation">
                              <!----<div
                                    class="tarif__reservation--awesome"
                                    id="tarif__reservation--awesome"
                              >
                                    <h2>
                                          <img
                                                src="../assets/Tarifs/emoji_reservation_gif.gif"
                                                alt=""
                                                class="emojiReservation"
                                          />
                                    </h2>
                              </div>-->

                              <div
                                    class="tarif__reservation--text"
                                    id="tarif__reservation--text"
                              >
                                    <div>
                                          <p class="">
                                                Alors n'attendez plus, les
                                                réservations s'effectuent sur le
                                                site de gîte de France.

                                                <br />

                                                <span class="">
                                                      Cliquez
                                                      <a
                                                            href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html"
                                                      >
                                                            <img
                                                                  src="../assets/Liens/logo_gite_de_france.jpg"
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
            const activeWaveVacance = ref(false);
            const activeWaveBasse = ref(false);

            // variable pour le tarif vacance
            var animeTarifVac = ref(true);
            var animeBasseSaison = ref(true);
            var animeConfort = ref(false);
            var animeArrive = ref(false);
            var animeReservation = ref(false);
            //var compte = 0;
            const intervalId = ref(null);

            onMounted(() => {
                  bird = document.getElementById("bird");

                  ecureuil = document.getElementById("ecureuil");
                  position.value = 0;
                  positionBasse.value = 0;

                  const awesomeVac = document.getElementById("vac--awesome");
                  awesomeVac.style.opacity = 1;

                  const awesomeBasse =
                        document.getElementById("basse--awesome");

                  awesomeBasse.style.opacity = 1;

                  const confortAwesome = document.getElementById(
                        "tarif__confort--awesome"
                  );

                  confortAwesome.style.display = "block"
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

                        ++count;

                        // Cette partie permet d'arreter la fonction setIntervall
                        console.log(position.value);
                        if (count === 3) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 650);
            };

            var cpt = 0;
            const handleVacance = () => {
                  if (cpt < 1) {
                        //animeTarifVac = true
                        interval(), tarifVac();
                        ++cpt;
                  }
            };

            /**
             * Cette fonction permet d'effectuer les
             * changements dans le DOM dès que je passe
             * la souris sur iconTouch (tarif__vacance--awesome)
             */

            const tarifVac = () => {
                  const awesome = document.getElementById("vac--awesome");

                  const bird = document.getElementById("bird");

                  const cards = document.getElementById("vac--cards");

                  cards.style.opacity = 1;
                  awesome.style.opacity = 0;
                  bird.style.display = "block";

                  const waneVacance = document.getElementById("tarif__waves");

                  activeWaveVacance.value = true;
                  waneVacance.style.left = 0;
                  waneVacance.style.transition = "2s ease-in";

                  setTimeout(() => {
                        handleBasseSaison();

                        activeWaveBasse.value = true;

                        const waneBasse =
                              document.getElementById("waves__basse");

                        waneBasse.style.left = 0;
                        waneBasse.style.transition = "2s ease-in";
                  }, 2000);
            };

            // basse saison
            var countBasseSaison = 0;
            const intervalBasseSaison = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition =
                              ecureuil.getBoundingClientRect();

                        // Pour récupérer la position en x du bird lors de l'animation
                        positionBasse.value = elementPosition.x;

                        //console.log(positionBasse.value);
                        countBasseSaison++;

                        // Cette partie permet d'arreter la fonction setIntervall
                        if (countBasseSaison === 5) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 800);
            };

            const tarifBasse = () => {
                  const iconTouch = document.getElementById("basse--awesome");

                  const ecureuil = document.getElementById("ecureuil");

                  const tarifCard = document.getElementById("basse--card");

                  iconTouch.style.opacity = 0;
                  ecureuil.style.display = "block";

                  tarifCard.style.opacity = 1;
            };

            var compte = 0;
            const handleBasseSaison = () => {
                  if (compte < 1) {
                        animeBasseSaison.value = true;
                        intervalBasseSaison(), tarifBasse();
                        ++compte;
                  }
            };

            // A votre arrive
            const afficheAVotreArrive = () => {
                  animeArrive.value = true;
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
                  animeConfort.value = true;

                  const confortAwesome = document.getElementById(
                        "tarif__confort--awesome"
                  );

                  const confortText = document.getElementById(
                        "tarif__confort--text"
                  );

                  confortAwesome.style.display = "none";
                  confortText.style.transition = "1s ease-in";
                  //confortText.style.opacity = 1;
                  confortText.style.left = 0;
            };

            // Réservation
            /*const afficheReservation = () => {
                  animeReservation.value = true;
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
            };*/

            return {
                  tarifs_vacances,
                  tarifs_basse_saison,
                  position,
                  positionBasse,

                  //animeTarifVacance,
                  animeBasseSaison,
                  animeConfort,
                  animeTarifVac,
                  animeArrive,
                  animeReservation,
                  activeWaveVacance,
                  activeWaveBasse,

                  afficheAVotreArrive,
                  affichePourVotreConfort,
                  //afficheReservation,

                  //tarifVacance,

                  handleBasseSaison,
                  //handleSouris,
                  handleVacance,
            };
      },
};
</script>

<style lang="scss" scoped>
@keyframes sparkle {
      0% {
            transform: translate(0, 0);
      }
      50% {
            transform: translate(30px, 50px);
      }

      /*75% {
            transform: translate(100px, 50px);
      }*/
      100% {
            transform: translate(0, 0);
      }
}

@keyframes moving {
      0% {
            //display: none;
            opacity: 1;
      }

      33% {
            transform: translateX(150%);
            //opacity: 1;
      }

      66% {
            transform: translateX(300%);
      }

      99% {
            transform: translateX(500%);
            opacity: 1;
      }

      100% {
            transform: translateX(550%);
            opacity: 0;
      }
}

.move {
      animation: 0.5s ease-in-out sparkle infinite;
}

.animation {
      animation: moving 4s linear;
}

/** For mobile devices **/
@media (max-width: 767px) {
      .custom-shape-divider-bottom-1688724135 svg {
            width: calc(100% + 1.3px);
            height: 31px;
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
            width: 25%;
            height: auto;
            margin-right: 3em;

            div {
                  background: #08a045;

                  h2 {
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: blanchedalmond;
                        //font-size: 2em;
                        font-weight: 550;
                        //font-family: "Great Vibes", cursive;
                  }
            }
      }

      &__second_part {
            width: 100%;
            //border: 5px solid #08863b;
      }

      &__vac {
            position: relative;
            height: 40vh;
            //margin-bottom: 1em;

            &--bird {
                  position: absolute;
                  left: -25%;
                  width: 25%;
                  display: none;
                  opacity: 0;
                  z-index: 1;
            }

            &--awesome {
                  display: flex;
                  position: absolute;
                  text-align: left;
                  color: #fff;
                  font-size: 6em;
                  opacity: 1;

                  img {
                        width: 25%;
                  }

                  p {
                        //font-size: 2em;
                        font-weight: 550;
                        font-family: "Great Vibes", cursive;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transform: translateY(0.8em);
                        //margin-top: 1em;
                  }
            }

            &--cards {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  //border: orange 3px solid;
                  opacity: 0;
                  //z-index: 1000;

                  .elements {
                        width: 27%;
                        margin-right: 1em;
                        transition: all 1s ease-in;
                        height: 100%;
                        //border: 2px solid rgb(15, 73, 246);

                        img {
                              transform: scale(200%) translateX(-1em);
                              border-radius: 0.5em;

                              &:hover {
                                    transition: 300ms ease-in-out;
                                    transform: scale(100%);
                              }
                        }
                  }
            }
      }

      &__waves {
            position: relative;
            left: -100%;
            height: 5vh;
            margin: 0.5em 0;

            p {
                  font-weight: 700;
                  font-family: "Great Vibes", cursive;
                  font-size: 2.5em;
                  transform: translate(-1em, -1.1em);
                  color: #fff;
                  text-shadow: 4px 4px 6px rgba(66, 90, 66, 1);
            }

            .custom-shape-divider-bottom-1688724135 {
                  width: 90%;
                  overflow: hidden;
                  line-height: 0;
                  transform: rotate(180deg);
            }

            .custom-shape-divider-bottom-1688724135 svg {
                  position: relative;
                  display: block;
                  width: calc(100% + 1.3px);
                  height: 30px;
                  font-weight: 900;
            }

            .custom-shape-divider-bottom-1688724135 .shape-fill {
                  fill: #45e262;
                  //#f7ef99  #9cfc97
            }
      }

      &__basse {
            position: relative;
            height: 38vh;
            //margin-bottom: 1em;
            //border: 2px solid orange;

            &--ecureuil {
                  position: absolute;
                  left: -25%;
                  width: 25%;
                  display: none;
                  opacity: 0;
                  z-index: 1;
            }

            &--awesome {
                  display: flex;
                  position: absolute;
                  text-align: left;

                  img {
                        width: 35%;
                  }

                  p {
                        font-weight: 550;
                        font-family: "Great Vibes", cursive;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        font-size: 6em;
                        transform: translate(1em, -0.6em);
                  }
            }

            &--cards {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  //border: orange 3px solid;
                  opacity: 0;

                  .elements {
                        width: 27%;
                        margin-right: 1em;
                        transition: all 1s ease-in;
                        height: 100%;
                        //border: 2px solid rgb(15, 73, 246);

                        img {
                              //object-fit: contain;
                              border-radius: 0.5em;
                              transform: scale(200%) translateY(2em);
                              border-radius: 0.5em;
                              object-fit: contain;

                              &:hover {
                                    transition: 300ms ease-in-out;
                                    transform: scale(100%);
                              }
                        }
                  }
            }
      }

      &__arrive {
            position: relative;
            height: 15vh;
            margin-bottom: 2rem;
            text-align: left;
            
            //padding: 0.5em 0;
            //border: 3px solid orange;

            &--awesome {
                  position: absolute;
                  //font-size: 5em;
                  //border: 3px solid red;
                  width: 100%;
                  height: 100%;

                  .emojiArrive {
                        display: inline;
                        width: 8%;
                        //height: 15vh;
                        margin-right: 0.3em;
                        margin-left: 0.5em;
                        //border: 2px solid rgb(15, 84, 105);
                  }

                  .icon {
                        margin-right: 0.3em;
                        color: #fff;
                        transform: translateY(-3em);
                        font-size: 1.2em;
                        font-weight: 900;
                  }
            }

            &--text {
                  opacity: 0;
                  background: #fff;
                  height: 15vh;
                  padding: 1em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;
            }
      }

      &__confort {
            position: relative;
            height: 32vh;
            //border-radius: 0.5em;
            //padding-left: 1em;
            text-align: left;
            margin-bottom: 2rem;

            &--awesome {
                  position: absolute;
                  font-size: 8em;
                  //border: 2px solid red;
                  width: 100%;
                  height: 100%;

                  .emojiConfort {
                        width: 25%;
                        height: 100%;
                        //border: 2px solid rgb(0, 89, 255);
                  }
            }

            &--text {
                  background: #fff;
                  //display: none;
                  //opacity: 0;
                  padding: 1em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;
                  transition: 3s ease-in;

                  p {
                        text-align: left;

                        img {
                              width: 30%;
                              display: inline;
                        }
                  }

                  ul {
                        text-align: left;
                  }
            }
      }

      &__reservation {
            position: relative;
            height: 20vh;
            text-align: left;

            /*&--awesome {
                  position: absolute;
                  font-size: 5em;
                  width: 100%;
                  height: 100%;

                  .emojiReservation {
                        width: 13%;
                        //border: 2px solid white;
                        margin-left: 0.5em;
                  }
            }*/

            &--text {
                  background: #fff;
                  //opacity: 0;
                  height: 100%;
                  padding: 1em;
                  border-radius: 0.5em;
                  //position: relative;
                  //left: -150%;

                  img {
                        display: inline;
                        width: 40%;

                        &:hover {
                              transform: scale(104%);
                              border: 3px solid #45e262;
                              border-radius: 0.5em;
                              margin: 0 1em;
                        }
                  }
            }
      }

      &__card {
            position: relative;

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
