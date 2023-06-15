<template>
      <div class="visite" v-motion-pop>
            <div class="mb-16">
                  <div class="pt-20 paragraph">
                        <p class="bg-white bg-opacity-90">

                          <span class="text-red-600 text-xl">!!!</span>
                            Le chemin avec le repère rouge est un chemin de terre. Il n'est absolument pas carrossable. 

                            Voici 2 illustrations (itinéraire en bleu).
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
                              <h1>Depuis l'A13 :</h1>
                              <ol type="A" class="text-left">
                                    <li class="m-2">
                                          Sorti 25 "Bourg Achard : FECAMP,
                                          YVETOT, PONT de BROTONE
                                    </li>
                                    <li class="m-2">
                                          Continuer sur la D313 direction
                                          FECAMP/YVETOT
                                    </li>
                                    <li class="m-2">
                                          Dans LE LANDIN prendre à gauche vers
                                          HAUVILLE
                                    </li>
                                    <li class="m-2">
                                          Dans HAUVILLE 

                                          <ul>
                                            <li>
                                              1-  Prendre la D90 vers ROUTOT
                                            </li>

                                            <li>
                                              2-  Serrer à droite au monument, puis continuer tout droit. Une fois sorti de Hauville tourner à gauche puis première à gauche</li>
                                          </ul>
                                    </li>
                                    <!----<li class="m-2">
                                          Une fois sortie de HAUVILLE, à 1.5km,
                                          au calvaire, tourner au droite
                                    </li>
                                    <li class="m-2">Puis la 2ème à droite.</li>-->
                                    <li class="m-2">
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

            /*&__carte{ 
        //width: 100%;
        //height: 100%;
      }*/
      }

      @media screen and (max-width: 550px) {
            font-size: 0.7em;
            font-weight: 450;
      }
}
</style>
