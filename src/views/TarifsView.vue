<template>
      <div class="pt-16 pb-16 tarif" id="tarif">
            <div class="flex">
                  <!---------- Armoire de déroulement   ------>
                  <div class="tarif__part_one">
                        <!--  Tarifs vacances -->
                        <div
                              class="rounded-lg mb-[1em] tarif__part_one--vacance"
                        >
                              <h2>
                                    Tarifs vacances <br />
                                    (Pour une semaine)
                              </h2>
                        </div>

                        <!--  Tarifs basse saison -->
                        <div class="rounded-lg h-[39.9vh] mb-[1.5em]">
                              <h2>Tarifs basse saison</h2>
                        </div>

                        <!--  Pour votre confort -->
                        <div class="rounded-lg h-[31.7vh] mb-[1em]">
                              <h2>Pour votre confort</h2>
                        </div>

                        <!--  A votre arrivée -->
                        <div class="rounded-lg h-[15vh] mb-[1em]">
                              <h2>A votre arrivée</h2>
                        </div>

                        <!-- Réservation -->

                        <div class="rounded-lg h-[16vh] mb-[1em]">
                              <h2>Réservation</h2>
                        </div>
                  </div>

                  <div class="tarif__second_part">
                        <!-- Insertion des saisons, dates et prix à partir de tarifs de database -->
                        <!----<h2 class="bg-white">{{ position }}</h2>-->

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

                                    <div class="bubble">
                                          <p>Arrivée samedi</p>
                                    </div>
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
                                                      class="overflow-hidden bg-cover h-[27vh]"
                                                >
                                                      <img
                                                            :src="
                                                                  hoveredImageId ===
                                                                  tarif.id
                                                                        ? tarif.photo
                                                                        : tarif.photo2
                                                            "
                                                            v-on:mouseover="
                                                                  onMouseOver(
                                                                        tarif.id
                                                                  )
                                                            "
                                                            v-on:mouseout="
                                                                  onMouseOut
                                                            "
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

                        <div
                              class="tarif__basse"
                              v-on:mouseenter="handleVacance"
                        >
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
                                    <div class="bubble_basse">
                                          <p>Arrivée libre</p>
                                    </div>

                                    <img
                                          src="../assets/Tarifs/grive_musicienne.png"
                                          alt="grive musicienne"
                                          class="move"
                                          id="tarif__basse--awesome"
                                    />
                              </div>

                              <div class="tarif__basse--cards" id="basse--card">
                                    <div
                                          class="elements__basse"
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
                                                      class="overflow-hidden bg-cover h-[25vh] transition-all"
                                                >
                                                      <img
                                                            :src="
                                                                  hoveredImageId ===
                                                                  tarif.id
                                                                        ? tarif.photo
                                                                        : tarif.photo2
                                                            "
                                                            v-on:mouseover="
                                                                  onMouseOver(
                                                                        tarif.id
                                                                  )
                                                            "
                                                            v-on:mouseout="
                                                                  onMouseOut
                                                            "
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

                        <!-----  Pour votre confort ------>
                        <div
                              class="tarif__confort"
                              v-on:mouseenter="affichePourVotreConfort"
                        >
                              <div
                                    class="tarif__confort--awesome"
                                    id="tarif__confort--awesome"
                              >
                                    <div class="bubble_confort">
                                          <p>En option</p>
                                    </div>

                                    <img
                                          src="../assets/Tarifs/geai_des_bois.png"
                                          alt=""
                                    />
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

                        <!------- Réservations ------>

                        <div class="tarif__reservation">
                              <div
                                    class="tarif__reservation--text"
                                    id="tarif__reservation--text"
                              >
                                    <div>
                                          <p class="">
                                                Alors n'attendez plus, les
                                                réservations s'effectuent sur le
                                                site de Gîtes de France.

                                                <br />

                                                <span class="">
                                                      Cliquez
                                                      <a
                                                            href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html"
                                                            target="_blank"
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

                  <!--------- Cette partie est consacrée à la partie screen tablette ---------->
                  <div class="tarif__third_part">
                        <!---------- Titre Tarifs Vacances --------------------->
                        <div
                              class="tarif__third_part--title"
                              data-aos="zoom-in-down"
                        >
                              <h1>Tarifs vacances</h1>
                        </div>

                        <!---------- Tarifs Vacances --------------------->
                        <div
                              class="tarif__vac vac_tablette"
                              v-on:mouseenter="handleVacanceTablette"
                        >
                              <div
                                    class="tarif__vac--bird"
                                    id="bird--tablette"
                                    :class="{ animation: animeTarifVac }"
                              >
                                    <img
                                          src="../assets/Tarifs/rouge_gorge_vol.png"
                                          alt=""
                                    />
                              </div>

                              <div
                                    class="tarif__vac--awesome"
                                    id="vac--awesome--tablette"
                              >
                                    <img
                                          src="../assets/Tarifs/rougegorge.png"
                                          alt=""
                                          class="move"
                                    />

                                    <div class="bubble">
                                          <p>Arrivée samedi</p>
                                    </div>
                              </div>

                              <div
                                    class="tarif__vac--cards"
                                    id="vac--cards--tablette"
                              >
                                    <!----- Elements tablette ------->
                                    <div
                                          class="elements"
                                          v-for="tarif in tarifs_vacances"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg part-vac"
                                                v-if="
                                                      tarif.positionTablette <
                                                      position
                                                "
                                                data-aos="flip-up"
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[27vh] part-vac__image"
                                                >
                                                      <img
                                                            :src="
                                                                  hoveredImageId ===
                                                                  tarif.id
                                                                        ? tarif.photo
                                                                        : tarif.photo2
                                                            "
                                                            v-on:mouseover="
                                                                  onMouseOver(
                                                                        tarif.id
                                                                  )
                                                            "
                                                            v-on:mouseout="
                                                                  onMouseOut
                                                            "
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

                        <!---------- Tarifs Vacances mobile --------------------->
                        <div
                              class="tarif__mobile"
                              v-on:click="handleTarifVacMobile"
                        >
                              <div
                                    class="tarif__mobile--bird"
                                    v-if="vacMobileBird"
                              >
                                    <img
                                          src="../assets/Tarifs/rougegorge.png"
                                          alt=""
                                    />

                                    <div class="bubble_vac_mobile">
                                          <p>Arrivée samedi</p>
                                    </div>
                              </div>

                              <div
                                    class="tarif__mobile--cards"
                                    id="vac--cards--tablette"
                              >
                                    <!----- Elements mobile ------->
                                    <div
                                          class=""
                                          v-for="tarif in tarifs_vacances"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg max-md:h-[35vh] card"
                                                data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                v-if="vacMobile"
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover max-md:h-[20vh]"
                                                >
                                                      <img
                                                            :src="
                                                                  hoveredImageId ===
                                                                  tarif.id
                                                                        ? tarif.photo
                                                                        : tarif.photo2
                                                            "
                                                            v-on:mouseover="
                                                                  onMouseOver(
                                                                        tarif.id
                                                                  )
                                                            "
                                                            v-on:mouseout="
                                                                  onMouseOut
                                                            "
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

                        <div class="tarif__waves" id="tarif__waves--tablette">
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

                        <!---------- Titre Tarifs Basse Saison --------------------->
                        <div
                              class="tarif__third_part--title"
                              data-aos="zoom-in-down"
                        >
                              <h1>Tarifs Basse Saison</h1>
                        </div>

                        <!------------ Basse --------------------------->

                        <div
                              class="tarif__basse vac_tablette"
                              v-on:mouseenter="handleVacance"
                        >
                              <div
                                    class="tarif__basse--ecureuil"
                                    id="ecureuil--tablette"
                                    :class="{ animation: animeBasseSaison }"
                              >
                                    <img
                                          src="../assets/Tarifs/grive_musicienne_vol.png"
                                          alt="grive musicienne"
                                    />
                              </div>

                              <div
                                    class="tarif__basse--awesome"
                                    id="basse--awesome--tablette"
                              >
                                    <div class="bubble_basse">
                                          <p>Arrivée libre</p>
                                    </div>

                                    <img
                                          src="../assets/Tarifs/grive_musicienne.png"
                                          alt="grive musicienne"
                                          class="move"
                                          id="tarif__basse--awesome"
                                    />
                              </div>

                              <div
                                    class="tarif__basse--cards"
                                    id="basse--card--tablette"
                              >
                                    <div
                                          class="elements__basse"
                                          v-for="tarif in tarifs_basse_saison"
                                          :key="tarif.id"
                                    >
                                          <div
                                                class="bg-white rounded-lg part-basse"
                                                data-aos="zoom-in-down"
                                                v-if="
                                                      tarif.positionTablette <
                                                      positionBasse
                                                "
                                          >
                                                <div
                                                      class="overflow-hidden bg-cover h-[25vh] transition-all part-basse__image"
                                                >
                                                      <img
                                                            :src="
                                                                  hoveredImageId ===
                                                                  tarif.id
                                                                        ? tarif.photo
                                                                        : tarif.photo2
                                                            "
                                                            v-on:mouseover="
                                                                  onMouseOver(
                                                                        tarif.id
                                                                  )
                                                            "
                                                            v-on:mouseout="
                                                                  onMouseOut
                                                            "
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

                        <!------------ Basse mobile --------------------------->
                        <div
                              class="basse_mobile"
                              v-on:click="handleTarifBasseMobile"
                        >
                              <div>
                                    <div
                                          class="basse_mobile__bird"
                                          id="basse--awesome--tablette"
                                          v-if="basseMobileBird"
                                    >
                                          <div class="bubble_basse_mobile">
                                                <p>Arrivée libre</p>
                                          </div>

                                          <img
                                                src="../assets/Tarifs/grive_musicienne.png"
                                                alt="grive musicienne"
                                                id="tarif__basse--awesome"
                                          />
                                    </div>

                                    <div
                                          class="basse_mobile__card"
                                          id="basse--card--tablette"
                                          v-if="basseMobile"
                                    >
                                          <div
                                                class=""
                                                v-for="tarif in tarifs_basse_saison"
                                                :key="tarif.id"
                                          >
                                                <div
                                                      class="bg-white rounded-lg max-md:h-[35vh] max-md:mt-[1em]"
                                                      data-aos="fade-right"
                                                      data-aos-offset="300"
                                                      data-aos-easing="ease-in-sine"
                                                >
                                                      <div
                                                            class="overflow-hidden bg-cover h-[25vh] max-md:h-[25vh] transition-all"
                                                      >
                                                            <img
                                                                  :src="
                                                                        hoveredImageId ===
                                                                        tarif.id
                                                                              ? tarif.photo
                                                                              : tarif.photo2
                                                                  "
                                                                  v-on:mouseover="
                                                                        onMouseOver(
                                                                              tarif.id
                                                                        )
                                                                  "
                                                                  v-on:mouseout="
                                                                        onMouseOut
                                                                  "
                                                            />
                                                      </div>

                                                      <h2
                                                            v-text="
                                                                  tarif.periode
                                                            "
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
                        </div>

                        <!--  Waves -->
                        <div class="tarif__waves" id="waves__basse--tablette">
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

                        <!---------- Titre Pour votre confort --------------------->
                        <div
                              class="tarif__third_part--title"
                              data-aos="zoom-in-down"
                        >
                              <h1>Pour votre confort</h1>
                        </div>

                        <!--- Pour votre confort --->
                        <div
                              class="tarif__confort"
                              data-aos="fade-right"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-out"
                        >
                              <div
                                    class="tarif__confort--text"
                                    id="tarif__confort--text"
                              >
                                    <div>
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

                        <!---------- Titre A votre arrive --------------------->
                        <div
                              class="tarif__third_part--title"
                              data-aos="zoom-in-down"
                        >
                              <h1>A votre arrivée</h1>
                        </div>

                        <!-- A votre arrivée -->
                        <div class="tarif__arrive" id="tarif__arrive">
                              <div
                                    class="tarif__arrive--awesome"
                                    v-on:click="afficheAVotreArriveMobile"
                                    v-if="cacher_pigeon"
                              >
                                    <h2>
                                          <img
                                                src="../assets/Tarifs/pigeon_ramier.gif"
                                                alt=""
                                                class="emojiArrive"
                                          />

                                          <font-awesome-icon
                                                icon="fa-solid fa-question"
                                                class="icon"
                                          />
                                    </h2>
                              </div>

                              <div
                                    class="tarif__arrive--text"
                                    v-if="arrive_mobile"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in-out"
                              >
                                    <div>
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

                        <!---------- Titre Réservation --------------------->
                        <div
                              class="tarif__third_part--title"
                              data-aos="zoom-in-down"
                        >
                              <h1>Réservations</h1>
                        </div>

                        <!------- Réservations ------>

                        <div
                              class="tarif__reservation"
                              data-aos="fade-right"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-out"
                        >
                              <div
                                    class="tarif__reservation--text"
                                    id="tarif__reservation--text"
                              >
                                    <div>
                                          <p class="">
                                                Alors n'attendez plus, les
                                                réservations s'effectuent sur le
                                                site de Gîtes de France.

                                                <br />

                                                <span class="">
                                                      Cliquez
                                                      <a
                                                            href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html"
                                                            target="_blank"
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
            var birdTablette; // variable pour suivre la position de l'oiseau dans Tarifs Vacs dans la version tablette

            var ecureuil;

            var ecureuilTablette; // variable pour suivre la position de l'oiseau dans Tarifs Basse dans la version tablette
            const activeWaveVacance = ref(false);
            const activeWaveBasse = ref(false);
            var isHover = ref(false);
            var hoveredImageId = ref(null);

            // variable pour le tarif vacance
            var animeTarifVac = ref(true);
            var animeBasseSaison = ref(true);
            var animeConfort = ref(false);
            var animeArrive = ref(false);
            var animeReservation = ref(false);
            const intervalId = ref(null);
            var arrive_mobile = ref(false); // Pour afficher le texte de à votre arrivée lorsqu'on clique sur le pigeon
            var cacher_pigeon = ref(true); // pour cacher le pigeon lorsqu'on clique sur lui en mobile

            onMounted(() => {
                  bird = document.getElementById("bird");

                  ecureuil = document.getElementById("ecureuil");
                  position.value = 0;
                  positionBasse.value = 0;

                  birdTablette = document.getElementById("bird--tablette");

                  ecureuilTablette =
                        document.getElementById("ecureuil--tablette");

                  const awesomeVac = document.getElementById("vac--awesome");
                  awesomeVac.style.opacity = 1;

                  const awesomeBasse =
                        document.getElementById("basse--awesome");

                  awesomeBasse.style.opacity = 1;

                  const confortAwesome = document.getElementById(
                        "tarif__confort--awesome"
                  );

                  confortAwesome.style.display = "flex";
            });

            /**
             * Changement des photos en amenant la souris sur la photo
             */
            const onMouseOver = (imageId) => {
                  hoveredImageId.value = imageId;
            };

            /**
             * Retour au photo initiale
             */
            const onMouseOut = () => {
                  hoveredImageId.value = null;
            };

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
                        //console.log(position.value);
                        if (count === 3) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 600);
            };

            // Pour la version PC
            var cpt = 0;
            const handleVacance = () => {
                  if (cpt < 1) {
                        //animeTarifVac = true
                        interval(), tarifVac();
                        console.log("OK");
                        ++cpt;
                  }
            };

            // Pour la version Tablette
            const intervalTablette = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition =
                              birdTablette.getBoundingClientRect();

                        // Pour récupérer la position en x du bird lors de l'animation
                        position.value = elementPosition.x;

                        count++;

                        // Cette partie permet d'arreter la fonction setIntervall
                        //console.log(position.value);
                        if (count === 3) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 600);
            };

            // Pour la version Tablette
            var cptTablette = 0;
            const handleVacanceTablette = () => {
                  if (cptTablette < 1) {
                        //animeTarifVac = true
                        intervalTablette(), tarifVacTablette();
                        //console.log("OK");
                        ++cptTablette;
                  }
            };

            /**
             * Cette fonction permet d'effectuer les
             * changements dans le DOM dès que je passe
             * la souris sur iconTouch (tarif__vacance--awesome)
             */

            const tarifVac = () => {
                  const awesome = document.getElementById("vac--awesome");
                  console.log(awesome);

                  const bird = document.getElementById("bird");

                  const cards = document.getElementById("vac--cards");

                  cards.style.opacity = 1;
                  awesome.style.opacity = 0;
                  bird.style.display = "block";

                  const waneVacance = document.getElementById("tarif__waves");

                  activeWaveVacance.value = true;
                  waneVacance.style.left = "-7%";
                  waneVacance.style.transition = "2s ease-in";

                  setTimeout(() => {
                        handleBasseSaison();

                        activeWaveBasse.value = true;

                        const waneBasse =
                              document.getElementById("waves__basse");

                        waneBasse.style.left = "-7%";
                        waneBasse.style.transition = "2s ease-in";
                  }, 2000);

                  affichePourVotreConfort();
            };

            // Tarifs Vac pour la version tablette
            const tarifVacTablette = () => {
                  const awesome = document.getElementById(
                        "vac--awesome--tablette"
                  );

                  const bird = document.getElementById("bird--tablette");

                  const cards = document.getElementById("vac--cards--tablette");

                  cards.style.opacity = 1;
                  awesome.style.opacity = 0;
                  bird.style.display = "block";

                  const waneVacance = document.getElementById(
                        "tarif__waves--tablette"
                  );

                  activeWaveVacance.value = true;
                  waneVacance.style.left = "-5%";
                  waneVacance.style.transition = "2s ease-in";

                  setTimeout(() => {
                        handleBasseSaisonTablette();

                        activeWaveBasse.value = true;

                        const waneBasse = document.getElementById(
                              "waves__basse--tablette"
                        );

                        waneBasse.style.left = "-5%";
                        waneBasse.style.transition = "2s ease-in";
                  }, 2000);

                  affichePourVotreConfort();
            };

            // Fonction pour activer le Tarifs Vac pour la version mobile
            const vacMobile = ref(false);
            const vacMobileBird = ref(true);
            const handleTarifVacMobile = () => {
                  vacMobile.value = true;
                  vacMobileBird.value = false;
            };

            // Fonction pour activer le Tarifs Vac pour la version mobile
            const basseMobile = ref(false);
            const basseMobileBird = ref(true);
            const handleTarifBasseMobile = () => {
                  basseMobile.value = true;
                  basseMobileBird.value = false;
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

            // Pour la version tablette
            const tarifBasseTablette = () => {
                  const iconTouch = document.getElementById(
                        "basse--awesome--tablette"
                  );

                  const ecureuil =
                        document.getElementById("ecureuil--tablette");

                  const tarifCard = document.getElementById(
                        "basse--card--tablette"
                  );

                  iconTouch.style.opacity = 0;
                  ecureuil.style.display = "block";

                  tarifCard.style.opacity = 1;
            };

            // basse saison Tablette
            var countBasseSaisonTablette = 0;
            const intervalBasseSaisonTablette = () => {
                  intervalId.value = setInterval(() => {
                        // Pour récupérer la position de l'élement
                        const elementPosition =
                              ecureuilTablette.getBoundingClientRect();

                        // Pour récupérer la position en x du bird lors de l'animation
                        positionBasse.value = elementPosition.x;

                        //console.log(positionBasse.value);
                        countBasseSaisonTablette++;

                        // Cette partie permet d'arreter la fonction setIntervall
                        if (countBasseSaisonTablette === 5) {
                              clearInterval(intervalId.value);
                              intervalId.value = null;
                        }
                  }, 800);
            };

            var compteTablette = 0;
            const handleBasseSaisonTablette = () => {
                  if (compteTablette < 1) {
                        animeBasseSaison.value = true;
                        intervalBasseSaisonTablette(), tarifBasseTablette();
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
                  confortText.style.left = 0;
            };

            const afficheAVotreArriveMobile = () => {
                  arrive_mobile.value = true;
                  cacher_pigeon.value = false;
            };

            return {
                  tarifs_vacances,
                  tarifs_basse_saison,
                  position,
                  positionBasse,

                  isHover,
                  hoveredImageId,
                  onMouseOver,
                  onMouseOut,

                  animeBasseSaison,
                  animeConfort,
                  animeTarifVac,
                  animeArrive,
                  animeReservation,
                  activeWaveVacance,
                  activeWaveBasse,
                  vacMobile,
                  vacMobileBird,
                  basseMobile,
                  basseMobileBird,
                  arrive_mobile,
                  cacher_pigeon,

                  afficheAVotreArrive,
                  affichePourVotreConfort,
                  handleBasseSaison,
                  handleVacance,
                  handleVacanceTablette,
                  handleTarifVacMobile,
                  handleTarifBasseMobile,
                  afficheAVotreArriveMobile,
            };
      },
};
</script>

