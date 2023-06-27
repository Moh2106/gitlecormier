<template>
      <div class="pt-16 pb-16 tarif">
            <div class="flex">
                  <!---------- Armoire de déroulement   ------>
                  <div class="tarif__part_one">
                        <div id="tarif_vacance_plus" class="tarif_vacance_plus">
                              <font-awesome-icon
                                    icon="circle-plus"
                                    class="plus"
                                    v-on:mouseenter="afficheTarifVacance"
                              />
                        </div>

                        <div
                              id="tarif_basse_saison_plus"
                              class="tarif_basse_saison_plus"
                        >
                              <font-awesome-icon
                                    icon="circle-plus"
                                    class="plus"
                                    v-on:mouseenter="afficheTarifBasseSaison"
                              />
                        </div>

                        <div id="tarif_arrive_plus" class="tarif_arrive_plus">
                              <font-awesome-icon
                                    icon="circle-plus"
                                    class="plus"
                                    v-on:mouseenter="afficheAVotreArrive"
                              />
                        </div>

                        <div id="tarif_confort_plus" class="tarif_confort_plus">
                              <font-awesome-icon
                                    icon="circle-plus"
                                    class="plus"
                                    v-on:mouseenter="affichePourVotreConfort"
                              />
                        </div>

                        <div id="tarif_reservation_plus">
                              <font-awesome-icon
                                    icon="circle-plus"
                                    class="plus"
                                    v-on:mouseenter="afficheReservation"
                              />
                        </div>
                  </div>

                  <div>
                        <h2 class="bg-white">{{ position }}</h2>

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
                                                class="bg-white rounded-lg"
                                                data-aos="zoom-in"
                                                v-if="tarif.position < position"
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
                                                <p
                                                      v-text="tarif.date"
                                                      class="text-lg"
                                                ></p>
                                                <p
                                                      v-text="tarif.prix"
                                                      class="text-2xl font-semibold"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!--------- Tarifs vacances-->

                        <div class="bg-white titre" id="tarif_vacance_titre">
                              <h2>Tarifs vacances (Pour une semaine)</h2>
                        </div>

                        <div class="tarif__vacances" id="tarif__vacances">
                              <div class="pb-4 cards">
                                    <div
                                          v-for="tarif in tarifs_vacances"
                                          :key="tarif.id"
                                          class="tarif__card"
                                    >
                                          <div
                                                class="bg-white rounded-lg"
                                                data-aos="zoom-in"
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
                                                <p
                                                      v-text="tarif.date"
                                                      class="text-lg"
                                                ></p>
                                                <p
                                                      v-text="tarif.prix"
                                                      class="text-2xl font-semibold"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!--------- Tarifs basses saison -->
                        <div class="mb-8">
                              <div
                                    class="bg-white titre"
                                    id="tarif_basse_saison_titre"
                              >
                                    <h2 class="titre">Tarifs basse saison</h2>
                              </div>

                              <div
                                    class="pb-4 tarif__basse"
                                    id="tarif_basse_saison"
                              >
                                    <div
                                          v-for="tarif in tarifs_basse_saison"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg tarif__card--solo"
                                                data-aos="zoom-in"
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[30vh]"
                                                >
                                                      <img
                                                            :src="tarif.photo"
                                                            :alt="tarif.periode"
                                                            class="transition duration-300 ease-in-out hover:scale-125"
                                                      />
                                                </div>

                                                <h1
                                                      v-text="tarif.periode"
                                                      class="font-semibold text-lg"
                                                ></h1>

                                                <p
                                                      v-text="tarif.prix"
                                                      class="text-2xl font-semibold"
                                                ></p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <!--------- A votre arrivée  --------->

                        <div>
                              <div
                                    class="bg-white titre"
                                    id="tarif_arrive_titre"
                              >
                                    <h2>A votre arrivée</h2>
                              </div>

                              <div class="elementCard" id="tarif__arrive">
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

                        <!------ Pour votre confort ------->
                        <div>
                              <div
                                    class="bg-white titre"
                                    id="tarif_confort_titre"
                              >
                                    <h2>Pour votre confort</h2>
                              </div>

                              <div
                                    class="tarif__confort elementCard"
                                    id="confort"
                              >
                                    <h2>Pour votre confort</h2>
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

                        <div>
                              <div
                                    class="bg-white titre"
                                    id="tarif_reservation_titre"
                              >
                                    <h2>Réservation</h2>
                              </div>
                              >

                              <div
                                    class="tarif__reservation elementCard"
                                    id="reservation"
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
                                                            class="blinking"
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
            var count = 0;
            var bird;
            const intervalId = ref(null);

            onMounted(() => {
                  bird = document.getElementById("myBird");
            });

            const interval = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition = bird.getBoundingClientRect();

                        position.value = elementPosition.x;

                        //console.log(elementPosition.left);

                        count++;
                        //console.log(count);

                        if (count === 4) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                              console.log("je suis la");
                        }
                  }, 500);
            };

            //const bird = document.getElementById("myBird");

            var compteur = 0;
            const handleSouris = () => {
                  if (compteur < 1) {
                        interval(), tarifVacance();
                        ++compteur;
                  }

            };

            /*watch(position, (newVal) => {
                  const elementPosition = bird.getBoundingClientRect();
                  position.value = elementPosition.x;
                  //console.log("watch");
                  console.log(`watch + ${newVal}`);
            });*/

            const tarifVacance = () => {
                  const iconTouch = document.getElementById(
                        "tarif__vacance--awesome"
                  );

                  const myBird = document.getElementById("myBird");

                  const tarifCard = document.getElementById(
                        "tarif__vacance--card"
                  );

                  myBird.style.display = "block";
                  tarifCard.style.visibility = "visible";
                  iconTouch.style.opacity = 0;
            };

            // hidden bird
            /*const hideBird = () => {
                  const myBird = document.getElementById("myBird");

                  myBird.style.display = "none";

                  console.log("here");
            };*/

            // Tarifs vacances
            const afficheTarifVacance = () => {
                  const tarifVacance =
                        document.getElementById("tarif__vacances");

                  const changePlus =
                        document.getElementById("tarif_vacance_plus");

                  const titreTarifVacance = document.getElementById(
                        "tarif_vacance_titre"
                  );

                  //tarifVacance.classList.add("applyActive");

                  tarifVacance.style.opacity = 1;
                  tarifVacance.style.transition = "1s ease-in";
                  tarifVacance.style.left = 0;

                  // Changer le plus en text
                  changePlus.innerHTML =
                        "<h3 id='newElement'>Tarifs vacances <br> (Pour une semaine)</h3>";

                  const newElement = document.getElementById("newElement");
                  newElement.style.backgroundColor = "#fff";
                  newElement.style.borderRadius = "0.5em";
                  newElement.style.padding = "0.5em";

                  changePlus.classList.add("applyActive");

                  titreTarifVacance.style.display = "none";
            };

            const afficheTarifBasseSaison = () => {
                  const tarifBasseSaison =
                        document.getElementById("tarif_basse_saison");

                  const changePlus = document.getElementById(
                        "tarif_basse_saison_plus"
                  );

                  const titreTarifBasseSaison = document.getElementById(
                        "tarif_basse_saison_titre"
                  );

                  //tarifVacance.classList.add("applyActive");

                  tarifBasseSaison.style.opacity = 1;
                  tarifBasseSaison.style.transition = "1s ease-in";
                  tarifBasseSaison.style.left = 0;

                  // Changer le plus en text
                  changePlus.innerHTML =
                        "<h3 id='newElement_1'>Tarifs basse saison</h3>";

                  const newElement = document.getElementById("newElement_1");
                  newElement.style.backgroundColor = "#fff";
                  newElement.style.borderRadius = "0.5em";
                  newElement.style.padding = "0.5em";

                  //changePlus.style.marginTop = "2.5em";

                  changePlus.classList.add("applyActive");

                  titreTarifBasseSaison.style.display = "none";
            };

            const afficheAVotreArrive = () => {
                  const titreArrive =
                        document.getElementById("tarif_arrive_titre");

                  const tarifArrive = document.getElementById("tarif__arrive");

                  const changePlus =
                        document.getElementById("tarif_arrive_plus");

                  changePlus.innerHTML =
                        "<h3 id='newElement_2'>A votre arrivée</h3>";

                  const newElement = document.getElementById("newElement_2");
                  newElement.style.backgroundColor = "#fff";
                  newElement.style.borderRadius = "0.5em";
                  newElement.style.padding = "0.5em";

                  changePlus.classList.add("applyActive");

                  tarifArrive.style.left = 0;
                  tarifArrive.style.transition = "1s ease-in";

                  titreArrive.style.display = "none";
            };

            // Pour votre confort
            const affichePourVotreConfort = () => {
                  const confort = document.getElementById("confort");

                  const changePlus =
                        document.getElementById("tarif_confort_plus");

                  const titreConfort = document.getElementById(
                        "tarif_confort_titre"
                  );

                  confort.style.opacity = 1;
                  confort.style.transition = "1s ease-in";
                  confort.style.left = 0;

                  // Changer le plus en text
                  changePlus.innerHTML =
                        "<h3 id='newElement_3'>Pour votre confort</h3>";

                  const newElement = document.getElementById("newElement_3");
                  newElement.style.backgroundColor = "#fff";
                  newElement.style.borderRadius = "0.5em";
                  newElement.style.padding = "0.5em";

                  //changePlus.style.marginTop = "1em";

                  changePlus.classList.add("applyActive");

                  titreConfort.style.display = "none";
            };

            const afficheReservation = () => {
                  const reservation = document.getElementById("reservation");

                  const changePlus = document.getElementById(
                        "tarif_reservation_plus"
                  );

                  const titreReservation = document.getElementById(
                        "tarif_reservation_titre"
                  );

                  reservation.style.opacity = 1;
                  reservation.style.transition = "1s ease-in";
                  reservation.style.left = 0;

                  // Changer le plus en text
                  changePlus.innerHTML =
                        "<h3 id='newElement_4'>Réservation</h3>";

                  const newElement = document.getElementById("newElement_4");
                  newElement.style.backgroundColor = "#fff";
                  newElement.style.borderRadius = "0.5em";
                  newElement.style.padding = "0.5em";

                  changePlus.style.marginTop = "4em";

                  changePlus.classList.add("applyActive");

                  titreReservation.style.display = "none";
            };

            return {
                  tarifs_vacances,
                  tarifs_basse_saison,
                  position,

                  afficheTarifVacance,
                  afficheTarifBasseSaison,
                  afficheAVotreArrive,
                  affichePourVotreConfort,
                  afficheReservation,

                  tarifVacance,

                  handleSouris,
            };
      },
};
</script>

