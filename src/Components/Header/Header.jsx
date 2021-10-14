import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './Header.scss'

function Header( {onCount} ) {
  const [numOfNotes, setNumOfNOtes] = useState(onCount)
  useEffect(() => {
  setNumOfNOtes(onCount)
    // return () => {
    //   cleanup
    // }
  }, [onCount])
  return (
    <div className="heading-container">
      <h1>Notes taking app </h1>
      <h4><span>{numOfNotes}</span> notes</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  onCount: state.length
})

export default connect(mapStateToProps, null)(Header)
