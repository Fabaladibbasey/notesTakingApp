import './Note.scss'

function Note({note, onDelete, id, onHandleNoteToEdit}) {
  const {title, discription} = note
  return (
    <article className='note'>
      <section className='info-section'>
        <h4 className='title'>{title}</h4>
        <p className='discription'>
          {discription}
        </p>
        <h5 className='last-edited'>
          edited: <span>09/10/2021</span>
        </h5>
      </section>
      <section className='icons'>
        <div className='icon'>
          <i onClick={()=> onHandleNoteToEdit(note)} className='far fa-edit'></i>
        </div>
        <div className='icon'>
          {' '}
          <i 
          onClick={()=>{onDelete(id)}}
          className='far fa-trash-alt'></i>
        </div>
        <div className='icon'>
          <i className='far fa-check-circle'></i>
        </div>
      </section>
    </article>
  )
}



export default Note
