import { HTMLAttributes } from 'react'
import { Todo } from '../../../../domain/entity/todo'
import { useTodoItemController } from './use-todo-item-controller'

interface TodoItemProps extends HTMLAttributes<HTMLDivElement> {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const { title } = todo
  const { isChecked, isLoading, onChange, onDeleteButtonClick } = useTodoItemController({
    todo,
  })

  return (
    <div>
      <input checked={isChecked} onChange={onChange} type="checkbox" />
      {title}{' '}
      <button
        disabled={isLoading}
        onClick={() => {
          onDeleteButtonClick(todo.id)
        }}
        type="button"
      >
        delete
      </button>
    </div>
  )
}
