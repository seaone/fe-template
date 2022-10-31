export type TodoId = string

export interface Todo {
  id: TodoId
  title: string
  isCompleted: boolean
}

export type TodoList = Todo[]
