<template>
  <div class="footer flex justify-around">
    <div>
        <address>
            <h1>Adresse : </h1>
            <p class="mt-4"><font-awesome-icon icon="fa-solid fa-user-secret"/> 1 rue du cormier <br> 27350 Hauville</p>
        </address>
        
    </div>

    <div>
        <!----<h1 class="mb-5 a">Nous contacter sur : </h1>-->

        <div class="flex justify-between contact">
            <div class="mr-36 scroll-mr-36 contact__paragraph">
                <h1>Contact</h1>
                <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 2 32 42 40 23</p>
                <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 6 50 04 73 88</p>
            </div>

            <div>
                <h1 class="mb-4">Réseaux sociaux</h1>
                    <div class="flex justify-around contact__icons">
                        <p class="px-8" title="facebook ">
                            <a href="https://www.facebook.com/gitelecormier/" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl hover:bg-blue-700 hover:scale-125 b"/></a>
                        </p>


                    </div>
                
            </div>

            <div class="ml-20">
                <h1 class="mb-4">Google maps</h1>
                <p class="px-8" title="Google Maps">
                    <a href="https://goo.gl/maps/MNEXCNRCm6RrVQRD7">
                        <font-awesome-icon icon="fa-solid fa-location-dot" 
                        class="text-2xl hover:scale-125 b" />
                    </a>
                </p>
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

        .contact{ 

            @media screen and (max-width : 768px) {
                width: 90%;
                margin: auto;
                justify-content: space-around;
            }

            @media screen and (max-width : 550px) {
                width: 100%;
                display: block;

                &__paragraph{ 
                    width: 90%;
                    margin: auto;
                    margin: 1em;
                }

                &__icons{ 
                    display: block;

                    p{
                        display: inline;
                    }
                }
            }
            
        }

        .a{ 
            @media screen and (max-width : 768px) {
                margin: 2em 0;
            }

            @media screen and (max-width : 550px) {
                margin: 0.5em 0;
        }
            
        }
        .b{
            &:hover{ 
                    border-radius: 0.5em;
                }
        }

    }
</style>