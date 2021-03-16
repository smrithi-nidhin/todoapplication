import React from 'react'

import Header from './features/header/Header'
import TodoList from './features/todos/TodoList'
import Footer from './features/footer/Footer'

import Login from "./features/todos/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav>
       
      </nav>
      {/* <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main> */}
      <Router>
      <div className="App" > 
      <Switch>
        
        <Route exact path="/" 
        render={() => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )}
        ></Route>
        <div className="todo-app container"  style={{ width: "800px" }}>
        <Route exact path="/inputadd"  render={() => (
          <React.Fragment>
           <div > 
           <h1 style={{ textDecoration: "underline" }}> Todos App</h1></div>
           <Header />
            <TodoList />
            <Footer />
          </React.Fragment>
        )}>
         
        </Route></div>
      
      </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App
