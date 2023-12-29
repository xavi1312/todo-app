<script setup lang="ts">
import { reactive } from 'vue'
import TodoItemCheck from './todo-item-check.vue'
import { createTodo } from '../utils/create-todo'
import { useTodoStore } from '../stores/todo-store'

const state = reactive<{isCompleted: boolean, name: string}>({
  isCompleted: false,
  name: ''
})

const { addTodo } = useTodoStore()
function onSubmit () {
  const newTodo = createTodo({ label: state.name, isCompleted: state.isCompleted })
  addTodo(newTodo)
  state.name = ''
  state.isCompleted = false
}
</script>

<template>
  <form
    action=""
    class="box"
    @submit.prevent="onSubmit"
  >
    <div
      class="todo-item"
      :class="{'todo-item--is-completed': state.isCompleted}"
    >
      <input
        v-model="state.isCompleted"
        type="checkbox"
        name="todo"
        :checked="state.isCompleted"
        class="todo-item__input"
        hidden
        aria-label="mark todo how completed"
      >
      <TodoItemCheck
        :is-completed="state.isCompleted"
        @change="state.isCompleted = $event"
      />

      <input
        v-model="state.name"
        type="text"
        placeholder="Create a new todo..."
      >
    </div>
  </form>
</template>

<style scoped>
form {
  box-shadow: none;
}
.todo-item {
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 20px;
  padding-right: 18px;
}
input[type="text"] {
  flex: 1;

  font: inherit;

  border: none;
  background: transparent;
}
.todo-item label:hover :deep(.todo-item-check) {
  background: linear-gradient(120deg, var(--gradient));
}
.todo-item__input {
  display: none;
}
.todo-item__remove {
  margin-left: auto;
  cursor: pointer;
  transition: opacity 0.3s;
}
.todo-item--is-completed {
  text-decoration: line-through;
  color: var(--color-dark-grayish-blue2);
}
.todo-item:hover .todo-item__remove {
  opacity: 1;
}

@media screen and (min-width: 1024px) {
  .todo-item__remove {
    opacity: 0;
  }
  .todo-item label{
    gap: 30px;
  }
}
</style>
../stores/todo-store
