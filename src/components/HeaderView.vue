<template>
  <div class="flex justify-between header">
    <div>
        <!--<img src="../assets/Cormier/cormier_logo.png" alt="logo du cormier" class="h-full">-->
        <h1 class="header__title">Gite <br> 
          <span>Le Cormier</span> </h1>
    </div>

    <nav>
        <router-link to="/" class="hover:bg-orange-600">Accueil</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Liens</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Descriptifs</router-link>
        <router-link to="/arrive" class="hover:bg-orange-600">Comment arriver</router-link>
        <router-link to="/alentours" class="hover:bg-orange-600">Aux Alentours</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Livres d'or</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Page de réservation</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Tarifs</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{ 
  background: #dda15e;
  color: #fff;
  height: 7.5vh;
  font-family: 'Oleo Script Swash Caps', cursive;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100000;

  &__title{ 
    border: 3px solid #fff;
    border-radius: 25%;
    background: #fff;
    color: #bc6c25;
    //color: #0ead69;
    margin-left: 1em;
    padding: 0 1em;

    span{ 
      margin-left: 1em;
      color: red;
    }
  }

  nav{ 
    margin: auto;

  a{ 
    padding: 0 1.5em 0.5em 1.5em;
    align-items: center;

    &:hover{ 
      transition: 0.5s ease-in-out;
      transform: translateX(2em);
      font-size: 1.1em;
    }

    &.router-link-exact-active{ 
      border-bottom: 3px solid #fff;
    }

  }

  }
}

</style>