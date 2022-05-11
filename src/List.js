import React from 'react'
import './App.css'

export default function List(props) {
  return (
    <div>
<div className='list'>
<h3>{props.userId}</h3>
<p>{props.id}</p>
<h3>{props.title}</h3>

<p>{props.body}</p>

    </div>
    </div>
  )
}
