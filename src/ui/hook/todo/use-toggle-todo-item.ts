import { getServices } from '../../../config/di'
import { Todo } from '../../../domain/entity/todo'
import { useTodoList } from './use-todo-list'

export interface UseToggleTodoItemApi {
  toggleTodoItem: (todo: Todo) => void
}

export function useToggleTodoItem(): UseToggleTodoItemApi {
  const { todoList, mutate } = useTodoList()

  return {
    toggleTodoItem: async (updatedTodo: Todo) => {
      await getServices().updateTodo.invoke(updatedTodo)

      mutate(() => {
        return todoList.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo
          }
          return todo
        })
      })
    },
  }
}
