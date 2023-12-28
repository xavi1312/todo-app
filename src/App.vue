<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './components/todo-item.vue'

const isCompleted = ref(true)
</script>

<template>
  <TodoItem
    label="Complete online Javascript course"
    value="todo"
    :is-completed="isCompleted"
    @update:is-completed="isCompleted = $event"
  />
</template>

<style scoped>

</style>
