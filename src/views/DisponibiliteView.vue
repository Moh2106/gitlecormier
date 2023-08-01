<template>
      <div class="pt-16 reservation pb-4">
            <div class="reservation__soleil" id="disponibiliteIframe">
                  <div v-if="showImage">
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
                  v-once
            >
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                        "
                        height="1200"
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

/*.custom-shape-divider-top-1688723126 {
      width: 100%;
      overflow: hidden;
      line-height: 0;
}

.custom-shape-divider-top-1688723126 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 59px;
}*/

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

.reservation {
      width: 100%;
      position: relative;

      @media screen and (max-width: 768px) {
            margin-top: 3em;
      }

      &__soleil {
            width: 30%;
            position: absolute;
            top: -10%;
            left: -15%;
            opacity: 0;

            p {
                  transform: translateY(-15em);
                  background: #08a045;
                  color: #fff;
                  border-radius: 0.5em;
            }
      }

      &__widget {
            width: 90%;
            color: #ccc;

            @media screen and (max-width: 768px) {
                  width: 99%;
                  margin: auto;
            }

            @media screen and (max-width: 550px) {
                  width: 90%;
                  margin: auto;
            }
      }
}
</style>
