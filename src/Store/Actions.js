import * as types from './ActionTypes'

const generateId = (title) => {
  let id = ''
  for (let i = 0; i < title.length; i++) {
    id += title.charCodeAt(i)
  }
  return id
}

export const addNewNote = (title, discription) => {
  return {
    type: types.ADDED_NEW_NOTE,
    payload: {
      title,
      discription,
      id: generateId(title),
    },
  }
}

export const deleteNote = (id) => {
  return {
    type: types.NOTE_DELETED,
    payload: {
      id,
    },
  }
}
