<template>
  <v-card
    class="mx-auto mt-10"
    max-width="344"
  >
    <v-card-text>
      <v-row align="center">
        <v-row justify="space-around">
          <v-switch v-model="formvalid" class="ma-4" label="Form is Valid" readonly></v-switch>
          <v-switch v-model="lazyevaluation" class="ma-4" label="Lazy Evaluation"></v-switch><!-- only show visible validation fails -->
        </v-row>
        <v-form
          ref="form"
          v-model="formvalid"
          :lazy-validation="lazyevaluation"
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!formvalid"
            color="success"
            class="mr-4"
            type="submit"
          >
            Submit
          </v-btn>

          <v-btn
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { VForm } from '@/types';

function required(field: string) {
  return (v: string): string | boolean => !!v || `${field} is required`;
}

function minLength(field: string, length: number) {
  return (v: string): string | boolean => (v && v.length <= length) || `${field} must be 10 characters or less`;
}

function email(field: string) {
  return (v: string) => /.+@.+\..+/.test(v) || `${field} must be valid`;
}


export default Vue.extend({

  data: () => ({
    formvalid: true,
    lazyevaluation: false,
    name: '',
    nameRules: [
      required('name'),
      minLength('name', 10)
    ],
    email: '',
    emailRules: [
      required('email'),
      email('name')
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  computed: {
    form(): VForm {
      return this.$refs.form as VForm;
    }
  },

  methods: {

    validate() {
      const valid = this.form.validate();
      console.log(`validate: ${valid}`);
    },

    reset() {
      this.form.reset();
    },

    resetValidation() {
      this.form.resetValidation();
    },

    submit() {
      const valid = this.form.validate();
      console.log(`submitted: ${valid}`);
    }
  }

});
</script>
