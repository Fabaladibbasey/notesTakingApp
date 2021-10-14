import './App.scss'
import Header from './Components/Header/Header'
import Notes from './Components/Notes/Notes'

function App({ store }) {
  console.log(store)
  return (
    <>
      <Header />
      {/* <button>Add new note</button> */}
      <Notes />
    </>
  )
}

export default App
