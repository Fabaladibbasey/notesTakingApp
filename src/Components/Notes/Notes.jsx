import './Notes.scss'
import Note from "../Note/Note"
import Form from '../Form/Form'
import { connect } from 'react-redux'
import {deleteNote} from '../../Store/Actions'
import { useState } from 'react'

function Notes({notes, onDelete}) {

     const [noteToEdit, setNoteToEdit] = useState({})
     const handleNoteToEdit = note => {
          setNoteToEdit(note)
     }

 return (
  <section className="notes">
          <Form noteToEdit={noteToEdit} onHandleNoteToEdit={handleNoteToEdit}/>
       {notes.map(note => <Note key={note.id}
       onDelete={onDelete}
       onHandleNoteToEdit={handleNoteToEdit}
       note={note}
       id={note.id}
       />)}
  </section>
 )
}

const mapStateToProps = state => ({notes: state})
const mapDispatchToProps = dispatch => ({
onDelete: id => dispatch(deleteNote(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Notes)
