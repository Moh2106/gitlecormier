<template>
  <div class="pt-16 pb-4 livre">

    <!------- Insertion du widget pour la note globale ------------------------>

    <div class="iframe">
      Note globale : <iframe style="overflow:auto; -webkit-overflow-scrolling:touch ;border:none" height="70" width="50%" src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis&affichequenoteglobale=1&sanscss=1" class=""></iframe>
    </div>

    <div data-key="vk3_8_ia" data-numgite="818" data-widget-itea="avis" ></div>

    <!-- Insertion du widget avis -->
    <div class="avis">
      <iframe style="overflow:auto; -webkit-overflow-scrolling:touch ;border:none" height="100%" width="100%" src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=avis"></iframe>
    </div>
    

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  /*.livre{
   
  }*/

  .avis{
    height: 100vh;
  }

  .iframe{
    background: #08a045;
    color: aliceblue;
    display: flex;
    flex-direction: row;
    font-size: 2em;
    width: 90%;
    margin-bottom: 0.5em;
  }

  /*.iframe.divContentWidget.div_recapAvisLibelle{
    background: red;
  }*/

  *[data-widget-itea] {
    margin: 0 0 15px;
    padding: 10px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #333333;
    background: #08a045;
    color: #fff;
    display: flex;
    flex-direction: row;

}



  /*.divContentWidget{
    background: red;
  }

  .div_recapAvisLibelle aTropheeClient{
    background: red;
  }*/
</style>