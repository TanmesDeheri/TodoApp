import {React,useState} from 'react'

export default function TodoForm(props) {
const [input, setinput] = useState('')
const handleChange=(e)=>{
  setinput(e.target.value)
}
  const handleSubmit=(e)=>{
    e.preventDefault()
    props.onSubmit({id: Math.floor(Math.random()*10000),text:input})
    setinput('')
  }
  const handleClick=()=>{
  }
  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a todo' value={input} className="todo-input" name="text" onChange={handleChange}></input>
        <button className='todo-button' onClick={handleClick}>Add todo</button>
      </form>
    </div>
  )
}
