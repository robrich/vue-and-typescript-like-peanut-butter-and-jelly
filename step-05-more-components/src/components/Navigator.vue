<template>
  <v-card
    class="mx-auto mt-10"
    max-width="344"
  >
    <v-card-title>
      Navigator
    </v-card-title>

    <v-card-text>
      <p>Check if we can use Vue Router from a component in two means:</p>
      <div>
        <v-btn to="/">link</v-btn>
        <v-btn @click="navigate">programatically</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  methods: {

    navigate() {
      this.$router.push('/');
    }

  }
});
</script>

<style scoped>
</style>
