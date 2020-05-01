<template>
  <div class="about">
    <v-col
      class="mb-5"
      cols="12"
    >
      <h1>Vue Component Playground</h1>
      <p>This page is to add components and play with how they interact</p>
      <counter @countChanged="countChanged" />
      <p>{{count}}</p>
      <icon-playground />
      <navigator />
      <a-form />
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
import AForm from '@/components/AForm.vue';
import Counter from '@/components/Counter.vue';
import IconPlayground from '@/components/IconPlayground.vue';
import Navigator from '@/components/Navigator.vue';

export default Vue.extend({

  components: {
    AForm,
    Counter,
    IconPlayground,
    Navigator
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
