<template>
  <div class="pt-16 tarif">
    <!-- Insertion des saisons, dates et prix à partir de tarifs de database -->
    <div class="flex flex-wrap w-4/5 mx-auto pb-4 ">
      <div v-for="tarif in tarifs" :key="tarif.id" class="w-1/3 tarif__card">
        <div class="bg-white m-4  rounded-lg ">
          
          <img :src="tarif.photo" :alt="tarif.saison">
          <div class="tarif__card--image">
            <h1 v-text="tarif.prix" class="prix"></h1>
          </div>
          
          <h1 v-text="tarif.saison" class=" "></h1>
          <p v-text="tarif.date"></p>
          <p v-text="tarif.prix" class="text-2xl font-semibold"></p>
        </div>
        
      </div>
    </div>

    <!-- Description des auppléments pour le prix -->
    <div class="bg-white w-4/5 m-auto rounded-lg bg-opacity-90 mb-4 text-left p-4">
      <p>
        Attention le chauffage est en plus, compter environ <span class="tarif__price">10€</span>    par jour en plein hiver.
        Une caution de <span class="tarif__price">300€</span> vous sera demandée lors de votre arrivée puis restituée à votre départ si les écrans plats sont toujours là.
      </p>

      <p>Par semaine, préparation d'un lit 2 personnes : <span class="tarif__price">8€</span> , d'un lit 1 personne : <span class="tarif__price">6€</span>, mise à disposition des serviettes de bain : <span class="tarif__price">6€</span> par personne, forfait ménage : <span class="tarif__price">40€</span>. A préciser à la réservation.
      </p>

      <p>
        Cliquez 
        <button class="font-bold tarif__cliquer bg-green-600 p-1 text-white">
          <a href="https://www.gites-de-france-eure.com/dispo.php?numero_gite=818&dpt=27&type_gite=G&base=G&instance=gites27&langue=FRANCAIS&opener=1& " target="_blank" rel="noopener noreferrer">ici</a>
        </button>
         pour voir les dates disponibles sur toute l'année
      </p>
    </div>

 
  </div>
</template>

<script>
import {tarifs} from '../database/tarifs'
export default {

  setup(){ 

  return{
    tarifs,
  }

  }
  
}
</script>

<style lang="scss" scoped>

  .tarif{ 

    &__card{
      position: relative;

      &:hover{
        cursor: pointer;

        .prix{
          display: block;
          animation: tada; /* referring directly to the animation's @keyframe declaration */
          animation-duration: 2s; /* don't forget to set a duration! */
        }
      }

      &--image{
        position: absolute;
        top: 0em;
        transform: translate(10em, 8em);

        .prix{
          position: relative;
          background: #08a045;
          color: #fff;
          padding: 1em;
          border-radius: 0.5em;
          display: none;
        }
      }

      
    }

    &__cliquer{
      border-radius: 50%;

    }

    &__price{
      font-weight: 600;
    }

    @media screen and (max-width: 550px) {
        padding-top: 3em;
      }

      @media screen and (max-width: 768px) {
        padding-top: 5em;
      }

    &__title{
      background:rgb(22 163 74);
      margin: auto;
      color: blanchedalmond;
      font-weight: 600;
    }

    @media screen and (max-width: 768px) {
      width: 100%;

      &__iframe{
        width: 90%;
      }

    }

    @media screen and (max-width: 550px) {
      width: 100%;
      font-size: 0.8em;

      &__iframe{
        width: 90%;
      }

    }

  }
</style>