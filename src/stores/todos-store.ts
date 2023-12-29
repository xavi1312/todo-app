import { computed, readonly, ref } from 'vue'
import { Todo } from '../types/todo'

const todos = ref<Todo[]>([
  {
    id: crypto.randomUUID(),
    label: 'Complete online JavaScript course',
    isCompleted: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Job around the park 3x',
    isCompleted: false
  },
  {
    id: crypto.randomUUID(),
    label: '10 minutes meditation',
    isCompleted: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Read for 1 hour',
    isCompleted: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Pick up groceries',
    isCompleted: false
  },
  {
    id: crypto.randomUUID(),
    label: 'Complete Todo App on Frontend Mentor',
    isCompleted: false
  }
])

export function useTodosStore () {
  function addTodo (todo: Todo) {
    todos.value = [...todos.value, todo]
  }

  function deleteTodo (id: Todo['id']) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  function deleteAllCompletedTodos () {
    todos.value = todos.value.filter(({ isCompleted }) => !isCompleted)
  }

  function setCompleted (id: Todo['id'], isCompleted: Todo['isCompleted']) {
    todos.value = todos.value.map((todo) => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isCompleted
      }
    })
  }

  const completedTodos = computed(() => todos.value.filter(({ isCompleted }) => isCompleted))
  const activeTodos = computed(() => todos.value.filter(({ isCompleted }) => !isCompleted))
  const itemsLeft = computed(() => activeTodos.value.length)

  return {
    allTodos: readonly(todos),
    completedTodos,
    activeTodos,
    itemsLeft,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
    setCompleted
  }
}
