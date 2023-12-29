<script setup lang="ts">
import TodoItemCheck from './todo-item-check.vue'
import IconX from './icons/icon-x.vue'

interface Props {
  label: string
  isCompleted: boolean
}
interface Emits {
  (ev: 'update:isCompleted', isCompleted: Props['isCompleted']): void
  (ev: 'remove'): void
}
defineProps<Props>()
const emit = defineEmits<Emits>()

function onChange (ev: Event) {
  const { checked } = ev.target as HTMLInputElement
  emit('update:isCompleted', checked)
}
</script>

<template>
  <div
    class="todo-item"
    :class="{'todo-item--is-completed': isCompleted}"
  >
    <label>
      <input
        type="checkbox"
        name="todo"
        :checked="isCompleted"
        class="todo-item__input"
        hidden
        @change="onChange"
      >
      <TodoItemCheck
        :is-completed="isCompleted"
        @change="$emit('update:isCompleted', isCompleted)"
      />
      {{ label }}

      <IconX
        class="todo-item__remove"
        width="14"
        height="14"
        role="button"
        aria-label="remove todo item"
        @click.stop="$emit('remove')"
      />
    </label>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;

  padding: 20px;
  padding-right: 18px;

  label {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 20px;
  }
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
