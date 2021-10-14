import { createStore, applyMiddleware, compose } from 'redux'
// import * as Actions from './Actions'
import rootReducer from './Reducers'

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers()
  // const store = createStore(reducer, /* preloadedState, */ compose(
  // applyMiddleware(Thunk)
)

// store.dispatch(Actions.addNewNote('hello', 'some discription here!'))
// store.dispatch(Actions.addNewNote('hi', 'some other discription here!'))
// store.dispatch(Actions.addNewNote('welcome', 'some other state here!'))
// console.log(store.getState())

// store.dispatch(
//   Actions.editeNote(
//     '11910110899111109101',
//     'edited note',
//     'edited note with edited discription! ohh hoo!'
//   )
// )
// console.log('after edited!')
// console.log(store.getState())
// store.dispatch(Actions.deleteNote('104105'))
// console.log(store.getState())

export default store
