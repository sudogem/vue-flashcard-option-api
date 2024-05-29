<template>
  <div id="app">
    <h1>Flashcard App</h1>
    <div class="flashcards">
      <Flashcard
        v-for="flashcard in flashcards"
        :key="flashcard.id"
        :question="flashcard.question"
        :answer="flashcard.answer"
      />
    </div>
  </div>
</template>

<script setup>
import Flashcard from './components/Flashcard.vue';

const flashcards = [
  {
    id: 1,
    question: 'What is Vue.js?',
    answer: 'A progressive JavaScript framework for building user interfaces.',
  },
  {
    id: 2,
    question: 'What is Pinia?',
    answer: 'A state management library for Vue.js.',
  },
];
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flashcards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>