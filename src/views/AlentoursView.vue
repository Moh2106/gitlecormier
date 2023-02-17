<template>
  <div class="alentours" id="haut">

    <!-- Insertion des données de alentours.js via le dossiers database -->
    <!----<div>
      <div v-for="alentour in alentours" :key="alentour.id" class="alentours__design bg-green-700 bg-opacity-80 text-white ">
          <div>
            <img :src="alentour.img" :alt="alentour.titre" class="alentours__design--image">
          </div>

          <div>
              <h1 v-text="alentour.titre" class="mb-2 font-bold"></h1>
              <p v-text="alentour.description" class="mb-4"></p>

              <div>
                <button class="bg-red-600 rounded-lg mr-4 p-1" v-show="compare(alentour.site)">
                  <a :href="alentour.site" target="_blank" rel="noopener noreferrer"> Aller sur le site officiel </a>
                </button>

                <button class="bg-green-600 rounded-lg p-1" v-show="compare(alentour.maps)">
                  <a :href="alentour.maps" target="_blank" rel="noopener noreferrer"> Trajectoire Google Maps </a>
                </button>

              </div>
            
          </div>
          
      </div>

    </div>-->

    <div class="monEnsemble">
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
    </div>

    

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