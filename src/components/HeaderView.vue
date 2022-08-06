<template>
  <div class="flex justify-between header">
    <div>
        <!---<img src="" alt="">-->
        <h1>Gites le Cormier</h1>
    </div>

    <nav>
        <router-link to="/" class="hover:bg-orange-600">Accueil</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Liens</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Descriptifs</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Comment arriver</router-link>
        <router-link to="/about" class="hover:bg-orange-600">Aux Alentours</router-link>
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
  height: 5vh;
  font-family: 'Oleo Script Swash Caps', cursive;

  nav{ 
  a{ 
    padding: 0 1.5em;

    &:hover{ 
      transition: 0.5s ease-in-out;
      transform: translateX(2em);
      font-size: 1.1em;
    }

    &.router-link-exact-active{ 
      text-decoration: underline;
      text-decoration-color: #fff;
      transition: 0.5s ease-in-out;
    }

    
  }


  }
}



</style>