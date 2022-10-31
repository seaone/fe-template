import { Todo } from '../../domain/entity/todo'
import { RawTodo } from './todo-api'

export const mapRawTodoToDomain = (raw: RawTodo): Todo => {
  return {
    id: raw.id,
    title: raw.description,
    isCompleted: raw.is_completed,
  }
}

export const mapDomainTodoToRaw = (todo: Todo): RawTodo => {
  return {
    id: todo.id,
    description: todo.title,
    is_completed: todo.isCompleted,
  }
}
