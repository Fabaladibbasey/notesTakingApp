import { useState, useEffect } from 'react';
import './Form.scss'
import * as Actions from '../../Store/Actions'
import { connect } from 'react-redux';


function Form({addNote, onRemove, noteToEdit, onHandleNoteToEdit}) {
 const [title, setTitle] = useState('')
 const [note, setNote] = useState('')
 const [editMode, setEditMode] = useState(false)
 const [id, setId] = useState(null)

 useEffect(() => {
  
  if (Object.keys(noteToEdit).length > 0){
  console.log(noteToEdit);
  setNote(noteToEdit.discription)
  setTitle(noteToEdit.title)
  setId(noteToEdit.id)
  onHandleNoteToEdit({})
  setEditMode(true)
 }
  
  // return () => {
  //  cleanup
  // }
 }, [Object.keys(noteToEdit).length])

 const handleSubmit = e => {
  e.preventDefault()
  if (!title || !note) return; 
  if(editMode){
    console.log('remove', id);
     onRemove(id)
     setEditMode(false)
  }
  //add to redux store
  addNote(title, note)
  setTitle('')
  setNote('')
 }

 return (
  <form className="form" onSubmit={handleSubmit}>
   <label htmlFor="title"></label>
   <input id="title" type="text" placeholder="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
   <br />
   <label htmlFor="note"></label>
   <textarea placeholder="note"  id="note" name="note" value={note} onChange={(e)=>setNote(e.target.value)}/>
   <br />
   <label htmlFor="submit"></label>
   <input type="submit"  id="submit"/>
  </form>
 )
}

const mapDispatchToProps = dispatch => ({
 addNote: (title, note) => dispatch(Actions.addNewNote(title, note)),
 onRemove: id => dispatch(Actions.deleteNote(id))
})
export default connect(null, mapDispatchToProps)(Form)
