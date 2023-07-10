<template>
      <div class="pt-16 reservation pb-4">
            <div class="reservation__soleil" id="disponibiliteIframe">
                  <img src="../assets/Disponibilite/soleil.png" alt="" />

                  <p>
                        Cliquer sur votre date d'arrivée pour commencer la
                        réservation
                  </p>
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

      <div class="custom-shape-divider-bottom-1688722987">
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

      <div class="custom-shape-divider-top-1688723126">
            <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
            >
                  <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        class="shape-fill"
                  ></path>
                  <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        class="shape-fill"
                  ></path>
                  <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        class="shape-fill"
                  ></path>
            </svg>
      </div>

      
</template>

<script>
export default {
      setup() {
            const moveImage = () => {
                  const myIframe = document.getElementById(
                        "disponibiliteIframe"
                  );

                  /**
                   * Vérifier si l'élément myIframe contient déjà la classe move
                   * Le but est d'exécuter l'événement une seule fois
                   */

                  myIframe.classList.add("animation");
            };

            return {
                  moveImage,
            };
      },
};
</script>

<style lang="scss" scoped>
.animation {
      animation: move 10s ease-in-out;
}

.custom-shape-divider-top-1688723126 {
    //position: absolute;
    //top: 0;
    //left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1688723126 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 59px;
}

.custom-shape-divider-top-1688723126 .shape-fill {
    fill: #FFFFFF;
}

.custom-shape-divider-bottom-1688722987 {
      //position: absolute;
      //bottom: 0;
      //left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
}

.custom-shape-divider-bottom-1688722987 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 59px;
}

.custom-shape-divider-bottom-1688722987 .shape-fill {
      fill: #ffffff;
}

@keyframes move {
      0% {
            opacity: 1;
      }
      50% {
            //position: absolute;
            //top: 20%;
            //left: 50%;
            opacity: 1;
            transform: translate(155%, 55%);
            //transform: translateX(285%);
            //transform: translateY(55%);
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
      //height: 100vh;
      //background: orange;

      /*&__css{
      background: #af2;
      display: flex;
    }*/

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
                  width: 70%;
                  margin: auto;
            }

            @media screen and (max-width: 550px) {
                  width: 90%;
                  margin: auto;
            }
      }
}
</style>
