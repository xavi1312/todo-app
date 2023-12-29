<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoItem from './todo-item.vue'
import { useTodosStore } from '../stores/todos-store'

const activeFilter = ref<'all'|'active'|'completed'>('all')

const {
  allTodos, activeTodos, completedTodos, setCompleted,
  deleteTodo, deleteAllCompletedTodos, itemsLeft
} = useTodosStore()
const todos = computed(() => {
  if (activeFilter.value === 'active') return activeTodos.value
  if (activeFilter.value === 'completed') return completedTodos.value
  return allTodos.value
})
</script>

<template>
  <section class="todo-list">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <TodoItem
          v-bind="todo"
          has-remove
          @update:is-completed="setCompleted(todo.id, $event)"
          @remove="deleteTodo(todo.id)"
        />
      </li>
    </ul>
    <footer class="todo-list__footer">
      <div class="todo-list__items-left">
        {{ itemsLeft }} items left
      </div>

      <div class="filters-container">
        <button
          class="filter"
          :class="{'filter--is-active': activeFilter === 'all'}"
          @click.prevent="activeFilter = 'all'"
        >
          All
        </button>
        <button
          class="filter"
          :class="{'filter--is-active': activeFilter === 'active'}"
          @click.prevent="activeFilter = 'active'"
        >
          Active
        </button>
        <button
          class="filter"
          :class="{'filter--is-active': activeFilter === 'completed'}"
          @click.prevent="activeFilter = 'completed'"
        >
          Completed
        </button>
      </div>

      <button
        class="button-clear-completed"
        @click="deleteAllCompletedTodos"
      >
        Clear Completed
      </button>
    </footer>
  </section>
</template>

<style scoped>
.todo-list {
  margin: 0 auto;
  margin-top: 40px;
  max-width: 540px;

  overflow: hidden;
  border-radius: 8px;

  box-shadow: 0 38px 65px -12px rgba(0,0,0,0.16);
}
ul {
  margin: 0;
  padding-left: 0;

  list-style: none;
}

li {
  border-bottom: 1px solid var(--color-light-grayish-blue2);
}

footer {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;

  padding: 20px 23px;
}
.todo-list__items-left {
  color: var(--color-dark-grayish-blue2);
}

.filters-container {
  display: flex;
  gap: 15px;
}
.filter {
  display: inline-block;
  padding: 0;

  text-decoration: none;
  color: var(--color-dark-grayish-blue2);

  background-color: transparent;
  border: none;
}
.filter:hover:not(.filter--is-active) {
  color: var(--color-very-dark-grayish-blue3);
}
.filter--is-active {
  color: var(--color-bright-blue);
}
.button-clear-completed {
  padding: 0;
  color: var(--color-dark-grayish-blue2);
  border: none;
  background-color: transparent;
}
.button-clear-completed:hover {
  color: var(--color-very-dark-grayish-blue3);
}
</style>
