<template>
  <div class="pt-16">
    <div class="flex flex-wrap w-4/5 mx-auto">
      <div v-for="tarif in tarifs" :key="tarif.id" class="w-1/3 ">
        <div class="bg-slate-100 m-4 h-3/4 rounded-lg ">
          <h1 v-text="tarif.saison" class="bg-green-700 text-yellow-50 "></h1>
          <p v-text="tarif.date"></p>
          <p v-text="tarif.prix" class=" bg-green-600 text-white"></p>
        </div>
        
      </div>
    </div>

    <!--<div>
      <div data-widget-itea="dispo" data-key="vk3_8_ia" data-numgite="818" data-sanscss=1 data-nbmois=6 data-nbmois-ligne=3></div>
    </div>-->

    <!----<div>
      <div data-widget-itea="promos" data-key="vk3_8_ia" data-numgite="818"></div>
    </div>-->

    <iframe style="overflow:auto; -webkit-overflow-scrolling:touch;border:none" height="500" width="100%" src="https://widget.itea.fr/widget.php?key=vk3_8_ia&numGite=818&widget-itea=dispo&nbmois=6&nbmoisLigne=3"></iframe>

    
  </div>
</template>

<script>
export default {

  setup(){ 
    const tarifs = { 
    tarif1 : { 
      id: 1,
      saison: 'TRES HAUTE SAISON ETE',
      date: 'Du 18 juillet au 15 août',
      prix: '440 €',
    },

    tarif2 : { 
      id: 2,
      saison: 'HAUTE SAISON ETE',
      date: '4 juillet au 18 juillet et 15 août au 22 août',
      prix: '420 €',
    },

    tarif3 : { 
      id: 3,
      saison: 'MOYENNE SAISON',
      date: '2 mai au 4 juillet et 22 août au 26 septembre',
      prix: '270 €',
    },

    tarif4 : { 
      id: 4,
      saison: 'VACANCES NOEL',
      date: '21 décembre au 4 janvier',
      prix: '100 €',
    },

    tarif5 : { 
      id: 5,
      saison: 'VACANCES FEVRIER',
      date: '8 février au 7 mars',
      prix: '100 €',
    },

    tarif6 : { 
      id: 6,
      saison: 'HIVER',
      date: '4 janvier au 8 février et 7 mars au 4 avril 2020',
      prix: '100 €',
    },

    tarif7 : { 
      id: 7,
      saison: 'VACANCES TOUSSAINT',
      date: '17 octobre au 31 octobre',
      prix: '100 €',
    },

    tarif8 : { 
      id: 8,
      saison: 'VACANCES PRINTEMPS',
      date: 'Du 4 avril au 2 mai',
      prix: '100 €',
    },

    tarif9 : { 
      id: 8,
      saison: 'BASSE SAISON',
      date: 'autres périodes',
      prix: '200 €',
    },

  }

  return{
    tarifs,
  }

  }
  
}
</script>

<style>

</style>