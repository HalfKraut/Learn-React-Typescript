import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}:Props) => {
    
    // Create state for our edit mode for each todo item.
    // Defaults to false, or edit mode is off.
    const [edit, setEdit] = useState<boolean>(false)
    // Create state to store edited text from the user.
    // Starts with current text in the todo item as the default state.
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    // Create hook to shift focus to the input upon editing a todo item.
    const editRef = useRef<HTMLInputElement>(null)


    const updateTodo = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos(
            todos.map(
                (todo) => (
                    todo.id === id ? {...todo, todo: editTodo} : todo
                )
            )
        )
        setEdit(false);
    }
    

    // Function deletes a todo list item from the page. 
    // Removes this todo list item from the todo[] array.
    const deleteTodo = (id: number) => {
        setTodos(
            // Uses filter to filter the matching ID from the array.
            todos.filter( (todo) => todo.id !== id)
        )
    }

    // Function handles marking todo list items as done. 
    // Adds strikethrough to text to signify it is completed.
    const toggleDone = (id: number) => {
        setTodos(
            todos.map( (todo) => 
                todo.id === id ? {...todo, isDone: !todo.isDone} : todo
            )
        )
    } 

    // Funcion shifts focus to todo list item being edited upon the edit activation.
    useEffect(() => {
        editRef.current?.focus();
    }, [edit])
  
  
    return (
        <form className='todos-single' onSubmit={ (e) => updateTodo(e, todo.id)}>
            {
                edit ? (
                    // If edit mode is on, we display the input box for user to edit the
                    // Todo list item.
                    <input 
                        ref={editRef}
                        value={editTodo} 
                        onChange={ (e) => setEditTodo(e.target.value) } 
                        className='todo-single-text'
                    />
                ) : todo.isDone? (
                    // If the todo item is marked done, render as strikethrough
                    <s className="todos-single-text">
                        {todo.todo}
                    </s>
                ) : (
                    // Else if edit mode is off, render normally.
                    <span className="todos-single-text">
                        {todo.todo}
                    </span>
                )
            }
            
            <div>
                <span className="icon" onClick={ () => {
                    if(!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={ () => deleteTodo(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={ () => toggleDone(todo.id)}>
                    <MdOutlineDone/>
                </span>
            </div>
        </form>
  )
}

export default SingleTodo