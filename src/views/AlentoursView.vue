<template>
  <div class="alentours" id="haut" v-motion-pop >

    <!---- Petite paragraphe pour une bref description ---->
    <p class="bg-white bg-opacity-90 text-left alentours__paragraph ">
      Profitez de votre séjour  pour découvrir quelques endroits de la région, sur cette carte vous trouvevez absolument tout ce qu'il y a à visiter dans un rayon de 50 km : fermes, restaurants, sites touristiques, paysages, randonnées, etc ...
    </p>

    <!-- Intégration de la carte avec l'api de google map -->
    <div class="alentours__carte">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12r6EtORX4TvW-tF_tddqwHYuHehKG0E&ehbc=2E312F" width="100%" height="600"></iframe>
    </div>

    <!--
      Ici on saisira un texte qui sera le nom du lieu dans le input pour faire la recherche d'un lieu
    -->
    <div class="alentours__search">
      <input type="search" name="" id="" v-model="site" placeholder="Rechercher un lieu">
    </div>

    <!-- 
      Insertion des données comme les photos, le nom des sites aux alentours, le site web
      des entreprises et le l'itinéraire vers gite le cormier via alentours.js

      v-motion-pop
          v-motion-slide-visible-bottom
          v-motion-fade-visible 
    -->

    <div class="monEnsemble">
      <div v-for="alentour in newAlentoursArrays" :key="alentour.id" class="monEnsemble__element">
        <div class="alentours__card"
          
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
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
            <button class="bg-red-600">Site officiel</button>
          </div>

        </div>
      
      </div>
    </div>

    <div >
      
    </div>

    <!-------------- Boutton de redirection------------------------------>
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
import { watch } from 'vue'

export default {
  

  setup(){
    var mapsButton = ref(false)
    var site = ref("");
    var result = ref(true);

    var newAlentoursArrays = ref([]);
    newAlentoursArrays.value = alentours;

    /*
      Dans cette partie on recupère le mot saisi dans le input concernant la recherche d'un lieu
      Ensuite on effectue une recherche sur le tableau alentours récupéré depuis notre base de donnée alentours.js
      On stocke ensuite les résultats dans un tableau newAlentoursArrays
    */
    watch(site, (nouveau) =>{
      console.log(site.value + nouveau);
      let alentourArray = alentours.filter(element => element.titre.includes(nouveau.toUpperCase()))
      newAlentoursArrays.value = alentourArray;
     
    })
    

    /*
      Cette fonction est là pour comparer les valeurs des champs maps et sites
      Si la valeur existe il l'affiche, sinon pas d'affiche
    */
    function compare(value){
      var result = value.localeCompare("")
      var resultat = result == 0 ? false : true
      return resultat
    }

    return{
      compare,
      mapsButton,
      site,
      newAlentoursArrays,
      result
    }
  }

}
</script>

<style lang="scss" scoped>

    .alentours{ 
    margin-top: 3em;
    padding-top: 2em;
    width: 90%;
    margin: auto;
    padding-bottom: 2em;
    transition: 0.25s ease-in;

    &__search{
      text-align: left;

      input{
        width: 30%;
        border: none;
        padding: 0.8em;
        border-radius: 0.5em;

        &:focus{
          border: 2px solid #08a045;
          outline-color: #08a045;
        }

      }
    }

    .monEnsemble{
      display: flex;
      flex-wrap: wrap;
      //width: 95%;
      //margin: auto;
      //transform: translateX(2em);

      &__element{
        width: 33%;
      }
      
    }

    &__carte{
      //width: 90%;
      //margin: auto;
      margin-bottom: 1em
    }

    &__paragraph{
      //width: 90%;
      //margin: auto;
      padding: 1em;
      border-radius: 0.5em;
      margin: 2.5em 0 1em 0;
    }

    &__card{
      background: #fff;
      border-radius: 0.5em;
      margin: 1em;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      //transition: 20s ease-in-out;
      

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
        background: #08a045;
        color: #fff;
        transform: translateX(2.5em);
      }
    }
  }

</style>