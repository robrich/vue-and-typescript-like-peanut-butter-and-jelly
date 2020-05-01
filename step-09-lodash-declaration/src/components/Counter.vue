<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-title>
      Counter
    </v-card-title>

    <v-card-text>
      <p>
        Current count: {{count}}
      </p>
      <div>
        <v-btn @click="add">+</v-btn>
        <v-btn @click="sub">-</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import Vue from 'vue';
import { random } from 'lodash';

export default Vue.extend({

  data() {
    return {
      count: random(0, 100)
    };
  },

  mounted() {
    this.$emit('countChanged', {count: this.count});
  },

  methods: {

    add() {
      this.count++;
      this.$emit('countChanged', {count: this.count});
    },

    sub() {
      this.count--;
      this.$emit('countChanged', {count: this.count});
    }

  }
});
</script>

<style scoped>
</style>
