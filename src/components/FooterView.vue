<template>
  <div class="footer flex justify-around">
    <!-------------------- -- ADRESSE ------------------------>
    <div>
        <address>
            <h2>Adresse : </h2>
            <p class="mt-4"><font-awesome-icon icon="fa-solid fa-user-secret"/> 1 rue du cormier <br> 27350 Hauville</p>
        </address>
        
    </div>

    <!-------------------- -- CONTACT ------------------------>
    <div class="contact__paragraph">
        <h2>Contact</h2>
        <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 2 32 42 40 23</p>
        <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 6 50 04 73 88</p>
    </div>

    <!-------------------- -- RESEAUX SOCIAUX ------------------------>
    <div>
        <h2 class="mb-4">Réseaux sociaux</h2>
        <div class="flex justify-around contact__icons">
            <p class="px-8" title="facebook ">
                <a href="https://www.facebook.com/gitelecormier/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'square-facebook']"  class="text-2xl bg-blue-700   hover:scale-125 b"/></a>
            </p>

        </div>
                
    </div>

    <!-------------------- -- GOOGLE MAPS ------------------------>
    <div>
        <h2 class="mb-4"> 
            <span class="font-bold">
                <span class="text-blue-500">G</span> <span class="text-red-600">o</span> <span class=" text-yellow-500">o</span> <span class="text-blue-500">g</span> <span class=" text-green-500">l</span> <span class="text-red-600">e</span>
            </span> Maps</h2>

        <p class="px-8" title="Google Maps">
            <a href="https://goo.gl/maps/MNEXCNRCm6RrVQRD7">
                <font-awesome-icon icon="fa-solid fa-location-dot" 
                class="text-2xl hover:scale-125 b" />
            </a>
        </p>
    </div>

    <!-------------------- -- LIENS ------------------------>
    <div class="liens">
        <h2 class="mb-2">Liens</h2>
        <div>
            <a href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html" target="_blank">
                <img src="../assets/Liens/logo_gite_eure_de_france.jpg" alt="logo gite eure de france" class="liens__logo">
            </a>
            
            <!----<p>
                <a href="https://www.gites-de-france.com/fr/normandie/eure/gite-du-cormier-27g818" target="_blank" rel="noopener noreferrer">Gite le cormier sur le site de Gite de France</a>
            </p>

            <p>
                <a href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html" target="_blank" rel="noopener noreferrer">Gite le cormier sur le site de Gite de France Eure</a>
            </p>-->
        </div>
        
    </div>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer{ 
        background: #08a045;
        height: 15vh;
        color: #fff;

        @media screen and (max-width : 768px) {
            display: block;
            font-weight: 500;
        }

        @media screen and (max-width : 550px) {
            padding-top: 1.5em;
            height: 40vh;
            font-size: 0.8em;
            font-weight: 500;
        }

        .liens{

            &__logo{
                width: 50%;
                margin: auto;
            }
            /*div{
                font-size: 0.9em;

                a{
                    text-decoration: underline;
                }
            }*/
        }

        /*.a{ 
            @media screen and (max-width : 768px) {
                margin: 2em 0;
            }

            @media screen and (max-width : 550px) {
                margin: 0.5em 0;
        }
            
        }*/
        .b{
            &:hover{ 
                    border-radius: 0.5em;
                }
        }

    }
</style>