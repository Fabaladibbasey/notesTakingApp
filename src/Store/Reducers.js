// import { combineReducers } from 'redux'
import * as types from './ActionTypes'
// import store from './Store'

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADDED_NEW_NOTE:
      return [action.payload, ...state]
    case types.EDITED_NOTE:
      return state.map((note) => {
        if (note.id === action.payload.currentId) {
          return action.payload.editedNote
        }
        return note
      })
    case types.NOTE_DELETED:
      return state.filter((note) => note.id !== action.payload.id)
    default:
      return state
  }
}

// const editeNoteReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.EDITED_NOTE:
//       const newState = state.map((note) => {
//         console.log(state)
//         if (note.id === action.payload.currenId) {
//           return { ...action.payload.editedNote }
//         }
//         return note
//       })
//       console.log('before return ')
//       return [newState, ...state]
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//  addNoteReducer,
//   editeNoteReducer,
// })

export default rootReducer
