import React from 'react'
import NavBar from './NavBar'
import TodoList from './TodoList'
import TodoContext from './contexts/TodoContext'

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <NavBar />
        <TodoList />
      </div>
    </TodoContext>
  )
}

export default App
