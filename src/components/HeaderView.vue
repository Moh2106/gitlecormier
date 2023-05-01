<template class="relative">
  <div class="flex justify-between header ">
    <div class="first ">
        <h1 class="header__title ">Gite <br> 
          <span>Le Cormier </span> 
        </h1>
    </div>

    <nav id="afficheMenu" class="a">
        <router-link to="/" v-on:click="supprimerMenu">Accueil</router-link>
        <!--<router-link to="/liens" v-on:click="supprimerMenu">Liens</router-link>-->
        <router-link to="/descriptifs" >Descriptifs</router-link>
        <router-link to="/comment-arriver" >Comment arriver</router-link>
        <router-link to="/alentours" >Aux Alentours</router-link>
        <router-link to="/livredor" >Livres d'or</router-link>
        <router-link to="/tarifs" >Tarifs</router-link>
        <router-link to="/reservation" >Page de réservation</router-link>
    </nav>

    <div class="header__menu" >
      <font-awesome-icon icon="fa-solid fa-bars" v-on:click="afficheMenu" />
    </div>

  </div>
</template>

<script>

export default {
  setup(){ 
    var afficheMenu = () => {
      var e = document.getElementById("afficheMenu")
      e.classList.toggle('isActive')
      

    }

    var supprimerMenu = () => { 
      var nav = document.querySelectorAll(".nav__link")
      var e = document.getElementById("afficheMenu")
      console.log(nav)

      nav.forEach( el => {
        //element.contains(nav).classList.remove('isActive')
        el.addEventListener('click', () => { 
          e.classList.remove('isActive')
        })
        
      });
      
    }
    
    return{ 
      afficheMenu,
      supprimerMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  color: #fff;
  backdrop-filter: contrast(40%) brightness(90%) blur(10px);
  height: 7.5vh;
  font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100000;

  @media screen and (max-width : 768px) {
    display: block;
  }

  @media screen and (max-width : 550px) {
    display: flex;
    font-family: 'Poppins', sans-serif;
  }

  .first{ 

    @media screen and (max-width : 768px) {
      background: #fff;
    }

    @media screen and (max-width : 550px) {
      background: #dda15e;
    }
    
  }

  &__title{ 
    border: 3px solid #fff;
    border-radius: 25%;
    background: #fff;
    color: #bc6c25;
    margin-left: 1em;
    padding: 0 1em;

    @media screen and (max-width : 768px) {
      width: 25%;
      margin: auto;
      border: 3px solid #bc6c25;
    }

    @media screen and (max-width : 550px) {
      width: 100%;
    }

    span{ 
      margin-left: 1em;
      color: red;
    }
  }

  &__menu{ 
    display: none;

    @media screen and (max-width : 550px) {
      font-size: 2em;
      font-weight: 900;
      margin-right: 0.5em;
      z-index: 1000;
      display: block;
    }
  }

  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-2em);
    position: relative;

    @media screen and (max-width : 768px) {
      padding: 0 0.5em 0.5em 0.5em;
      font-size: 0.8em;
      background: #dda15e;
      width: auto;
    }

    @media screen and (max-width : 550px) {
      display: block;
      background: rgb(112, 7, 165);
      width: 50%;
      position: absolute;
      left: 600px;
      transition: .30s ease-in-out;
      border-radius: 0.2em;
      opacity: 0;
      font-size: 1em;
      font-weight: 600;
    }


  a{ 
    padding: 0 1.5em 0.5em 1.5em;
    align-items: center;

    @media screen and (max-width : 768px) {
      padding: 0 0.5em 0.5em 0.5em;
      font-size: 0.8em;
    }

    @media screen and (max-width : 550px) {
      display: block;
    }

    &:hover{ 
      transition: 0.5s ease-in-out;
      transform: scale3d(1em);
      font-size: 1.05em;
      background: #08a045;
      border-radius: 0.5em;

      @media screen and (max-width : 768px) {
        transform: translateX(0.2em);
        font-size: 0.8em;
      }
    }

    &.router-link-exact-active{ 
      border-bottom: 3px solid #fff;
      font-weight: 700;
      background: #08a045;
      border-radius: 0.5em;

      @media screen and (max-width : 768px) {
        border-bottom: 2px solid #fff;

      }
    }

  }

  }
}

.a.isActive{
  position: absolute;
  left: 195px;
  top: 5px;
  opacity: 1;
}

</style>