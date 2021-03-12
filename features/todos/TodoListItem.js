import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as TimesSolid } from './times-solid.svg'
import 'react-toastify/dist/ReactToastify.css';
import { availableCategorys, capitalize } from '../filters/categorys'
import {
  todoCategorySelected,
  todoDeleted,
  todoToggled,
  selectTodoById,
} from './todosSlice'
import { toast } from 'react-toastify';
toast.configure()
const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed, category } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id))
    toast.success('Task Successfully completed');
  }

  const handleCategoryChanged = (e) => {
    const category = e.target.value
    dispatch(todoCategorySelected(todo.id, category))
  }

  const onDelete = () => {
    dispatch(todoDeleted(todo.id))
    toast.error('Successfully deleted');
  }

  const categoryOptions = availableCategorys.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="categoryPicker"
            value={category}
            style={{ category }}
            onChange={handleCategoryChanged}
          >
            <option value=""></option>
            {categoryOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
