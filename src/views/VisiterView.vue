<template>

  <div class="visite" v-motion-pop>
    <div class="pt-20 paragraph">
      <p class="bg-white bg-opacity-90">
        Sur cette carte, le chemin avec <span>des repéres en roses</span>  est <span> un chemin de terres absolument pas carrosable</span>, donc déconseiller de l'utiliser.
        
        Prenez plutôt le chemin avec <span>l'itinéraire en bleu</span> .
      </p>
    </div>

    <div class="flex justify-between pt-4 mb-10 visiter">
      <div class="w-3/4 mr-2 ml-4 visiter__carte">

      <!----<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.95300606359!2d0.7555437468270116!3d49.39482331613273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa317577c6994c4f!2zNDnCsDIzJzQwLjUiTiAwwrA0NScyMC42IkU!5e1!3m2!1sfr!2sma!4v1676490568817!5m2!1sfr!2sma" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->

      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11VwU5LYRymF8SbVfWczSPH-Zyrveu_w&ehbc=2E312F" width="100%" height="560" class="rounded-lg  "></iframe>

      </div>

      <div class="bg-white bg-opacity-80 w-1/4 rounded-lg mr-1 visiter__description">
        <h1>Depuis l'A13 :</h1>
        <ol type="A" class="text-left">
          <li class="m-2">Sortie 25 "Bourg Achard : FECAMP, YVETOT, PONT de BROTONE</li>
          <li class="m-2">Continuer sur la D313 direction FECAMP/YVETOT</li>
          <li class="m-2">Dans LE LANDIN prendre à gauche vers HAUVILLE</li>
          <li class="m-2">Dans HAUVILLE prendre la D90 vers ROUTOT</li>
          <li class="m-2">Une fois sortie de HAUVILLE, à 1.5km, au calvaire, tourner au droite</li>
          <li class="m-2">Puis la 2ème à droite.</li>
          <li class="m-2">L’entrée est au bout de la route, à gauche, juste avant le chemin de terre.</li>
        </ol>
        
      </div>
    </div>

    
    <footer-view/>
    
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'

export default {
  components: { FooterView },

    setup() {
   
  },
}
</script>

<style lang="scss" scoped>

  .visite{
    transition: 0.25s ease-in;
  }
  .paragraph{
    width: 90%;
    margin: auto;
    text-align: justify;

    p{
      padding: 1em;
      border-radius: 0.5em;

      span{
        font-weight : bold;
        //color: red;
      }
    }
    
  }
  .visiter{ 
    height: 80vh;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      width: 90%;
      margin: auto;

      &__description{ 
        //width: 100%;
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