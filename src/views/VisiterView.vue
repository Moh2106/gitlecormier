<template>
  <div class="flex justify-between pt-20 mb-10 visiter">

    <div class="w-3/4 mr-1 visiter__carte">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.0445703306077!2d0.7546266753473231!3d49.39517009411792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0fe500ca368f5%3A0x27cece662418a239!2sG%C3%AEte%20rural%20le%20Cormier!5e0!3m2!1sfr!2sma!4v1667733924166!5m2!1sfr!2sma" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        <li class="m-2">L’entrée est au bout de la route, à gauche, juste avant le chemin.</li>
      </ol>
      
    </div>
  </div>
</template>

<script>

export default {

    setup() {
   
  },
}
</script>

<style lang="scss" scoped>
  .visiter{ 
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      width: 90%;
      margin: auto;

      &__description{ 
        width: 100%;
        margin-bottom: 1em;
        margin-top: 2em;
      }

      &__carte{ 
        width: 100%;
      }
    }

    @media screen and (max-width: 550px) {
      font-size: 0.7em;
      font-weight: 450;
    }
  }
</style>