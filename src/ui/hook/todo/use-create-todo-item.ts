import { useState } from 'react'
import { getServices } from '../../../config/di'
import { Todo } from '../../../domain/entity/todo'
import { useTodoList } from './use-todo-list'

export interface UseCreateTodoItemApi {
  createTodoItem: (todo: Todo) => void
  isLoading: boolean
}

export function useCreateTodoItem(): UseCreateTodoItemApi {
  const { todoList, mutate } = useTodoList()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return {
    createTodoItem: async (newTodo: Todo) => {
      setIsLoading(true)

      await getServices().createTodo.invoke(newTodo)

      mutate(() => {
        return [...todoList, newTodo]
      })

      setIsLoading(false)
    },
    isLoading,
  }
}
