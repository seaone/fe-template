import useSWR, { KeyedMutator } from 'swr'
import { getServices } from '../../../config/di'
import { TodoList } from '../../../domain/entity/todo'

export interface UseTodoListApi {
  isLoading: boolean
  mutate: KeyedMutator<TodoList>
  todoList: TodoList
}

export function useTodoList(): UseTodoListApi {
  const { data, isValidating, mutate } = useSWR('todo-list', () =>
    getServices().getTodoList.invoke()
  )

  return {
    isLoading: isValidating,
    mutate,
    todoList: data ?? [],
  }
}
