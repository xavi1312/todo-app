<script setup lang="ts">
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
      <TodoList />
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
  text-transform: uppercase;
  color: var(--color-very-light-gray);
}
.container {
  margin: 0 auto;
  max-width: 540px;
}
@media screen and (min-width: 1024px) {
  h1 {
    padding: 60px 0;
  }
}
</style>
