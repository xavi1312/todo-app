import { type Todo } from '../types/todo'

export function createTodo (todo: Omit<Todo, 'id'>): Todo {
  return {
    ...todo,
    id: crypto.randomUUID()
  }
}
