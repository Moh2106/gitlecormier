<template>
  <div class="accueil">

    <!--La partie du slide-->

    <div>
        <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item relative float-left w-full">
                <img
                    src="../assets/Cormier/cormier1.jpg"
                    class="block w-full gite h-1/4 "
                    alt="Chambre"
                />
                </div>

                <!---<div class="carousel-item active relative float-left w-full">
                <img
                    src="../assets/Cormier/cormier2.jpg"
                    class="block w-full"
                    alt="Wild Landscape"
                />
                </div>-->

                <div class="carousel-item active relative float-left w-full">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    class="block w-full"
                    alt="Wild Landscape"
                />
                </div>

                <div class="carousel-item relative float-left w-full">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    class="block w-full"
                    alt="Camera"
                />
                </div>

                <div class="carousel-item relative float-left w-full">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    class="block w-full"
                    alt="Exotic Fruits"
                />
                </div>
            </div>

            <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>

            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> 
        </div>
    </div>

    <br>

    <!--La partie de Bienvenue-->
    <div class="accueil__description">
        <h1>Bienvenue à Hauville dans la chaumière du gîte du Cormier.</h1>
        <p>Cécile et Gérard vous accueillent au cœur de l’arrière pays normand. <br>
        Dans les boucles de la Seine. <br>
        A 7 min des autoroutes A13 et A28. <br>
        A 25 min du centre de Rouen (76).</p>
    </div>

    <br>

    <!--La partie de description de la maison-->

    <div class="accueil__details">
        <p>Comme une carte postale normande, cette chaumière pleine de charme semble posée dans son écrin de verdure, dans un adorable petit coin de campagne bien tranquille. De la maison d'autrefois elle a les codes mais l'équipement, le confort et la décoration sont tout à fait d'actualité. Vous adorerez le caractère des pans de bois et de la charpente apparente, du chaume et son faîtage parcouru d'iris : vraiment beaucoup de charme pour cette maison qui vous offre en plus un grand jardin paysager de 3000 m² avec beaucoup d'espace pour se dégourdir les jambes ou se reposer dans son petit coin favori, pourquoi pas auprès du bassin aux nymphéas. Egalement une belle terrasse avec un spa pour votre bien-être. Ici tout est pensé pour vos vacances avec côté jeux trampoline, ping-pong, portique, à l'intérieur, plein de livres, BD et jeux pour petits et grands. La Seine, toute proche, vous promet de belles balades avec des vues à couper le souffle.</p>

        <br>

        <div class="flex justify-around mb-2">
            <div class="accueil__details--capacite">
                <p>Capacité : 5 personnes</p>
                <p>Nombre de chambres : 3</p>
                <p>Surface : 74 m²</p>
                <p>Orientation : Sud</p>
                <p>Animaux : Autorisés (gratuit)</p>
                <p>Internet : Oui</p>
            </div>

            <div class="flex justify-center mr-2">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    </a>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">La maison</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Cliquez ici pour voir plus de détails sur la maison
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Plus de détails</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br><br>

    <br><br>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

    .accueil{ 

        &__description{ 
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            background: #fff;
            
            h1{
                font-size: 2em;
            }
        }

        &__details{ 
            margin-top: 1em;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            background: #fff;

            &--capacite{ 
                width: 40%;
                margin: auto;
                align-items: center;
                justify-content: center;
                border-radius: 0.5em;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                background: #0f4c5c;
                color: #fff;
            }
        }

        .gite{ 
        height: 675px;
    }
    }
    
</style>