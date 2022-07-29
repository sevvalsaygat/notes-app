import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

function Index({ tags }) {

  const [notes, setNotes] = useState([])

  const options = tags.map((tag) => {
    return { value: tag.id, label: tag.name }
  })

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
      <Select options={options} />
    </div>
  )
}

export default Index