<style lang="scss" scoped>
.applyActive {
      //opacity: block;
      //background: #fff;
      border-radius: 0.5em;
      opacity: 0.7;
      //margin-bottom: 1em;
}

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
            opacity: 0;
      }
}

.tarif {
      width: 95%;
      margin: auto;
      position: relative;
      .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.5em;
      }

      &__vacance {
            display: flex;

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
                  visibility: hidden;
                  .elements {
                        //display: none;
                        width: 30%;
                        margin-right: 1em;
                        visibility: visible;
                  }
            }

            &--awesome {
                  position: absolute;
                  z-index: 100;
                  //background: #fff;
                  width: 85%;
                  height: 50vh;
                  text-align: left;
                  border: 3px solid red;

                  .font {
                        font-size: 6em;
                        color: #08863b;
                        animation: blink 2s infinite;
                  }
            }
      }

      &__vacances {
            opacity: 0;
            position: relative;
            left: -150%;
      }

      &__part_one {
            background: url("../assets/Tarifs/tarif_part_one_bg.jpg");
            width: 25%;
            height: auto;
            margin-right: 1em;
            //padding-top: 10em;

            .tarif_vacance_plus {
                  height: 25%;
            }

            .tarif_basse_saison_plus {
                  height: 24%;
                  //transform: translateY(1em);
            }

            .tarif_arrive_plus {
                  height: 11%;
                  //background: red;

                  /*h3{
                        transform: translateY(-1em);
                  }*/
            }

            .tarif_confort_plus {
                  height: 25%;
            }

            /*div {
                  height: 24%;
            }*/
            .plus {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #fff;
                  font-size: 2.5em;
                  margin-left: 2em;
                  cursor: pointer;

                  &:hover {
                        font-size: 3em;
                  }
            }
      }

      &__basse {
            //display: flex;
            //justify-content: space-around;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.5em;

            opacity: 0;
            position: relative;
            left: -150%;
      }

      .titre {
            border-radius: 0.5em;

            h2 {
                  padding: 0.5em;
            }
      }

      .basse_saison {
            width: 33%;
            margin: 1em;
            background: #08a045;
            height: 9em;
            border-radius: 1em;

            h3 {
                  background: #08a045;
                  color: #fff;
                  padding: 1em;
                  font-size: 1.1em;
            }

            p {
                  background: #fff;
                  font-weight: bold;
                  font-size: 1.5em;
                  padding: 0.5em;
            }
      }

      .elementCard {
            margin: 0.5em 0em;
            background: #fff;
            border-radius: 0.5em;
            padding: 1em;
            text-align: left;
            position: relative;
            left: -150%;
            margin-bottom: 2em;
      }

      &__confort {
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

      &__reservation {
            background: #fff;

            img {
                  display: inline;
                  width: 20%;
            }
      }

      &__title {
            background: #fff;
            width: 30%;
            margin: auto;
            border-radius: 50%;
            margin-bottom: 0.5em;
            margin-top: 1em;
            padding: 0.5em;
      }

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

            /*&--image {
                  position: absolute;
                  top: 0em;
                  transform: translate(10em, 8em);

                  /*.prix {
                        position: relative;
                        background: #08a045;
                        color: #fff;
                        padding: 1em;
                        border-radius: 0.5em;
                        display: none;
                  }
            }*/
      }

      &__button_reservation {
            background: #08a045;
            padding: 0.1em 0.3em;
            color: #fff;
            border-radius: 0.3em;

            &:hover {
                  background: #08863b;
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
