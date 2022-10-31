import { Todo } from '../../../domain/entity/todo'
import { TodoRepository } from '../../repository/todo-repository'

interface Deps {
  todoRepository: TodoRepository
}

export class UpdateTodo {
  protected todoRepository: TodoRepository

  constructor({ todoRepository }: Deps) {
    this.todoRepository = todoRepository
  }

  invoke(updatedTodo: Todo) {
    return this.todoRepository.updateTodo(updatedTodo)
  }
}
