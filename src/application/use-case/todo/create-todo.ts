import { Todo } from '../../../domain/entity/todo'
import { TodoRepository } from '../../repository/todo-repository'

interface Deps {
  todoRepository: TodoRepository
}

export class CreateTodo {
  protected todoRepository: TodoRepository

  constructor({ todoRepository }: Deps) {
    this.todoRepository = todoRepository
  }

  invoke(todo: Todo) {
    return this.todoRepository.createTodo(todo)
  }
}
