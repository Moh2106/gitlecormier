<template>
      <div class="pt-16 pb-4 livre">
            <!------- Insertion du widget pour la note globale ------------------------>

            <div class="mr-4 flex w-full h-[7em] paragraph">
                  <div class="w-1/3 mr-2 avisEtoile">
                        <iframe
                              style="
                                    overflow: auto;
                                    -webkit-overflow-scrolling: touch;
                                    border: none;
                                    border-radius: 0.5em;
                              "
                              height="100%"
                              width="100%"
                              src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis&affichequenoteglobale=1"
                        ></iframe>
                  </div>

                  <p
                        class="iframe w-2/3 flex items-center h-[3.65em] mt-2 text-left"
                  >
                        {{
                              chooseEnglishVersion
                                    ? "A big thank you to our hosts for their reviews left on the Gîte de France website!"
                                    : "Un grand merci à nos hôtes pour leurs commentaires laissés sur le site de Gîtes de France !"
                        }}
                  </p>
            </div>

            <!-- Insertion du widget avis -->
            <div class="avis">
                  <!---- Pour la version pc et tablette ---->
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                        "
                        class="pc"
                        height="1525"
                        width="100%"
                        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis"
                  ></iframe>
            </div>

            <!---- Pour la version mobile ---->
            <div class="phone">
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                        "
                        height="2600"
                        width="100%"
                        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis"
                  ></iframe>
            </div>
      </div>
</template>

<script>
import { computed } from "vue";
import store from "@/store";

export default {
      setup() {
            var chooseEnglishVersion = computed(() => {
                  return store.state.englishVersion;
            });

            return {
                  chooseEnglishVersion,
            };
      },
};
</script>

<style scoped>
.livre {
      width: 90%;
      margin: auto;

      @media screen and (max-width: 769px) {
            width: 95%;
            margin-top: 2em;
      }

      @media screen and (max-width: 550px){
            margin-top: 0em;
      }
}

.paragraph {
      @media screen and (max-width: 769px) {
            height: auto;
            display: block;
            font-size: 0.9em;
            font-family: Arial, Helvetica, sans-serif;

            div {
                  height: auto;
            }
      }
}

.avisEtoile {
      height: 17vh;

      @media screen and (max-width: 769px) {
            width: 100%;
      }

      @media screen and (max-width: 550px) {
            width: 100%;
      }
}

.iframe {
      background: #08a045;
      color: #fff;
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-bottom: 0.5em;
      font-size: 1.3em;
      border-radius: 0.5em;
      padding: 0.5rem;

      @media screen and (max-width: 769px) {
            width: 98%;
            transform: translate(0.5em,-3em);
            font-size: 1em;
      }

      @media screen and (max-width: 550px) {
            width: 96%;
            padding: 2em 0.5em;
            transform: translate(0.5em,-3em);
      }
}

.avis {
      @media screen and (max-width: 769px) {
            transform: translateY(-2.5em);
      }

      @media screen and (max-width: 550px) {
            transform: translateY(-1em);
      }
}

.pc {
      @media screen and (max-width: 550px) {
            display: none;
      }
}

.phone {
      display: none;

      /*@media screen and (max-width: 769px) {
            display: none;
      }*/

      @media screen and (max-width: 550px) {
            display: block;
            transform: translateY(-1.5em);
      }
}
</style>
