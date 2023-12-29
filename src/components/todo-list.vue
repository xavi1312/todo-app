<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoItem from './todo-item.vue'
import { useTodoStore } from '../stores/todo-store'
import CategoryList from './category-list.vue'
import { type Category } from '../types/category'

const activeFilter = ref<Category>('all')

const {
  allTodos, activeTodos, completedTodos, setCompleted,
  deleteTodo, deleteAllCompletedTodos, itemsLeft
} = useTodoStore()
const todos = computed(() => {
  if (activeFilter.value === 'active') return activeTodos.value
  if (activeFilter.value === 'completed') return completedTodos.value
  return allTodos.value
})
</script>

<template>
  <div class="todo-list box">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <TodoItem
          v-bind="todo"
          @update:is-completed="setCompleted(todo.id, $event)"
          @remove="deleteTodo(todo.id)"
        />
      </li>
    </ul>
    <footer class="todo-list__footer">
      <div class="todo-list__items-left">
        {{ itemsLeft }} items left
      </div>

      <CategoryList
        v-model="activeFilter"
        class="category-list-desktop"
      />

      <button
        class="button-clear-completed"
        @click="deleteAllCompletedTodos"
      >
        Clear Completed
      </button>
    </footer>
  </div>

  <CategoryList
    v-model="activeFilter"
    class="category-list-mobile box"
  />
</template>

<style scoped>
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
  font-weight: 600;

  padding: 20px 23px;
}
.todo-list__items-left {
  color: var(--color-dark-grayish-blue2);
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
.category-list-mobile {
  justify-content: center;
  align-items: center;

  padding: 18px;
  margin-top: 14px;
}
.category-list-desktop {
  display: none;
}

@media screen and (min-width: 1024px) {
  footer {
    font-size: 15px;
  }
  .category-list-mobile {
    display: none;
  }
  .category-list-desktop {
    display: flex;
  }
}
</style>
../stores/todo-store
