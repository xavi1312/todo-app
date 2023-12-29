<script setup lang="ts">
import { type Category } from '../types/category'

interface Props {
  modelValue: Category
}
interface Emits {
  (ev: 'update:modelValue', newActiveFilter: Props['modelValue']): void
}
defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="filters-container">
    <button
      class="filter"
      :class="{'filter--is-active': modelValue === 'all'}"
      @click.prevent="$emit('update:modelValue','all')"
    >
      All
    </button>
    <button
      class="filter"
      :class="{'filter--is-active': modelValue === 'active'}"
      @click.prevent="$emit('update:modelValue','active')"
    >
      Active
    </button>
    <button
      class="filter"
      :class="{'filter--is-active': modelValue === 'completed'}"
      @click.prevent="$emit('update:modelValue','completed')"
    >
      Completed
    </button>
  </div>
</template>

<style scoped>
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
</style>
