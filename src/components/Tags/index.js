import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CirclePicker } from 'react-color';

const initialFormValues = { name: "", color: "" };

function Index({ tags, setTags }) {
  const [tagForm, setTagForm] = useState(initialFormValues)

  const onChangeInput = (e) => {
    setTagForm({ ...tagForm, [e.target.name]: e.target.value });
  };

  const onChangePicker = (color, e) => {
    console.log(color);
    setTagForm({ ...tagForm, color: color.hex })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://notes-api-for-fe.herokuapp.com/tags', {
        tag: {
          name: tagForm.name,
          color: tagForm.color
        }
      }).then((res) => {
        setTagForm(initialFormValues)
        setTags([...tags, res.data])
      }).catch((e) => {
        console.log(e.response.data)
      })
  }

  useEffect(() => {
    axios
      .get('https://notes-api-for-fe.herokuapp.com/tags')
      .then((res) => {
        setTags(res.data)
      })
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name='name'
            placeholder='Tag adı girin'
            value={tagForm.name}
            onChange={onChangeInput}
          />
          <br />
          <br />
          <CirclePicker
            onChange={onChangePicker}
          />
          <br />
          <br />
          <button>ADD</button>
        </div>
      </form>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>
            <span>{tag.name}</span>
            <span>{tag.color}</span>
          </li>
        ))}
      </ul>
      {tagForm.color}
    </div>
  )
}

export default Index