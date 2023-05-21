import React from 'react'
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
  return (
    <form className='todos-single'>
        <span className="todos-single-text">
            {todo.todo}
        </span>
        <div>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon">
                <MdOutlineDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo