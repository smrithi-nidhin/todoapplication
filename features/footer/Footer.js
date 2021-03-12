import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { availableCategorys, capitalize } from '../filters/categorys'
import {
  StatusFilters,
  categoryFilterChanged,
  statusFilterChanged,
} from '../filters/filtersSlice'
import {
 
  selectTodos,
} from '../todos/todosSlice'

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Category</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const CategoryFilters = ({ value: categorys, onChange }) => {
  const renderedCategorys = availableCategorys.map((category) => {
    const checked = categorys.includes(category)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(category, changeType)
    }

    return (
      <label key={category}>
        <input
          type="checkbox"
          name={category}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="category-block"
          style={{
            backgroundColor: category,
          }}
        ></span>
        {capitalize(category)}
      </label>
    )
  })

  return (
    <div className="filters categoryFilters">
      <h5>Filter by Status</h5>
      <form className="categorySelection">{renderedCategorys}</form>
    </div>
  )
}

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = selectTodos(state).filter(
      (todo) => !todo.completed
    )
    return uncompletedTodos.length
  })

  const { status, categorys } = useSelector((state) => state.filters)


  const onCategoryChange = (category, changeType) =>
    dispatch(categoryFilterChanged(category, changeType))

  const onStatusChange = (status) => dispatch(statusFilterChanged(status))

  return (
    <footer className="footer">
     
      <StatusFilter value={status} onChange={onStatusChange} />
      <CategoryFilters value={categorys} onChange={onCategoryChange} />
    </footer>
  )
}

export default Footer
