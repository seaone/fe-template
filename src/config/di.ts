import { asClass, createContainer } from 'awilix'
import { TodoRepository } from '../application/repository/todo-repository'
import { CreateTodo } from '../application/use-case/todo/create-todo'
import { DeleteTodo } from '../application/use-case/todo/delete-todo'
import { GetTodoList } from '../application/use-case/todo/get-todo-list'
import { UpdateTodo } from '../application/use-case/todo/toggle-todo'
import { TodoApi } from '../infrastructure/api/todo-api'

export interface DIContainer {
  todoRepository: TodoRepository
  updateTodo: UpdateTodo
  deleteTodo: DeleteTodo
  getTodoList: GetTodoList
  createTodo: CreateTodo
}

export const container = createContainer<DIContainer>()

export const getServices = () => container.cradle

container.register({
  todoRepository: asClass(TodoApi).scoped(),
  updateTodo: asClass(UpdateTodo).scoped(),
  deleteTodo: asClass(DeleteTodo).scoped(),
  getTodoList: asClass(GetTodoList).scoped(),
  createTodo: asClass(CreateTodo).scoped(),
})
