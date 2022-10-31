import { useCreateTodoController } from './use-create-todo-controller'

export function CreateTodo() {
  const { isLoading, onChange, onSubmit, title } = useCreateTodoController()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(title)
      }}
    >
      <input onChange={onChange} type="text" value={title} />{' '}
      <button disabled={isLoading}>Add</button>
    </form>
  )
}
