import React, { useRef } from 'react'
import './styles.css';

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, addTodo}:Props) => {
  
    // useRef is alot like selecting a dom element with js.
    // Allows you to hook onto an element really easily.
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            //call addTodo to add our submitted element to the array
            //that contains all the previous todo list items
            addTodo(e);

            //Here we get the input element, if it exists, and call
            //blur() to remove focus from the input to remove the 
            //shadow placed on the page.
            inputRef.current?.blur();
        }}>
            <input type="input"
            ref={inputRef}
            value={todo}
            onChange={ (e) => setTodo(e.target.value) }
            placeholder='Enter a New Task' className='input-box' />
            <button className='input-submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField