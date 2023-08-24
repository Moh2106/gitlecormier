<template>
      <div class="pt-16 reservation pb-4">
            <!----------- SOLEIL PC -------------------->
            <div class="reservation__soleil" id="disponibiliteIframe">
                  <div v-if="showImage" class="reservation__soleil--pc">
                        <img
                              src="../assets/Disponibilite/soleil.png"
                              alt="Soleil - gite le cormier"
                        />

                        <p>
                              {{
                                    chooseEnglishVersion
                                          ? "Click on your arrival date to begin the reservation"
                                          : "Cliquer sur votre date d'arrivée pour commencer la réservation"
                              }}
                        </p>
                  </div>

                  <!----------- SOLEIL TABLETTE -------------------->
                  <div class="reservation__soleil--tablette animationTablette">
                        <img
                              src="../assets/Disponibilite/soleil.png"
                              alt="Soleil - gite le cormier"
                        />

                        <p>
                              {{
                                    chooseEnglishVersion
                                          ? "Click on your arrival date to begin the reservation"
                                          : "Cliquer sur votre date d'arrivée pour commencer la réservation"
                              }}
                        </p>
                  </div>
            </div>

            <div
                  class="m-auto reservation__widget"
                  v-on:mouseenter="moveImage"
            >
                  <!-- Pour la version pc -->
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                        "
                        class="reservation__widget--pc"
                        height="1200"
                        width="100%"
                        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numgite=818&widget-itea=dispo&nbmois=12&nbmois-ligne=3&clicsurcalendrier=1"
                  ></iframe>

                  <!-- Pour la version mobile : J'ai changé la hauteur-->
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                        "
                        class="reservation__widget--mobile"
                        height="2200"
                        width="100%"
                        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numgite=818&widget-itea=dispo&nbmois=12&nbmois-ligne=3&clicsurcalendrier=1"
                  ></iframe>
            </div>
      </div>
</template>

<script>
import store from "@/store";
import { computed, ref } from "vue";

export default {
      setup() {
            const showImage = ref(false);
            const moveImage = () => {
                  const myIframe = document.getElementById(
                        "disponibiliteIframe"
                  );

                  showImage.value = true;
                  /**
                   * Vérifier si l'élément myIframe contient déjà la classe move
                   * Le but est d'exécuter l'événement une seule fois
                   */

                  myIframe.classList.add("animation");
            };

            var chooseEnglishVersion = computed(() => {
                  return store.state.englishVersion;
            });

            return {
                  moveImage,
                  showImage,
                  chooseEnglishVersion,
            };
      },
};
</script>

<style lang="scss" scoped>
.animation {
      animation: move 10s ease-in-out;
}

.animationTablette {
      animation: moveTablette 10s ease-in-out;

      @media screen and (max-width: 550px){
            animation: moveMobile 10s ease-in-out;
      }
}


@keyframes move {
      0% {
            opacity: 1;
      }
      50% {
            opacity: 1;
            transform: translate(155%, 55%);
      }

      75% {
            transform: translate(285%, 0);
            opacity: 1;
      }

      100% {
            opacity: 0;
      }
}

@keyframes moveTablette {
      0% {
            opacity: 1;
      }
      50% {
            opacity: 1;
            transform: translate(70%, 50vh);
      }

      75% {
            transform: translate(150%, 0);
            opacity: 1;
      }

      100% {
            opacity: 0;
      }
}

@keyframes moveMobile {
      0% {
            opacity: 1;
      }
      50% {
            opacity: 1;
            transform: translate(40%, 60vh);
      }

      75% {
            transform: translate(100%, 15vh);
            opacity: 1;
      }

      100% {
            opacity: 0;
      }
}

.reservation {
      width: 100%;
      position: relative;

      @media screen and (max-width: 769px) {
            margin-top: 3em;
      }

      @media screen and (max-width: 550px){
            margin-top: 0em;
      }

      &__soleil {
            width: 30%;
            position: absolute;
            top: -10%;
            left: -15%;
            opacity: 0;

            @media screen and (max-width: 769px) {
                  width: 50%;
                  opacity: 1;
            }

            @media screen and (max-width: 550px) {
                  width: 70%;
                  opacity: 1;
            }

            p {
                  transform: translateY(-15em);
                  background: #08a045;
                  color: #fff;
                  border-radius: 0.5em;

                  @media screen and (max-width: 769px) {
                        transform: translateY(-13.5em);
                  }

                  @media screen and (max-width: 475px) {
                        transform: translateY(-11em);
                  }

                  @media screen and (max-width: 376px) {
                        transform: translateY(-10em);
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
                        //opacity: 1;
                        display: block;
                        opacity: 0;
                  }
            }
      }

      &__widget {
            width: 90%;
            color: #ccc;

            @media screen and (max-width: 769px) {
                  width: 99%;
                  margin: auto;
            }

            @media screen and (max-width: 550px) {
                  width: 90%;
                  margin: auto;
            }

            &--pc {
                  @media screen and (max-width: 550px) {
                        display: none;
                  }
            }

            &--mobile {
                  display: none;

                  @media screen and (max-width: 769px) {
                        display: none;
                  }

                  @media screen and (max-width: 550px) {
                        display: block;
                  }
            }
      }
}
</style>
