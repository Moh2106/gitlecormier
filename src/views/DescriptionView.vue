<template>
  <div class="descriptif pt-14">

    <div class="descriptif__slide pb-4">

        <h1>Rez-de-chaussée</h1>

        <div class="descriptif__slide--rezchausse">

        <!--Debut du slide -->

        <div id="carouselExampleCaptions" class="carousel slide relative taille carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>

            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg" class="block w-full" />
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                </div>
                <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" class="block w-full" />
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                </div>
                <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" class="block w-full" />
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
                </div>
                <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>

            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

            <!-- Texte descriptifs -->
        <div class="descriptif__slide--text">
            <h1>Au rez-de-chaussée :</h1>
            <ul>
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

    </div>

    <!----------------- 1er ETAGE -------------------------->

    <div class="descriptif__slide pb-4">

        <h1>Rez-de-chaussée</h1>

        <div class="descriptif__slide--rezchausse">

        <!--Debut du slide -->
        <div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative taille"
  data-bs-ride="carousel"
>
  <!-- Indicators -->
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner relative w-full overflow-hidden">
    <!-- Single item -->
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        class="block w-full"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        class="block w-full"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            <!-- Texte descriptifs -->
        <div class="descriptif__slide--text">
            <h1>Au rez-de-chaussée :</h1>
            <ul>
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

    </div>

    <!------------------- Le jardin ------------------------------------->
    <div class="descriptif__slide pb-4">

        <h1>Rez-de-chaussée</h1>

        <div class="descriptif__slide--rezchausse">

        <!--Debut du slide -->

        <div id="carouselExampleSlidesOnly" class="carousel slide relative carousel-fade taille" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item relative float-left w-full">
      <img
        src="../assets/RezDeChaussee/rdc1.jpg"
        class="block w-full"
        alt="Exotic Fruits"
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
</div>


            <!-- Texte descriptifs -->
        <div class="descriptif__slide--text">
            <h1>Au rez-de-chaussée :</h1>
            <ul>
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

    </div>
 

<!----------------------------------------------------------->


<!---------------------------------------------------------------->

<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!------------------------------------------------------------------>
    
<!------------------------------------------------------------------->

    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .descriptif{ 
        width: 80%;
        margin: auto;

        &__slide{ 
            //background: #fff;
            color: #000;
            width: auto;

            &--rezchausse{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            background: #fff;
            

            .taille{
                width: 70%;
            }
        }

        &--text{ 
            //background: #fff;
            //padding: 1.6em;
            width: 30%;
        }

        }

        
    }
</style>