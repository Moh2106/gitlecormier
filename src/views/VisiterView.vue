<template>
      <div class="visite" v-motion-pop>
            <div class="mb-16">
                  <div class="pt-20 paragraph">
                        <p class="bg-white bg-opacity-90">
                              <span class="text-red-600 text-xl">!!!</span>
                              Le chemin avec le repère rouge est un chemin de
                              terre. Il n'est absolument pas carrossable. Voici
                              2 illustrations (itinéraire en bleu).
                        </p>
                  </div>

                  <div class="flex justify-between pt-4 mb-10 visiter">
                        <div class="w-3/4 mr-2 ml-4 visiter__carte">
                              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11VwU5LYRymF8SbVfWczSPH-Zyrveu_w&ehbc=2E312F" width="100%" height="600"></iframe>
                        </div>

                        <div
                              class="bg-white bg-opacity-80 w-1/4 rounded-lg mr-1 visiter__description"
                        >
                              <h1>Depuis l'A13 :</h1>
                              <ol class="text-left ml-4">
                                    <li>Sorti 25 "Bourg Achard : FECAMP,
                                          YVETOT, PONT de BROTONE</li>

                                    <li>Continuer sur la D313 direction
                                          FECAMP/YVETOT</li>

                                    <li>Dans LE LANDIN prendre à gauche vers
                                          HAUVILLE</li>

                                    <li>Depuis HAUVILLE</li>
                                    <li>
                                          <ul class="ml-10 mb-4">
                                                <li>1- </li>
                                                <li>Une fois sortie de
                                                      HAUVILLE, à 1.5km, au
                                                      calvaire, tourner au
                                                      droite</li>
                                                <li>Puis la 2ème à droite</li>
                                          </ul>

                                          <ul class="ml-10 mb-4">
                                                <li>2- </li>
                                                <li>Serrer à droite au
                                                      monument, puis continuer
                                                      tout droit. 
                                                      <br>
                                                      Une fois sorti
                                                      de Hauville tourner à
                                                      gauche puis première à
                                                      gauche</li>
                                          </ul>
                                    </li>

                                    <li>L’entrée est au bout de la
                                                route, à gauche, juste
                                                avant le chemin de terre.</li>
                              </ol>

                        </div>
                  </div>
            </div>

            <footer-view />
      </div>
</template>

<script>
import FooterView from "@/components/FooterView.vue";

export default {
      components: { FooterView },

      setup() {},
};
</script>

<style lang="scss" scoped>
.visite {
      transition: 0.25s ease-in;
}
.paragraph {
      width: 90%;
      margin: auto;
      text-align: justify;

      p {
            padding: 1em;
            border-radius: 0.5em;

            span {
                  font-weight: bold;
                  //color: red;
            }
      }
}
.visiter {
      height: 80vh;

      @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column-reverse;
            width: 90%;
            margin: auto;

            &__description {
                  //width: 100%;
                  height: auto;
                  margin-bottom: 1em;
                  margin-top: 2em;
            }

      }

      @media screen and (max-width: 550px) {
            font-size: 0.7em;
            font-weight: 450;
      }
}
</style>
