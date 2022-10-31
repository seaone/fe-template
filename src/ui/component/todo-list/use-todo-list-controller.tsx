import { TodoList } from '../../../domain/entity/todo'
import { useTodoList } from '../../hook/todo/use-todo-list'

export interface UseTodoListControllerApi {
  isLoading: boolean
  todoList: TodoList
}

export function useTodoListController(): UseTodoListControllerApi {
  const { isLoading, todoList } = useTodoList()

  return {
    isLoading,
    todoList,
  }
}
