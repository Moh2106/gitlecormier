<template>
  <div class="pt-14 gallerie" id="haut">

    <!----------------------  BOUTON DE RETOUR EN ARRIERE -------------------->
    <div class="gallerie__return">
      <button class="bg-white rounded-lg"> 
        <router-link to="/descriptifs">
          <font-awesome-icon :icon="['fass', 'arrow-left']" /> Retour</router-link>
      </button>
    </div>

    <!------------------- REZ DE CHAUSSE -------------------------------------->
    <div class="gallerie__frame">
      <h1 class="title bubble-bottom">Rez de chaussee</h1>

        <div class="gallerie__frame--photos"> 
          <div v-for="rdc in rezDeChausseDatabase" :key="rdc.id">
            <img :src="rdc.img" alt="" @click="Cliquer" class="items">
          </div>
        </div>
    </div>

    <!------------------- 1 ER ETAGE ------------------------------------------>

    <div class="gallerie__frame">
      <h1 class="title bubble-bottom"> 1er Etage </h1>

        <div class="gallerie__frame--photos"> 
          <div v-for="etage in etages" :key="etage.id">
            <img :src="etage.img" alt="" @click="Cliquer" class="items">
          </div>
        </div>
    </div>

    <!--------------------LE JARDIN----------------------------------------->

    <div class="gallerie__frame">
      <h1 class="title bubble-bottom">Le jardin</h1>

        <div class="gallerie__frame--photos"> 
          <div v-for="etage in jardin_database" :key="etage.id">
            <img :src="etage.img" alt="" @click="Cliquer" class="items">
          </div>
        </div>
    </div>

    <!--------------------------------------------------------------->

    <div class="gallerie__popup">
        <span @click="fermer">&times;</span>
        <img src="../assets/RezDeChaussee/rdc1.jpg" alt="">
    </div>

    <!--------------Boutton de redirection------------------------------>
    <div class="text-right ">
      <button>
        <a href="#haut">
          <font-awesome-icon 
            icon="fa-solid fa-arrow-up"
            class="gallerie__font "
            />
        </a>
      </button>
    </div>

  </div>
</template>

<script>
import {rezDeChausseDatabase} from '../database/rezdechausse'
import {etages} from '../database/etage'
import {jardin_database} from '../database/jardin'

export default {
  setup(){ 
   
   // Cette fonction permet d'agrandir l'image en cliquant sur son div parent

        const Cliquer = () => { 
          const items = document.querySelectorAll('.items')
          console.log("OK");
          

          items.forEach(image => { 
              image.onclick = (e) => { 
                  const source = e.currentTarget.querySelector('img').src;
                  document.querySelector('.gallerie__popup').style.display = 'block'
                  document.querySelector('.gallerie__popup img').src = source
                }
          })
        }

        const fermer = () =>{ 
                document.querySelector('.gallerie__popup span').onclick = () => { 
                document.querySelector('.gallerie__popup').style.display = 'none'
            }
        }

        return{
          Cliquer,
          fermer,
          rezDeChausseDatabase,
          etages,
          jardin_database
        }
  
  }
}
</script>

<style lang="scss" scoped>
  .gallerie{ 
    width: 100%;
    background: rgba($color: #fff, $alpha: 0.3);

    &__return{
      width: 90%;
      margin: auto;
      text-align: left;
      margin-top: 1em;

      button{
        background: rgb(22,163,74);
        color: #fff;
        padding: 0.2rem  0.5rem;
        font-size: 1.1rem;
      }
    }

    &__frame{
      width: 90%;
      margin: auto;

      &--photos{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        //border: 4px solid red;

        div{
        width: 18.5%;
        height: auto;
        margin: 0.5em;

        img{
          object-fit: cover;
          border-radius: 0.5em;
          cursor: pointer;
        }
      }
      }
    }

    &__photos{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      border: 4px solid red;

      div{
        width: 18.5%;
        height: auto;
        margin: 0.5em;

        img{
          object-fit: cover;
          border-radius: 0.5em;
          cursor: pointer;
        }
      }
    }
    
    .hauteur{ 
      height: 30%;
    }

    .title{ 
      //width: 35%;
      margin: auto;
      padding: 0.3em;
      border-radius: 50%;
      background: #386641;
      color: #fff;
      margin-bottom: 1em;
    }

     .bubble-bottom {
  /* Modify size here: */
      --size: 10em;

      position: relative;
      width: var(--size);
      height: calc(var(--size) * 0.25);
      border-radius: 10px;

      &::after{ 
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: calc(var(--size) * 0.13) solid transparent;
        border-top-color: #386641;
        border-bottom: 0;
        margin-left: calc(var(--size) * 0.13 * -1);
        margin-bottom: calc(var(--size) * 0.13 * -1);
      }
    }

    &__popup{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 100000;
      display: none;
      transition: .5s ease-in-out;
      backdrop-filter: blur(15px);

        span{ 
          position: absolute;
          top: 0;
          right: 10px;
          font-size: 100px;
          font-weight: bolder;
          color: #fff;
          cursor: pointer;
          z-index: 100000;
        }

        img{ 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 700px;
            height: 400px;
            object-fit: fill;
            
        }
    }

    &__font{ 
      font-size: 1.5em;
      padding: 0.7em;
      border-radius: 50%;
      color: #fff;
      margin-right: 0.5em;
      background: rgb(22,163,74);
    }

  }
</style>