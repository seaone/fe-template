import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../../../domain/entity/todo'
import { useCreateTodoItem } from '../../../hook/todo/use-create-todo-item'

export interface UseCreateTodoControllerApi {
  isLoading: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (title: string) => void
  title: string
}

export function useCreateTodoController() {
  const { isLoading, createTodoItem } = useCreateTodoItem()
  const [title, setTitle] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTitle(value)
  }

  const onSubmit = (title: string) => {
    if (title.trim().length === 0) {
      return
    }

    setTitle('')

    const todo: Todo = {
      id: uuidv4(),
      title: title.trim(),
      isCompleted: false,
    }

    createTodoItem(todo)
  }

  return {
    isLoading,
    onChange,
    onSubmit,
    title,
  }
}
