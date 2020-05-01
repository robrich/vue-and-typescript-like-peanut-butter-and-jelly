import { Component } from 'vue';

export type VForm = HTMLFormElement & Component & {
  validate: () => boolean;
  reset: () => void;
  resetValidation: () => void;
};
