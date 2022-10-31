import { CreateTodo } from './create-todo/create-todo'
import { TodoItem } from './todo-item/todo-item'
import { useTodoListController } from './use-todo-list-controller'

export function TodoList(): JSX.Element {
  const { isLoading, todoList } = useTodoListController()

  return (
    <ul>
      <li>
        <CreateTodo />
      </li>

      {isLoading && todoList.length === 0 && <div>Loading...</div>}

      {todoList.length > 0 &&
        todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          )
        })}
    </ul>
  )
}
