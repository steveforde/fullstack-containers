import { useEffect, useState } from 'react'
import axios from '../util/apiClient'

import List from './List'
import Form from './Form'

const TodoView = () => {
  const [todos, setTodos] = useState([])

  const refreshTodos = async () => {
    const { data } = await axios.get('/todos')
    const todoList = Array.isArray(data) ? data : (data.todos || [])
    setTodos(todoList)
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  const createTodo = async (todo) => {
    const { data } = await axios.post('/todos', todo)
    const newTodo = data.todo || data
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodo = async (todo) => {
    await axios.delete(`/todos/${todo.id || todo._id}`)
    refreshTodos()
  }

  const completeTodo = async (todo) => {
    await axios.put(`/todos/${todo.id || todo._id}`, {
      text: todo.text,
      done: true
    })
    refreshTodos()
  }

  return (
    <>
      <h1>My Todo App</h1>
      <Form createTodo={createTodo} />
      <List todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </>
  )
}

export default TodoView