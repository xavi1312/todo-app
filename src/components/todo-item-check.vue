<script setup lang="ts">
import IconCheck from './icons/icon-check.vue'

interface Props {
  isCompleted: boolean
}
interface Emits {
  (ev: 'change', isCompleted: Props['isCompleted']): void
}
defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div
    class="todo-item-check"
    :class="{'todo-item-check--is-completed': isCompleted}"
    @click="$emit('change', !isCompleted)"
  >
    <div class="todo-item-check__inner">
      <IconCheck />
    </div>
  </div>
</template>

<style scoped>
.todo-item-check {
  aspect-ratio: 1;
  width: 27px;
  height: 27px;

  padding: 2px;

  border-radius: 50%;
  background: var(--color-very-light-grayish-blue);
}
.todo-item-check__inner {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 50%;
  background: #fff;
  transition: background .2s;
}
.todo-item-check--is-completed {
  background: linear-gradient(120deg, var(--gradient));
  .todo-item-check__inner {
    background: inherit;
  }
}
</style>
