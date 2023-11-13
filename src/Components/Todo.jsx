import { React, useState } from 'react'
import TodoForm from './TodoForm'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [Edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = (value) => {
        updateTodo(Edit.id, value)
            setEdit({
                id: null,
                value: ''
            })
    }
    if (Edit.id)
        return <TodoForm edit={Edit} onSubmit={submitUpdate} />
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineCloseCircle className='delete-icon' onClick={() => { removeTodo(todo.id) }} />
                <AiOutlineEdit className='edit-icon' onClick={() => { setEdit({ id: todo.id, value: todo.text }) }} />

            </div>
        </div>
    ))
}