<style lang="scss" scoped>
/*.mar {
      margin-right: 2em;
}*/

@keyframes moving {
      0% {
            opacity: 1;
      }

      33% {
            transform: translateX(150%);
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

      @media screen and (max-width: 769px) {
            margin-top: 2em;
      }

      @media screen and (max-width: 550px) {
            margin-top: 1em;
      }

      &__part_one {
            width: 25%;
            height: auto;
            margin-right: 3em;

            @media screen and (max-width: 769px) {
                  display: none;
            }

            &--vacance {
                  height: 47.5vh;

                  @media screen and (max-width: 1300px) {
                        height: 48vh;
                  }
            }

            div {
                  background: #08a045;

                  h2 {
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: blanchedalmond;
                        font-weight: 550;
                  }
            }
      }

      &__second_part {
            width: 100%;

            @media screen and (max-width: 769px) {
                  display: none;
            }
      }

      .vac_tablette {
            @media screen and (max-width: 550px) {
                  display: none;
            }
      }

      &__vac {
            position: relative;
            height: 42vh;
            margin-bottom: 2em;
            //border: 2px solid red;

            @media screen and (max-width: 769px) {
                  margin-top: 1em;
                  height: 30vh;
            }

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
                  margin-top: 2em;
                  opacity: 1;

                  img {
                        width: 30%;
                        cursor: zoom-in;
                  }

                  .bubble {
                        position: relative;
                        background: rgba(8, 160, 69, 0.8);
                        color: #ffffff;
                        font-family: Arial;
                        font-size: 6em;
                        line-height: 120px;
                        text-align: center;
                        width: 50%;
                        height: 120px;
                        border-radius: 10px;
                        padding: 0px;
                        transform: translate(0.2em, 0.5em);
                        margin: 0 0.2em;

                        @media screen and (max-width: 769px) {
                              font-size: 4em;
                              transform: translate(0.4em, 0.3em);
                        }

                        &::after {
                              content: "";
                              position: absolute;
                              display: block;
                              width: 0;
                              z-index: 1;
                              border-style: solid;
                              border-width: 0 92px 40px 0;
                              border-color: transparent rgba(8, 160, 69, 0.8)
                                    transparent transparent;
                              top: 35%;
                              left: -92px;
                              margin-top: -20px;

                              @media screen and (max-width: 769px) {
                                    left: -91px;
                              }
                        }

                        p {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              font-weight: 550;
                              font-family: "Great Vibes", cursive;
                        }
                  }
            }

            &--cards {
                  //display: flex;
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  grid-gap: 2em;
                  width: 100%;
                  height: 100%;
                  opacity: 0;

                  @media screen and (max-width: 769px) {
                        grid-gap: 0.5em;
                  }

                  .elements {
                        //width: 35%;
                        //margin-right: 2.5em;
                        transition: all 1s ease-in;
                        height: 100%;

                        @media screen and (max-width: 550px) {
                              display: none;
                        }

                        img {
                              border-radius: 0.5em;
                              display: flex;
                              justify-content: center;
                              align-items: center;

                              &:hover {
                                    transition: 300ms ease-in-out;
                                    transform: scale(101%);
                              }
                        }
                  }
            }
      }

      .part-vac {
            @media screen and (max-width: 769px) {
                  height: 30.5vh;
            }

            &__image {
                  @media screen and (max-width: 769px) {
                        height: 15vh;
                  }
            }
      }

      .part-basse {
            @media screen and (max-width: 769px) {
                  height: 25vh;
            }

            &__image {
                  @media screen and (max-width: 769px) {
                        height: 15vh;
                  }
            }
      }

      &__mobile {
            display: none;

            @media screen and (max-width: 550px) {
                  display: block;
            }

            &--bird {
                  //background: #fff;
                  display: flex;
                  margin: 4em 0;

                  img {
                        width: 50%;
                  }
            }

            &--cards {
                  //display: none;

                  .card {
                        width: 80%;
                        margin: auto;
                        margin-top: 1em;
                        margin-bottom: 1em;
                  }
            }

            .bubble_vac_mobile {
                  position: relative;
                  background: rgba(8, 160, 69, 0.8);
                  color: #ffffff;
                  font-family: Arial;
                  font-size: 6em;
                  line-height: 120px;
                  text-align: center;
                  width: 50%;
                  height: 100px;
                  border-radius: 10px;
                  padding: 0px;
                  transform: translate(0.2em, 0.2em);
                  margin: 0 0.2em;

                  @media screen and (max-width: 550px) {
                        font-size: 2em;
                        transform: translate(0.4em, 0.9em);
                  }

                  &::after {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 0;
                        z-index: 1;
                        border-style: solid;
                        border-width: 0 60px 40px 0;
                        border-color: transparent rgba(8, 160, 69, 0.8)
                              transparent transparent;
                        top: 35%;
                        left: -92px;
                        margin-top: -20px;

                        @media screen and (max-width: 550px) {
                              left: -60px;
                        }
                  }

                  p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 550;
                        font-family: "Great Vibes", cursive;
                        transform: translateY(-0.4em);
                  }
            }
      }

      .basse_mobile {
            display: none;

            @media screen and (max-width: 550px) {
                  display: block;
            }

            &__bird {
                  display: flex;
                  margin: 4em 0;

                  img {
                        width: 50%;
                        transform: translateY(5em);
                  }
            }

            &__card {
                  width: 80%;
                  margin: auto;
            }

            .bubble_basse_mobile {
                  position: relative;
                  background: rgba(8, 160, 69, 0.8);
                  color: #ffffff;
                  font-family: Arial;
                  font-size: 2em;
                  line-height: 100px;
                  text-align: center;
                  width: 50%;
                  height: 100px;
                  border-radius: 10px;
                  padding: 0px;

                  /*@media screen and (max-width: 550px) {
                              font-size: 2em;
                        }*/

                  &::after {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 0;
                        z-index: 1;
                        border-style: solid;
                        border-width: 40px 0 0 60px;
                        border-color: transparent transparent transparent
                              rgba(8, 160, 69, 0.8);
                        top: 70%;
                        right: -92px;
                        margin-top: -20px;

                        @media screen and (max-width: 769px) {
                              right: -90px;
                        }

                        @media screen and (max-width: 550px) {
                              right: -59.5px;
                        }
                  }

                  p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 550;
                        font-family: "Great Vibes", cursive;
                  }
            }
      }

      &__waves {
            position: relative;
            left: -100%;
            top: -2.5%;
            height: 5vh;
            margin: 0.5em 0;
            width: 103%;

            @media screen and (max-width: 769px) {
                  left: -150%;
                  top: -0.5%;
            }

            p {
                  font-weight: 700;
                  font-family: "Great Vibes", cursive;
                  font-size: 2.5em;
                  transform: translate(0.5em, -1.1em);
                  color: #fff;
                  text-shadow: 4px 4px 6px rgba(66, 90, 66, 1);
            }

            .custom-shape-divider-bottom-1688724135 {
                  width: 104.8%;
                  height: 100%;
                  overflow: hidden;
                  line-height: 0;
                  transform: rotate(180deg);
            }

            .custom-shape-divider-bottom-1688724135 svg {
                  position: relative;
                  display: block;
                  width: calc(100% + 1.3px);
                  height: 35px;
                  font-weight: 900;
            }

            .custom-shape-divider-bottom-1688724135 .shape-fill {
                  fill: #08a045;
            }
      }

      &__basse {
            position: relative;
            height: 34vh;
            transform: translateY(-1.6em);
            margin-top: 1em;
            //border: 2px solid red;

            @media screen and (max-width: 769px) {
                  height: 28vh;
                  transform: translateY(0em);
            }

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

                  .bubble_basse {
                        position: relative;
                        background: rgba(8, 160, 69, 0.8);
                        color: #ffffff;
                        font-family: Arial;
                        font-size: 6em;
                        line-height: 120px;
                        text-align: center;
                        width: 50%;
                        height: 120px;
                        border-radius: 10px;
                        padding: 0px;

                        @media screen and (max-width: 769px) {
                              font-size: 5em;
                        }

                        &::after {
                              content: "";
                              position: absolute;
                              display: block;
                              width: 0;
                              z-index: 1;
                              border-style: solid;
                              border-width: 40px 0 0 92px;
                              border-color: transparent transparent transparent
                                    rgba(8, 160, 69, 0.8);
                              top: 70%;
                              right: -92px;
                              margin-top: -20px;

                              @media screen and (max-width: 769px) {
                                    right: -90px;
                              }
                        }

                        p {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              font-weight: 550;
                              font-family: "Great Vibes", cursive;
                        }
                  }

                  img {
                        width: 35%;
                        transform: translate(-2.5em, 5.5em);
                  }
            }

            &--cards {
                  //display: flex;
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-gap: 1em;
                  width: 100%;
                  height: 100%;
                  opacity: 0;

                  @media screen and (max-width: 769px) {
                        grid-gap: 0.5em;
                  }

                  .elements__basse {
                        //width: 25%;
                        //margin-right: 1em;
                        transition: all 1s ease-in;
                        height: 100%;

                        img {
                              border-radius: 0.1em;
                              object-fit: cover;
                              transition: 300ms ease-in-out;
                              display: flex;
                              justify-content: center;
                              align-items: center;

                              &:hover {
                                    transition: 300ms ease-in-out;
                                    transform: scale(101%);
                              }
                        }
                  }
            }
      }

      &__arrive {
            position: relative;
            height: 15vh;
            margin-bottom: 1em;
            margin-top: 0.5em;
            text-align: left;

            @media screen and (max-width: 769px) {
                  margin-top: 0.5em;
                  height: auto;
            }

            /*@media screen and (max-width: 550px){
                  height: 25vh;
                  border: 5px solid red;
            }*/

            &--awesome {
                  position: absolute;
                  width: 100%;
                  height: 100%;

                  @media screen and (max-width: 769px){
                        position: relative;
                        margin-top: 2em;
                  }

                  @media screen and (max-width: 550px) {
                        margin-top: 1em;
                        position: relative;
                  }

                  .emojiArrive {
                        display: inline;
                        width: 8%;
                        margin-right: 0.3em;
                        margin-left: 0.5em;

                        @media screen and (max-width: 769px){
                              width: 15%;
                        }

                        @media screen and (max-width: 550px) {
                              width: 40%;
                        }
                  }

                  .icon {
                        margin-right: 0.3em;
                        color: #fff;
                        transform: translateY(-3em);
                        font-size: 1.2em;
                        font-weight: 900;

                        @media screen and (max-width: 769px){
                              transform: translateY(-4em);
                        }

                        @media screen and (max-width: 550px) {
                              transform: translateY(-5em);
                        }
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

                  @media screen and (max-width: 769px) {
                        //position: relative;
                        left: 0;
                        opacity: 1;
                        height: auto;
                  }
            }
      }

      &__confort {
            position: relative;
            height: 31vh;
            text-align: left;
            transform: translateY(-1em);

            @media screen and (max-width: 769px) {
                  transform: translateY(0em);
                  margin: 0.5em 0;
                  height: auto;
            }

            &--awesome {
                  position: absolute;
                  width: 100%;
                  height: 100%;

                  img {
                        transform: translate(0.7em, 0.2em);
                  }

                  .bubble_confort {
                        position: relative;
                        background: rgba(8, 160, 69, 0.8);
                        color: #ffffff;
                        font-family: Arial;
                        font-size: 20px;
                        line-height: 120px;
                        text-align: center;
                        width: 50%;
                        height: 120px;
                        border-radius: 10px;
                        padding: 0px;
                        transform: translate(0, 2em);

                        &::after {
                              content: "";
                              position: absolute;
                              display: block;
                              width: 0;
                              z-index: 1;
                              border-style: solid;
                              border-width: 40px 92px 0 0;
                              border-color: rgba(8, 160, 69, 0.8) transparent
                                    transparent transparent;
                              top: 37%;
                              right: -92px;
                              margin-top: -20px;
                        }

                        p {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              font-weight: 550;
                              font-family: "Great Vibes", cursive;
                              font-size: 5em;
                        }
                  }
            }

            &--text {
                  background: #fff;
                  padding: 1em;
                  border-radius: 0.5em;
                  position: relative;
                  left: -150%;
                  transition: 3s ease-in;

                  @media screen and (max-width: 769px) {
                        left: 0;
                  }

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
            height: 16vh;
            text-align: left;

            @media screen and (max-width: 769px) {
                  margin: 0.5em 0;
                  height: auto;
            }

            &--text {
                  background: #fff;
                  height: 100%;
                  padding: 1em;
                  border-radius: 0.5em;

                  img {
                        display: inline;
                        width: 40%;

                        @media screen and (max-width: 769px) {
                              width: 60%;
                              border: 3px solid #45e262;
                              border-radius: 0.5em;
                        }

                        @media screen and (max-width: 550px) {
                              width: 70%;
                              border: 2px solid #45e262;
                        }

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
            }
      }

      &__cliquer {
            border-radius: 50%;
      }

      &__price {
            font-weight: 600;
            font-size: 1.2em;

      }

      &__third_part {
            display: none;
            width: 100%;

            @media screen and (max-width: 769px) {
                  display: block;
            }

            &--title {
                  display: none;

                  @media screen and (max-width: 769px) {
                        display: block;
                        background: #08a045;
                        color: #fff;
                        width: 40%;
                        margin: auto;
                        padding: 0.5em;
                        border-radius: 0.5em;
                        color: #fff;
                  }

                  @media screen and (max-width: 550px) {
                        width: 50%;
                  }
            }
      }
}
</style>
