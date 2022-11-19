<template>
  <div class="pt-16 reservation">
    <div class="w-1/3 m-auto reservation__iframe">
      <iframe 
        style="overflow:auto; -webkit-overflow-scrolling:touch;border:none;" 
        width="100%"
        height="550"
        src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=resa&nbmois=6&nbmoisLigne=3">
      </iframe>
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

    &__iframe{ 
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