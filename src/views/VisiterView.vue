<template>
  <div>
    <div>
        <GoogleMap 
            api-key="AIzaSyBUeHIupxp0Xs46su0HS87zMbKyS1KNIOo" 
            style="width: 100%; height: 500px" 
            :center="center" 
            :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>

    <div>
        <h1 class="text-white ">Bonjour</h1>
    </div>
  </div>
</template>

<script>
//import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
    components: { GoogleMap, Marker },

    setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
}
</script>

<style>

</style>