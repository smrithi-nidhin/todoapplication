import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveNewTodo } from '../todos/todosSlice'
import { toast } from 'react-toastify';
toast.configure()
const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      dispatch(saveNewTodo(trimmedText))
        toast.success('Successfully added');
      setText('')
    }
  }

  return (
    <header className="header">
      <input
        className="new-todo" 
        placeholder="Enter your Todos...."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header
