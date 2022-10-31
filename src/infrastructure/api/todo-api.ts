import { TodoRepository } from '../../application/repository/todo-repository'
import { Todo, TodoId, TodoList } from '../../domain/entity/todo'
import { mapDomainTodoToRaw, mapRawTodoToDomain } from './todo-mapper'

export interface RawTodo {
  id: string
  description: string
  is_completed: boolean
}

export class TodoApi implements TodoRepository {
  private rawTodoList: RawTodo[] = [
    {
      id: '0',
      is_completed: false,
      description: 'Prove that Beemo does weird junk when nobody is around',
    },
    { id: '1', is_completed: false, description: 'Cut fingernail' },
    { id: '2', is_completed: false, description: 'Punching class: 6pm' },
    { id: '3', is_completed: false, description: 'Haiku' },
    { id: '4', is_completed: false, description: 'Find missing thermos' },
  ]

  updateTodo(updatedTodo: Todo): Promise<Todo> {
    return new Promise((resolve) => {
      this.rawTodoList = this.rawTodoList.map((rawTodo) => {
        if (rawTodo.id === updatedTodo.id) {
          return mapDomainTodoToRaw(updatedTodo)
        }

        return rawTodo
      })

      setTimeout(() => {
        resolve(updatedTodo)
      }, 500)
    })
  }

  deleteTodo(id: TodoId): Promise<void> {
    return new Promise((resolve) => {
      this.rawTodoList = this.rawTodoList.filter((raw) => raw.id !== id)

      setTimeout(() => {
        resolve()
      }, 500)
    })
  }

  getTodoList(): Promise<TodoList> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = this.rawTodoList.map(mapRawTodoToDomain)
        resolve(result)
      }, 1000)
    })
  }

  createTodo(todo: Todo): Promise<Todo> {
    return new Promise((resolve) => {
      const rawTodo = mapDomainTodoToRaw(todo)

      this.rawTodoList = [...this.rawTodoList, rawTodo]

      setTimeout(() => {
        resolve(todo)
      }, 500)
    })
  }
}
