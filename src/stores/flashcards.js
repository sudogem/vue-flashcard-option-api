import { defineStore } from 'pinia';

export const useFlashcardsStore = defineStore('flashcards', {
  state: () => ({
    flashcards: [
      {
        id: 1,
        question: 'What is Vue.js?',
        answer: 'A progressive JavaScript framework for building user interfaces.',
      }, {
        id: 2,
        question: 'What is Pinia?',
        answer: 'A state management library for Vue.js.',
      }
    ],
  }),
  getters: {
    getFlashcards() {
      return this.flashcards
    }
  }
});
