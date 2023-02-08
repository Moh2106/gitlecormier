<template>
  <div class="alentours" id="haut">

    <!-- Insertion des données de alentours.js via le dossiers database -->
    <div>
      <div v-for="alentour in alentours" :key="alentour.id" class="alentours__design bg-green-700 bg-opacity-80 text-white ">
          <div>
            <img :src="alentour.img" :alt="alentour.titre" class="alentours__design--image">
          </div>

          <div>
              <h1 v-text="alentour.titre" class="mb-2 font-bold"></h1>
              <p v-text="alentour.description" class="mb-4"></p>

              <div>
                <button class="bg-red-600 rounded-lg mr-4 p-1">
                  <a :href="alentour.site" target="_blank" rel="noopener noreferrer"> Aller sur le site officiel </a>
                </button>

                <button class="bg-green-600 rounded-lg p-1">
                  <a :href="alentour.maps" target="_blank" rel="noopener noreferrer"> Trajectoire Google Maps </a>
                </button>

              </div>
            
          </div>
          
      </div>

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
import {alentours} from '../database/alentours'

export default {

  setup(){
    
    return{
      alentours
    }
  }

}
</script>

<style lang="scss" scoped>
    .alentours{ 
    margin-top: 3em;
    padding-top: 2em;

    &__design{ 
      width: 80%;
      height: auto;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin-bottom: 1em;
      border-radius: 0.5em;

      &:hover{
        width: 81%;
        transform: scale3d(1.1em);
        box-shadow: rgba(0, 255, 0, 0.3) 1.95px 1.95px 2.6px;
      }

      &--image{
        height: 90%;
        margin: 3% 0% 3% 1.5%;
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