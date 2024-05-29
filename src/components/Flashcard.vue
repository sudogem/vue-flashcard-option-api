<template>
  <div class="flashcard" @click="toggle">
    <div class="flashcard__content">
      <p>{{ isFlipped ? answer : question }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'answer'],
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    toggle() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
.flashcard {
  width: 300px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.flashcard__content {
  text-align: center;
}
</style>