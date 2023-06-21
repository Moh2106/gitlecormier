<template>
      <div class="pt-16 pb-16 tarif">
            <!-- Insertion des saisons, dates et prix à partir de tarifs de database -->

            <!--------- Tarifs vacances-->
            <div>
                  <h2 class="tarif__title" data-aos="flip-right">
                        Tarifs vacances (Pour une semaine)
                  </h2>

                  <div class="pb-4 cards">
                        <div
                              v-for="tarif in tarifs_vacances"
                              :key="tarif.id"
                              class="tarif__card"
                        >
                              <div
                                    class="bg-white m-4 rounded-lg tarif__card--solo"
                                    data-aos="zoom-in"
                              >
                                    <img
                                          :src="tarif.photo"
                                          :alt="tarif.saison"
                                    />
                                    <div class="tarif__card--image">
                                          <h1
                                                v-text="tarif.prix"
                                                class="prix"
                                          ></h1>
                                    </div>

                                    <h1
                                          v-text="tarif.saison"
                                          class="font-semibold text-lg"
                                    ></h1>
                                    <p v-text="tarif.date" class="text-lg"></p>
                                    <p
                                          v-text="tarif.prix"
                                          class="text-2xl font-semibold"
                                    ></p>
                              </div>
                        </div>
                  </div>
            </div>

            <!--------- Tarifs basses saison -->
            <div>
                  <h2 class="tarif__title" data-aos="flip-right">
                        Tarifs basse saison
                  </h2>

                  <div class="tarif__basse">
                        <div class="pb-4 w-1/3">
                              <div
                                    v-for="tarif in tarifs_basse_saison"
                                    :key="tarif.id"
                              >
                                    <div
                                          class="bg-white m-4 rounded-lg tarif__card--solo"
                                          data-aos="zoom-in"
                                    >
                                          <img
                                                :src="tarif.photo"
                                                :alt="tarif.saison"
                                          />
                                          <div class="tarif__card--image">
                                                <h1
                                                      v-text="tarif.prix"
                                                      class="prix"
                                                ></h1>
                                          </div>

                                          <h1
                                                v-text="tarif.saison"
                                                class="font-semibold text-lg"
                                          ></h1>
                                          <p
                                                v-text="tarif.date"
                                                class="text-lg"
                                          ></p>
                                          <!----<p
                                                v-text="tarif.prix"
                                                class="text-2xl font-semibold"
                                          ></p>-->
                                    </div>
                              </div>
                        </div>

                        <div class="flex justify-between w-2/3">
                              <div class="basse_saison">
                                    <h3>La semaine</h3>
                                    <p>330 €</p>
                              </div>

                              <div class="basse_saison">
                                    <h3>Le week-end (2 nuits)</h3>
                                    <p>180 €</p>
                              </div>

                              <div class="basse_saison">
                                    <h3>Le mid-week (5 nuits)</h3>
                                    <p>210 €</p>
                              </div>
                        </div>
                  </div>
            </div>

            <!--------- A votre arrivée  --------->
            <div class="tarif__confort">
                  <div class="tarif__confort--elements" data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out">
                        <h2>A votre arrivée</h2>
                        <p>
                              Une caution de
                              <span class="tarif__price">300€</span> vous sera
                              demandée lors de votre arrivée puis, restituée à
                              votre départ si les écrans plats sont toujours là
                              &#128512;.
                        </p>

                        <p>
                              Attention le chauffage est en plus, compter
                              environ
                              <span class="tarif__price">10€</span> par jour en
                              plein hiver.
                        </p>
                  </div>

                  <div
                        class="tarif__confort--elements"
                        data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                  >
                        <h2>Pour votre confort</h2>
                        <p>Par semaine :</p>
                        <ul>
                              <li>
                                    Préparation d'un lit 2 personnes :
                                    <span class="tarif__price">8€</span>
                              </li>
                              <li>
                                    Préparation d'un lit 1 personne :
                                    <span class="tarif__price">6€</span>,
                              </li>
                              <li>
                                    Mise à disposition des serviettes de bain :
                                    <span class="tarif__price">6€</span> par
                                    personne
                              </li>
                              <li>
                                    forfait ménage :
                                    <span class="tarif__price">40€</span>.
                              </li>
                              <li>A préciser à la réservation.</li>
                        </ul>

                        <p>
                              Vos animaux de compagnie sont les bienvenus, et
                              <span class="font-semibold"
                                    >chez nous c'est surtout sans surcoût</span
                              >
                        </p>

                        <p class="reservation">
                              Alors n'attendez plus, les réservations
                              s'effectuent sur le site de gîte de France.

                              <span class="">
                                    Cliquez
                                    <a
                                          href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html"
                                    >
                                          <img
                                                src="../assets/Liens/logo_gite_eure_de_france.jpg"
                                                alt=""
                                          />
                                    </a>
                                    pour réserver.
                              </span>
                        </p>
                  </div>
            </div>
      </div>
</template>

<script>
import { tarifs_vacances, tarifs_basse_saison } from "../database/tarifs";
export default {
      setup() {
            return {
                  tarifs_vacances,
                  tarifs_basse_saison,
            };
      },
};
</script>

<style lang="scss" scoped>
.tarif {
      width: 95%;
      margin: auto;
      .cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 0.5em;
      }

      &__basse {
            display: flex;
            justify-content: space-around;
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

      &__confort {
            display: flex;
            justify-content: space-around;
            width: 95%;

            &--elements {
                  width: 50%;
                  margin: 0.5em 1em;
                  background: #fff;
                  border-radius: 0.5em;
                  padding: 1em;

                  h2 {
                        background: #08a045;
                        color: #fff;
                        width: 50%;
                        margin: auto;
                        border-radius: 0.3em;
                        padding: 0.1em;
                        font-weight: 600;
                  }

                  /*.reservation{
                        width: 100%;
                        background: #08863b;
                  }*/

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

                  .prix {
                        display: block;
                        animation: tada; /* referring directly to the animation's @keyframe declaration */
                        animation-duration: 2s; /* don't forget to set a duration! */
                  }
            }

            &--image {
                  position: absolute;
                  top: 0em;
                  transform: translate(10em, 8em);

                  .prix {
                        position: relative;
                        background: #08a045;
                        color: #fff;
                        padding: 1em;
                        border-radius: 0.5em;
                        display: none;
                  }
            }
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
