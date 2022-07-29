import React, { useState } from 'react'
import Tags from './Tags/index'
import Notes from './Notes/index'

function Index() {
  const [tags, setTags] = useState([])

  return (
    <div>
      <Tags
        tags={tags}
        setTags={setTags}
      />
      <Notes
        tags={tags}
      />
    </div>
  )
}

export default Index