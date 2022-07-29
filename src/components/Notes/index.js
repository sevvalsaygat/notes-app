import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Index({ tags }) {
  
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios
      .get('https://notes-api-for-fe.herokuapp.com/notes')
      .then((res) => {
        setNotes(res.data)
      })
  }, [])

  return (
    <div>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            <span>{note.title}</span>
            <span>{note.content}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Index