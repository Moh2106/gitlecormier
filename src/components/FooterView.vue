<template>
  <div class="footer flex justify-around">
    <div>
        <p class="mt-9"><font-awesome-icon icon="fa-solid fa-user-secret"/> 1 rue du cormier 27350 Hauville</p>
    </div>

    <div>
        <h1 class="mb-5 a">Nous contacter sur : </h1>

        <div class="flex justify-between contact">
            <div class="mr-36 scroll-mr-36">
                <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 2 32 42 40 23</p>
                <p> <font-awesome-icon icon="fa-solid fa-phone" class=" text-2xl pr-4"/> 00 33 6 50 04 73 88</p>
            </div>

            <div class="flex justify-around ">
                <p class="px-8">
                    <a href="https://www.facebook.com/gitelecormier/" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-facebook" class=" text-2xl hover:bg-blue-700 hover:scale-125 b"/></a>
                </p>

                <p>
                    <a href="https://maps.app.goo.gl/kHyGBUjkW6jomJoz8" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-solid fa-location-dot" class="text-2xl hover:scale-125 " /></a>
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
        background: #bc6c25;
        height: 30vh;
        color: #fff;

        @media screen and (max-width : 768px) {
            display: block;
        }

        .contact{ 

            @media screen and (max-width : 768px) {
                width: 90%;
                margin: auto;
                justify-content: space-around;
            }
            
        }

        .a{ 
            @media screen and (max-width : 768px) {
                margin: 2em 0;
            }
            
        }
        .b{
            &:hover{ 
                    border-radius: 0.5em;
                }
        }

    }
</style>