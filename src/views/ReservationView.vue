<template>
  <div class="pt-16 reservation pb-4">
    <div class="m-auto reservation__widget">

      <!----<iframe style='overflow:auto;-webkit-overflow-scrolling:touch;border:none;' height="1400" width='100%' src='https://widget.itea.fr/widget.php?key=vk3_8_ia&numgite=818&widget-itea=resa&nbmois=12&nbmois-ligne=3&clicsurcalendrier=1' ></iframe>


      <iframe style='overflow:auto;-webkit-overflow-scrolling:touch;border:none;' height='1400' width='100%' src='https://widget.itea.fr/widget.php?key=vk3_8_ia&numgite=818&widget-itea=dispo&nbmois=12&nbmois-ligne=3' ></iframe>-->

      <iframe style='overflow:auto;-webkit-overflow-scrolling:touch;border:none;' height='1200' width='100%' src='https://widget.itea.fr/widget.php?key=vk3_8_ia&numgite=818&widget-itea=dispo&nbmois=12&nbmois-ligne=3&clicsurcalendrier=1' ></iframe>

    </div>

    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .reservation{ 
    width: 100%;
    //height: 100vh;
    //background: orange;

    &__css{
      background: #af2;
      display: flex;
    }

    &__widget{ 
      width: 90%;
      color: #ccc;

      @media screen and (max-width: 768px) {
        width: 70%;
        margin: auto;
      }

      @media screen and (max-width: 550px) {
        width: 90%;
        margin: auto;
      }
    }
  }

</style>