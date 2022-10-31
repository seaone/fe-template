import { Todo, TodoId, TodoList } from '../../domain/entity/todo'

export interface TodoRepository {
  updateTodo: (updatedTodo: Todo) => Promise<Todo>
  deleteTodo: (id: TodoId) => Promise<void>
  getTodoList: () => Promise<TodoList>
  createTodo: (todo: Todo) => Promise<Todo>
}
