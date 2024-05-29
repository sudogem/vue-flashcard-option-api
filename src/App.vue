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
import { ref, computed } from 'vue';

import { useFlashcardsStore } from './stores/flashcards';
import Flashcard from './components/Flashcard.vue';

const flashcardsStore = useFlashcardsStore();

const flashcards = computed(() => flashcardsStore.flashcards);
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
