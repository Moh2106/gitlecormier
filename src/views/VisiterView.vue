<template>
      <div class="visite" v-motion-pop>
            <div class="mb-16">
                  <div class="pt-20 paragraph">
                        <p class="bg-white bg-opacity-90">
                              <!--<span class="text-red-600 text-xl">!!!</span>-->
                              Le chemin avec le repère rouge est un chemin de
                              terre. Il n'est absolument pas carrossable. Voici
                              2 exemples d'itinéraires en bleu.
                        </p>
                  </div>

                  <div class="flex justify-between pt-4 mb-10 visiter">
                        <div class="w-3/4 mr-2 ml-4 visiter__carte">
                              <iframe
                                    src="https://www.google.com/maps/d/u/0/embed?mid=11VwU5LYRymF8SbVfWczSPH-Zyrveu_w&ehbc=2E312F"
                                    width="100%"
                                    height="600"
                              ></iframe>
                        </div>

                        <div
                              class="bg-white bg-opacity-80 w-1/4 rounded-lg mr-1 visiter__description"
                        >
                              <h1 class="text-left ml-4">Depuis l'A13 :</h1>
                              <ol class="text-left ml-4">
                                    <li class="mb-4">
                                          Sorti 25 "Bourg Achard : FECAMP,
                                          YVETOT, PONT de BROTONE"
                                    </li>

                                    <li class="mb-4">
                                          Continuer sur la D313 direction
                                          FECAMP/YVETOT
                                    </li>

                                    <li class="mb-4">
                                          Au rond-point prendre à gauche vers
                                          HAUVILLE
                                    </li>

                                    <li class="mb-4">
                                          Depuis HAUVILLE (2 possibilités)
                                    </li>
                                    <li>
                                          <ul class="ml-10 mb-4">
                                                <li class="mb-4">
                                                      1- Une fois sorti de
                                                      HAUVILLE,
                                                </li>
                                                <li class="mb-4">
                                                      À 1.5km, au calvaire,
                                                      tourner au droite
                                                </li>
                                                <li>Puis la 2ème à droite</li>
                                          </ul>

                                          <ul class="ml-10 mb-4">
                                                <li class="mb-4">
                                                      2- Serrer à droite au
                                                      monument, puis continuer
                                                      tout droit.
                                                </li>
                                                <li class="mb-4">
                                                      Une fois sorti de Hauville
                                                      tourner à gauche
                                                </li>

                                                <li class="mb-4">
                                                      Puis 1ère à gauche
                                                </li>
                                          </ul>
                                    </li>

                                    <li>
                                          L’entrée est au bout de la route, à
                                          gauche, juste avant le chemin de
                                          terre.
                                    </li>
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

      @media screen and (max-width: 769px) {
            margin-top: 1.5em;
            font-family: Arial, Helvetica, sans-serif;
      }

       @media screen and (max-width: 550px) {
            margin-top: 0em;
            //padding-top: 3em;
      }
}
.paragraph {
      width: 90%;
      margin: auto;
      text-align: justify;

      @media screen and (max-width: 769px) {
            width: 95%;
            margin-bottom: 1em;
      }

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
      height: auto;

      @media screen and (max-width: 769px) {
            //border: 3px solid red;
            height: auto;
            display: block;
            //flex-direction: column-reverse;
            width: 95%;
            margin: 0 auto;
            padding-top: 0rem;
            //margin: 0;

      }

      @media screen and (max-width: 550px) {
            font-size: 0.9em;
            font-weight: 450;
      }

      &__carte {
            @media screen and (max-width: 769px) {
                  width: 100%;
                  margin: 0em;
            }
      }

      &__description {
            height: auto;

            @media screen and (max-width: 769px) {
                  width: 100%;
                  margin-bottom: 1em;
                  margin-top: 2em;
                  //font-size: 1em;
            }
            //width: 100%;
            //border: 3px solid blue;
            //margin: 0;
      }
}
</style>
