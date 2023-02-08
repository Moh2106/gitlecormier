<template>
  <div class="accueil">

    <!--La partie du slide-->

    <div>
        <div id="carouselExampleControls" class="carousel slide relative accueil__slide" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">

                <div class="carousel-item active relative float-left w-full">
                <img
                    src="../assets/Cormier/cormier3.jpg"
                    class="block w-full gite h-1/4 "
                    alt="Chambre"
                />
                </div>

                <div class="carousel-item relative float-left w-full">
                <img
                    src="../assets/Cormier/cormier1.jpg"
                    class="block w-full gite h-1/4 "
                    alt="La maison"
                />
                </div>

                <div class="carousel-item relative float-left w-full">
                <img
                    src="../assets/Jardin/jardin13.jpg"
                    class="block w-full gite h-1/4 "
                    alt="Le jardin"
                />
                </div>

                <div class="carousel-item relative float-left w-full">
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
    <div class="accueil__description bg-green-700 bg-opacity-90 ">
        <h1 class="font-medium">Bienvenue à Hauville dans la chaumière du gîte du Cormier.</h1>
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

    <br>

    <!---------------Gallerie ---------------------------------------------->
    <div class="accueil__gallery mb-6">

        <div class="accueil__gallery--items" @click="Cliquer">
            <img src="../assets/Cormier/cormier_ping_pong.jpg" alt="Terrain de Ping Pong">
            <div>
                <h1>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" class="plus"/>
                </h1>
            </div>
        </div>

        <div class="accueil__gallery--items" @click="Cliquer">
            <img src="../assets/Cormier/cormier_deco2.jpg" alt="" >
            <div>
                <h1>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" class="plus"/>
                </h1>
            </div>
        </div>

        <div class="accueil__gallery--items" @click="Cliquer">
            <img src="../assets/Cormier/cormier_jaccuzzi.jpg" alt="">
            <div>
                <h1>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" class="plus"/>
                </h1>
            </div>
        </div>

        <div class="accueil__gallery--items" @click="Cliquer">
            <img src="../assets/Cormier/cormier_chemine.jpg" alt="">
            <div>
                <h1>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" class="plus"/>
                </h1>
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

        &__slide{ 
            width: 90%;
            margin: auto;

            /*@media screen and (max-width: 768px) {
                img{ 
                    height: 3vh;
                    object-fit: fill;
                }
   
            }*/
        }

        &__description{ 
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 0.5em;
            width: 80%;
            margin: auto;
            color: #fff;
            
            h1{
                font-size: 2em;

                @media screen and (max-width: 550px) {
                font-size: 1em;
                }
            }

            p{ 
                @media screen and (max-width: 550px) {
                    font-size: 0.8em;
                }
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
            display: flex;
            justify-content: center;
            align-items: center;

            &--items{ 
                padding: 0.5em;
                max-height: 100%;
                position: relative;

                @media screen and (max-width: 550px){
                   
                }

                img{
                    border-radius: 0.5em;
                    width: 300px;
                    height: 200px;

                    /*@media screen and (max-width: 550px){
                        width: 150%;
                    }*/
                }

                div{ 
                    position: absolute;
                    cursor: pointer;
                    top: 6px;
                    width: 95%;
                    height: 94%;
                    opacity: 0;
                    transition: all 0.5s ease-in-out;

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
                        border-radius: 0.5em;
                        background: rgba(0, 0, 0, 0.5);

                        .plus{ 
                            font-size: 1.5em;

                            &:hover{ 
                                font-size: 2.5em;
                            }
                        }
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
            transition: .5s ease-in-out;
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
                object-fit: fill;
                
            }
        }

        .gite{ 
        height: 675px;
    }

}
    
</style>