<template>
  <div class="about">
    <v-col
      class="mb-5"
      cols="12"
    >
      <h1>Vue Component Playground</h1>
      <p>This page is to add components and play with how they interact</p>
      <counter @count-changed="countChanged" />
      <p>{{count}}</p>
    </v-col>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Counter from '@/components/Counter.vue';

export default Vue.extend({

  components: {
    Counter
  },

  data() {
    return {
      count: '0'
    };
  },

  methods: {

    countChanged({ count }: { count: string }) {
      this.count = count;
    }

  }

});
</script>
