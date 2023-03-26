<template>
  <div class="descriptif pt-20 pb-8" >

    <div class= "descriptif__paragraph   text-left">
      <p>
        Comme une carte postale normande, cette chaumière pleine de charme semble posée dans son écrin de verdure, dans un adorable petit coin de campagne bien tranquille. De la maison d'autrefois elle a les codes mais l'équipement, le confort et la décoration sont tout à fait d'actualité. Vous adorerez le caractère des pans de bois et de la charpente apparente, du chaume et son faîtage parcouru d'iris : vraiment beaucoup de charme pour cette maison qui vous offre en plus un grand jardin paysager de 3000 m² avec beaucoup d'espace pour se dégourdir les jambes ou se reposer dans son petit coin favori, pourquoi pas auprès du bassin aux nymphéas. Egalement une belle terrasse avec un spa pour votre bien-être. Ici tout est pensé pour vos vacances avec côté jeux trampoline, ping-pong, portique, à l'intérieur, plein de livres, BD et jeux pour petits et grands. La Seine, toute proche, vous promet de belles balades avec des vues à couper le souffle.
      </p>
    </div>

    <!------------------ Rez de chaussee --------------------------->
    <h1 class="title">Rez-de-chaussée</h1>
    <div class="flex justify-between w-4/5 m-auto mb-8 descriptif__section">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper w-2/3 m-auto a"
      >

      <swiper-slide>
      <img 
        src="../assets/RezDeChaussee/rdc1.jpg" 
        alt=""
        class="b"
        >
      </swiper-slide>

      <swiper-slide>
        <img 
          src="../assets/RezDeChaussee/rdc2.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
        
      <swiper-slide>
        <img 
          src="../assets/RezDeChaussee/rdc3.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
      
      <swiper-slide>
        <img 
          src="../assets/RezDeChaussee/rdc4.jpg" 
          alt=""
          class="b "
        >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc5.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc6.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc7.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc8.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc9.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc10.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/RezDeChaussee/rdc11.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

      </swiper>

      <!----------------Texte descriptif -------------------------------->
      <div class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left">

        <h1 class="font-semibold ">Au rez-de-chaussée :</h1>
            <ul class="">
                <li>Salle à manger</li>
                <li>Salon</li>
                <li>Cuisine</li>
                <li>Buanderie</li>
                <li>1 chambre (1 lit 2 personnes)</li>
                <li>Salle d'eau</li>
                <li>WC</li>
            </ul>
        
      </div>

    </div>

    <!--------------------- 1ER ETAGE  ----------------------------->
    <h1 class="title">Au 1er Etage</h1>
    <div class="flex justify-between w-4/5 m-auto mb-8 descriptif__section">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper w-2/3 m-auto a"
      >

      <swiper-slide>
      <img 
        src="../assets/Etage/etage1.jpg" 
        alt=""
        class="b"
        >
      </swiper-slide>

      <swiper-slide>
        <img 
          src="../assets/Etage/etage2.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
        
      <swiper-slide>
        <img 
          src="../assets/Etage/etage3.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
      
      <swiper-slide>
        <img 
          src="../assets/Etage/etage4.jpg" 
          alt=""
          class="b "
        >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/Etage/etage5.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/Etage/etage6.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Etage/etage7.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Etage/etage8.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Etage/etage9.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Etage/etage10.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Etage/etage11.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

      </swiper>

      <!----------------Texte descriptif -------------------------------->
      <div class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left">

        <h1 class="font-semibold">Au 1 er étage : </h1>
            <ul>
                <li>1 chambre palière</li>
                <li>(1 lit 1 personne)</li>
                <li>Bureau</li>
                <li>Placard</li>
                <li>1 chambre (2 litS 1 personnes)</li>
                <li>Salle d'eau</li>
                <li>WC</li>
            </ul>
        
      </div>

    </div>

    <!---------------- LE JARDIN ------------------------------------------>
    <h1 class="title">Le jardin</h1>
    <div class="flex justify-between w-4/5 m-auto descriptif__section">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper w-2/3 m-auto a"
      >

      <swiper-slide>
      <img 
        src="../assets/Jardin/jardin1.jpg" 
        alt=""
        class="b"
        >
      </swiper-slide>

      <swiper-slide>
        <img 
          src="../assets/Jardin/jardin2.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
        
      <swiper-slide>
        <img 
          src="../assets/Jardin/jardin3.jpg" 
          alt=""
          class="b "
        >
      </swiper-slide>
      
      <swiper-slide>
        <img 
          src="../assets/Jardin/jardin4.jpg" 
          alt=""
          class="b "
        >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin5.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>
        
        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin6.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin7.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin8.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin9.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

        <swiper-slide>
          <img 
          src="../assets/Jardin/jardin10.jpg" 
          alt=""
          class="b "
          >
        </swiper-slide>

      </swiper>

      <!----------------Texte descriptif -------------------------------->
      <div class="bg-white w-1/3 bg-opacity-90 pt-8 pl-8 text-left">

        <h1 class="font-semibold">Dans le jardin :</h1>

          <ul>
              <li>3000 m2</li>
              <li>SPA (Jaccuzzi)</li>
              <li>Garage</li>
              <li>Bassin (avec poissons rouges)</li>
              <li>Jeux</li>
              <li>Barbecue</li>
          </ul>
        
      </div>

    </div>
    

    <!----------------------Lien vers gallery photo ----------------------------->
    <div class="descriptif__gallery">
      <button>
        <router-link to="/descriptifs/gallerie" class="bg-green-600 text-white font-bold p-2 rounded-lg hover:bg-green-700"> Gallerie photo </router-link>
      </button>
    </div>
 
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "./main.css";
import "../../src/main.css"

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },

}
</script>

<style lang="scss" scoped>

    .a{ 
      height: 50vh;
    }

    .b{
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    .descriptif{ 
         width: 80%;
         margin: auto;

         @media screen and (max-width: 768px) {
            width: 90%;
          }

          @media screen and (max-width: 550px) {
            width: 95%;
            font-size: 0.7em;
          }

        &__paragraph{ 
          //background: #386641;
          background: #08a045;
          color: #fff;
          border-radius: 0.5em;
          padding: 1em;
          margin-bottom: 1em;
          font-size: 0.9em;

          @media screen and (max-width: 768px) {
            //font-size: 0.7em;
          }
        }
         .title{ 
          background: #fff;
          width: 20%;
          margin: auto;
          border-radius: 50%;
          margin-bottom: 0.5em;

          @media screen and (max-width: 550px) {
            width: 50%;
            font-weight: 600;
            //font-size: 0.8em;
          }

         }

         &__section{ 
          @media screen and (max-width: 768px) {
            display: block;
          }

          @media screen and (max-width: 550px) {
            display: flex;
            flex-direction: column-reverse;
            font-weight: 500;
            
            div{ 
              width: 100%;
              margin-bottom: 0.5em;
              border-radius: 0.5em;
            }
          }
          
         }

        &__slide{
            color: #000;
            margin-bottom: 1em;

            &--rezchausse{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            margin: auto;
            background: #fff;


            .taille{
                width: 70%;
                height: 50%;
                text-align: center;

                img{ 
                  width: 100%;
                  height: 350px;
                  object-fit: fill;
                  object-position: center;
                }
            }
        }

        &--text{ 
            width: 30%;
        }

        }

        &__gallery{ 
            text-align: right;
            margin: 1em;

          button{ 
            //background: rgba($color: #fff, $alpha: 1);
            //color: #000;
            //font-weight: 600;
            padding: 0.5em;
            border-radius: 0.5em;
            
          }
          
        }

    }
</style>