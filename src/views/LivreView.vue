<template>
  <div class="pt-16 pb-4 livre">

    <!------- Insertion du widget pour la note globale ------------------------>

    <div class="iframe mr-4">
      <span class="p-2 ">Note globale sur le site de gite de France :</span>  
      <iframe style="overflow:auto; -webkit-overflow-scrolling:touch ;border:none" height="70" width="40%" src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis&affichequenoteglobale=1&sanscss=1" class="animate__tada"></iframe>
    </div>

    <!-- Insertion du widget avis -->
    <div class="avis">
      <iframe style="overflow:auto; -webkit-overflow-scrolling:touch ;border:none; border-radius: 0.5em;" height="1300" width="100%" src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis"></iframe>
    </div>
    

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .livre{
   width: 90%;
   margin: auto;
  }

  /*.avis{
    height: 100vh;
  }*/

  .iframe{
    background: #08a045;
    color: #fff;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    border-radius: 0.5em;
  }


  /**[data-widget-itea] {
    margin: 0 0 15px;
    padding: 10px;
    font-size: 14px;
    color: #333333;
    color: #fff;
    display: flex;
    flex-direction: row;

}*/

</style>