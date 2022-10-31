import { TodoRepository } from '../../repository/todo-repository'

interface Deps {
  todoRepository: TodoRepository
}

export class GetTodoList {
  protected todoRepository: TodoRepository

  constructor({ todoRepository }: Deps) {
    this.todoRepository = todoRepository
  }

  invoke() {
    return this.todoRepository.getTodoList()
  }
}
