import { TodoId } from '../../../domain/entity/todo'
import { TodoRepository } from '../../repository/todo-repository'

interface Deps {
  todoRepository: TodoRepository
}

export class DeleteTodo {
  protected todoRepository: TodoRepository

  constructor({ todoRepository }: Deps) {
    this.todoRepository = todoRepository
  }

  invoke(id: TodoId) {
    return this.todoRepository.deleteTodo(id)
  }
}
