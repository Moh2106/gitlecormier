<template>
      <div class="pt-16 pb-4 livre">
            <!------- Insertion du widget pour la note globale ------------------------>

            <div class="mr-4 flex w-full h-[7em]">
                  <div class="w-1/3 mr-2">
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
                        class="iframe w-2/3 flex items-center  h-[3.65em] mt-2 text-left"
                  >
                        {{ chooseEnglishVersion ? "A big thank you to our hosts for their reviews left on the Gîte de France website!" : "Un grand merci à nos hôtes pour leurs commentaires laissés sur le site de Gîtes de France !" }}
                  </p>
            </div>

            <!-- Insertion du widget avis -->
            <div class="avis">
                  <iframe
                        style="
                              overflow: auto;
                              -webkit-overflow-scrolling: touch;
                              border: none;
                              border-radius: 0.5em;
                        "
                        height="1500"
                        width="100%"
                        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis"
                  ></iframe>
            </div>
      </div>
</template>

<script>
import { computed } from "vue";
import store from '@/store';

export default {
      setup() {
            var chooseEnglishVersion = computed(() => {
                  return store.state.englishVersion;
            });


            return{
                  chooseEnglishVersion,
            }
      },
};
</script>

<style scoped>
.livre {
      width: 90%;
      margin: auto;
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
}
</style>
