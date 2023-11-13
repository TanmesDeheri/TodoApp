import {React,useState,useEffect,useRef} from 'react'

export default function TodoForm(props) {
const [input, setinput] = useState(props.edit?props.edit.value:'')
const inputRef=useRef(null)
useEffect(() => {
  inputRef.current.focus()
},[])

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
        <input type="text" placeholder={props.edit?'Update':'Add a todo'} value={input} className="todo-input" name="text" onChange={handleChange} ref={inputRef}></input>
        <button className='todo-button' onClick={handleClick}>{props.edit?'Update':'Add todo'}</button>
      </form>
    </div>
  )
}
