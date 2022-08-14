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

    <!--La partie vidéo -->
    <div class="accueil__video">
        <video src="../assets/Vidéo/cormier_video.mp4" autoplay type="video/mp4" controls></video>
    </div>

    <!--La partie de description de la maison-->

    <!---<div class="accueil__details m-2 p-2">
        <p>Comme une carte postale normande, cette chaumière pleine de charme semble posée dans son écrin de verdure, dans un adorable petit coin de campagne bien tranquille. De la maison d'autrefois elle a les codes mais l'équipement, le confort et la décoration sont tout à fait d'actualité. Vous adorerez le caractère des pans de bois et de la charpente apparente, du chaume et son faîtage parcouru d'iris : vraiment beaucoup de charme pour cette maison qui vous offre en plus un grand jardin paysager de 3000 m² avec beaucoup d'espace pour se dégourdir les jambes ou se reposer dans son petit coin favori, pourquoi pas auprès du bassin aux nymphéas. Egalement une belle terrasse avec un spa pour votre bien-être. Ici tout est pensé pour vos vacances avec côté jeux trampoline, ping-pong, portique, à l'intérieur, plein de livres, BD et jeux pour petits et grands. La Seine, toute proche, vous promet de belles balades avec des vues à couper le souffle.
            <br>
        </p>

    </div> -->

    <br>

    <!---------------Gallerie ---------------------------------------------->
    <div class="accueil__gallery flex mb-6">

        <div class="accueil__gallery--items w-1/4" @click="Cliquer">
            <img src="../assets/Cormier/cormier_pingpong.jpg" alt="Terrain de Ping Pong">
            <div>
                <h1>Cliquez pour plus de visibilité</h1>
            </div>
        </div>

        <div class="accueil__gallery--items w-1/4" @click="Cliquer">
            <img src="../assets/Cormier/cormier_deco2.jpg" alt="" >
            <div>
                <h1>Cliquez pour plus de visibilité</h1>
            </div>
        </div>

        <div class="accueil__gallery--items" @click="Cliquer">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp" alt="">
            <div>
                <h1>Cliquez pour plus de visibilité</h1>
            </div>
        </div>

        <div class="accueil__gallery--items w-1/4" @click="Cliquer">
            <img src="../assets/Cormier/cormier_chemine.jpg" alt="">
            <div>
                <h1>Cliquez pour plus de visibilité</h1>
            </div>
            
        </div>
    </div>



    <div class="accueil__popup">
        <span @click="fermer">&times;</span>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" alt="">
    </div>

    
  </div>
</template>

<script>

export default {

    setup(){ 

        // Cette fonction permet d'agrandir l'image en cliquant sur son div parent

        const Cliquer = () => { 
            const items = document.querySelectorAll('.accueil__gallery--items')
            

            items.forEach(image => { 
                image.onclick = (e) => { 
                    const source = e.currentTarget.querySelector('img').src;
                    document.querySelector('.accueil__popup').style.display = 'block'
                    document.querySelector('.accueil__popup img').src = source
                }
            })
        }

        // Cette fonction permet de fermer l'image qui sera affiché

        const fermer = () =>{ 
            document.querySelector('.accueil__popup span').onclick = () => { 
                document.querySelector('.accueil__popup').style.display = 'none'
            }
        }
        

        return{ 
            fermer,
            Cliquer,
        }

    }
    
}
</script>

<style lang="scss" scoped>

    .accueil{ 
        background: url("https://mdbcdn.b-cdn.net/img/video/Tropical.mp4");

        &__description{ 
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            //background: #fff;
            background: #606c38;
            color: #fff;
            
            h1{
                font-size: 2em;
            }
        }

        &__video{ 
            width: 100%;
            margin: auto;
            margin-bottom: 2em;

            video{ 
                width: auto;
                margin: auto;
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

        &__gallery{ 
            width: 90%;
            margin: auto;
            max-height: 95%;
            overflow: hidden;

            &--items{ 
                padding: 0.5em;
                max-height: 100%;
                position: relative;

                img{
                    border-radius: 0.5em;
                    height: 100%;
                }

                div{ 
                    position: absolute;
                    cursor: pointer;
                    top: 6px;
                    width: 95%;
                    height: 94%;
                    opacity: 0;
                    transition: all 0.5s ease-in-out;
                    //backdrop-filter: blur(2px);
                    //background: rgb(239, 10, 10);

                    &:hover{ 
                        opacity: 1;

                        h1{ 
                            transform: translateY(00%);
                            transition: 0.5s;
                        }
                    }

                    h1{ 
                        font-size: 1.5em;
                        color: #fff;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transform: translateY(100%);
                        //border: 1px solid #fff;
                        border-radius: 0.5em;
                        //background: rgba(15, 76, 92,0.3);
                        background: rgba(0, 0, 0, 0.5);
                        

                    }
                }
                
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
            transition: .35s ease-in-out;
            backdrop-filter: blur(20px);

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
                object-fit: cover;
                width: 700px;
                height: 400px;
                
            }
        }

        .gite{ 
        height: 675px;
    }

    }
    
</style>