import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { loadState, saveState } from './features/localStorage'


// function saveToLocalStorage(state) {
// try{
//   const serializedState = JSON.stringify(state)
//   localStorage.setItem('state',serializedState)
// } catch(e) {
//   console.log(e)
// }
// }

// function loadFromLocalStorage(state) {
//   try{
//     const serializedState = localStorage.getItem('state')
//     if(serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch(e) {
//     console.log(e)
//     return undefined
//   }
//   }

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
 
)

//const persistedState = loadFromLocalStorage()
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composedEnhancer
   )

//store.subscribe(() => saveToLocalStorage(store.getState()))
export default store
