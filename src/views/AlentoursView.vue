<template>
  <div class="alentours" id="haut">

    <!---- Peite paragraphe ---->
    <p class="bg-white text-left alentours__paragraph ">
      Vous souhaitez également découvrir quelques endroits de la région, sur cette carte vous trouvevez absolument tout ce qu'il y a à visiter dans un rayon de 50 km : fermes, restaurants, sites touristiques, paysages, randonnées, etc ...
    </p>

    <!--Nouveau intégration-->
    <div class="alentours__carte">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12r6EtORX4TvW-tF_tddqwHYuHehKG0E&ehbc=2E312F" width="100%" height="600"></iframe>

    </div>

    <!---------- Intégration des données à partir de alentours.js----------------------------->

    <!----<div class="monEnsemble">
      <div v-for="alentour in alentours" :key="alentour.id" class="monEnsemble__element">
        <div class="alentours__card">
          <div class="alentours__card--image">
            <div class="myImage">
              <img :src="alentour.img" :alt="alentour.titre">
            </div>

            <div class="mapButton">
              <button class="bg-green-600">
                <a :href="alentour.maps" target="_blank" rel="noopener noreferrer">Voir l'itinéraire</a>
              </button>
            </div>
            
          </div>

          <div class="alentours__card--description">
            <h1 v-text="alentour.titre" class="font-bold "></h1>
            <p v-text="alentour.description"></p>
            <button class="bg-red-600">Site officiel</button>
          </div>

        </div>
      
      </div>
    </div> -->

    

    <div >
      

      
    </div>

    
    <!--------------Boutton de redirection------------------------------>
    <div class="alentours__redirection">
      <button>
        <a href="#haut">
          <font-awesome-icon 
            icon="fa-solid fa-arrow-up"
            class="alentours__redirection--font "
            />
        </a>
      </button>
    </div>


  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {alentours} from '../database/alentours'

export default {

  setup(){
    var mapsButton = ref(false)

    /* Cette fonction est là pour comparer les valeurs des champs maps et sites
      Si la valeur existe il l'affiche, sinon pas d'affiche
    */
    function compare(value){
      var result = value.localeCompare("")
      var resultat = result == 0 ? false : true
      return resultat
    }

    return{
      alentours,
      compare,
      mapsButton
    }
  }

}
</script>

<style lang="scss" scoped>
  //import "animate.css";

    .alentours{ 
    margin-top: 3em;
    padding-top: 2em;

    .monEnsemble{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &__element{
        width: 30%;
      }
      
    }

    &__carte{
      width: 90%;
      margin: auto;
    }

    &__paragraph{
      width: 90%;
      margin: auto;
      padding: 1em;
      border-radius: 0.5em;
      margin-bottom: 1em;
    }

    &__card{
      background: #fff;
      border-radius: 0.5em;
      margin: 1em;


      &:hover{
        transition: 0.5s;

        .mapButton{
          transition: ease-in-out 50s;
          display: block;
          background: rgba(170, 221, 204, 0.5);

          button{
            animation: tada; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s; /* don't forget to set a duration! */
          }
          
        }

        //width: 50%;
      }

      &--image{ 
        position: relative;
        height: 100%;

        .myImage{
          width: 100%;

          img{
            width: 100%;
            height: 250px;
          }
        }

        .mapButton{
          //background: rgba(170, 221, 204, 0.5);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0em;
          display: none;

          button{
            padding: 0.5em;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 0.5em;
            width: 32%;
            margin: auto;
            position: relative;
            top: 45%;
            background: rgb(22,163,74);
            border: none;
            

            &:hover{
              background: rgb(22,163,74);
              border: none;
            }
          }
        }
      }

      &--description{
        button{
          color: #fff;
          padding: 0.3em;
          border-radius: 0.5em;
          margin-bottom: 0.3em;

          &:hover{
            background: rgb(185, 14, 14);
          }
        }

      }
    }



    &__redirection{
      text-align: right;

        &--font{ 
        font-size: 1.5em;
        padding: 0.7em;
        border-radius: 50%;
        margin-right: 0.5em;
        background: rgb(39, 184, 39);
        color: #fff;
      }
    }
  }

</style>