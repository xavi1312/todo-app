<script setup lang="ts">
import TodoInput from './components/todo-input.vue'
import TodoList from './components/todo-list.vue'
</script>

<template>
  <picture>
    <source
      srcset="/images/bg-desktop-dark.webp"
      media="(prefers-color-scheme: dark) and (min-width: 1024px)"
    >
    <source
      srcset="/images/bg-desktop-light.webp"
      media="(prefers-color-scheme: light) and (min-width: 1024px)"
    >
    <source
      srcset="/images/bg-mobile-dark.webp"
      media="(prefers-color-scheme: dark)"
    >
    <source
      srcset="/images/bg-mobile-light.webp"
      media="(prefers-color-scheme: light)"
    >
    <img
      src="/images/bg-mobile-light.webp"
      alt="background image"
    >
  </picture>
  <main>
    <div class="container">
      <header>
        <h1>todo</h1>
      </header>
      <section>
        <TodoInput class="todo-input" />
        <TodoList />
      </section>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;

  position: absolute;
  z-index: -1;
}
header {
  display: flex;
}
h1 {
  flex: 1;

  padding: 50px 0;
  margin: 0;

  font-size: 50px;
  font-weight: 600;
  letter-spacing: 12px;
  text-transform: uppercase;
  color: var(--color-very-light-gray);
}
.container {
  max-width: 563px;
  padding: 0 23px;
  margin: 0 auto;
}
.todo-input {
  margin-bottom: 16px;
}
@media screen and (min-width: 1024px) {
  h1 {
    padding: 60px 0;
  }
  .todo-input {
    margin-bottom: 24px;
  }
}
</style>
