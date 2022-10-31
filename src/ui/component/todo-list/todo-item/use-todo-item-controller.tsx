import { ChangeEvent, useState } from 'react'
import { Todo, TodoId } from '../../../../domain/entity/todo'
import { useDeleteTodoItem } from '../../../hook/todo/use-delete-todo-item'
import { useToggleTodoItem } from '../../../hook/todo/use-toggle-todo-item'

export interface UseTodoItemControllerApi {
  isChecked: boolean
  isLoading: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDeleteButtonClick: (id: string) => void
}

export interface UseTodoItemControllerProps {
  todo: Todo
}

export function useTodoItemController({
  todo,
}: UseTodoItemControllerProps): UseTodoItemControllerApi {
  const [isChecked, setIsChecked] = useState<boolean>(todo.isCompleted)
  const { toggleTodoItem } = useToggleTodoItem()
  const { deleteTodoItem, isLoading } = useDeleteTodoItem()

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    toggleTodoItem({ ...todo, isCompleted: isChecked })

    setIsChecked(isChecked)
  }

  const onDeleteButtonClick = (id: TodoId) => {
    deleteTodoItem(id)
  }

  return {
    isLoading,
    isChecked,
    onChange,
    onDeleteButtonClick,
  }
}
