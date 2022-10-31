import { useState } from 'react'
import { getServices } from '../../../config/di'
import { TodoId } from '../../../domain/entity/todo'
import { useTodoList } from './use-todo-list'

export interface UseDeleteTodoItemApi {
  deleteTodoItem: (id: TodoId) => void
  isLoading: boolean
}

export function useDeleteTodoItem(): UseDeleteTodoItemApi {
  const { todoList, mutate } = useTodoList()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return {
    deleteTodoItem: async (id: TodoId) => {
      setIsLoading(true)

      await getServices().deleteTodo.invoke(id)

      mutate(() => {
        return todoList.filter((todo) => todo.id !== id)
      })

      setIsLoading(false)
    },
    isLoading,
  }
}
