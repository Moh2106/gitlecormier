<template>
  <div class="pt-14 liens">

    <div class="flex justify-center mt-4 liens__contenu">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg liens__image" src="../assets/Liens/logo_gite_france.png" alt="Logo de gite de France" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Gite le cormier sur le site de Gite de France</h5>
                <p class="text-gray-700 text-base mb-4">
                    Vous pouvez faire des réservations via ce site.
                </p>

                <button>
                    <a href="https://www.gites-de-france.com/fr/normandie/eure/gite-du-cormier-27g818" target="_blank" rel="noopener noreferrer">Allez sur le site de réservation</a>
                </button>

            </div>
        </div>
    </div>

    <div class="flex justify-center m-4 liens__contenu">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg liens__image" src="../assets/Liens/logo_gite_france.png" alt="Logo de gite de France" />

            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Gite le cormier sur le site de Gite de France Eure</h5>
                <p class="text-gray-700 text-base mb-4">
                    Vous pouvez faire des réservations via ce site.
                </p>

                <button>
                    <a href="https://www.gites-de-france-eure.com/location-vacances-Gite-Hauville-27G818.html" target="_blank" rel="noopener noreferrer">Allez sur le site de réservation</a>
                </button>

            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .liens{ 
        @media screen and (max-width:768px){ 
            padding-top: 5em;
        }

        @media screen and (max-width:550px){ 
            padding-top: 3em;
        }

        &__contenu{ 

            @media screen and (max-width:768px){ 
                width: 80%;
                margin: 1em auto;
            } 
        }

        &__image {

            @media screen and (max-width:768px) {
                height: 15em;
                width: 60%;
                margin: auto;
                object-fit: fill;
            }

        }
        button{ 
            background: #386641;
            color: #fff;
            border-radius: 0.5em;
            padding: 0.1em;
        }
    }
</style>