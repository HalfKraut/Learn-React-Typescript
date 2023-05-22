/**
 * This is the model for each item in the todo list.
 * Contains the properties in the interface for the todo list items.
 *
 */

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

// /**
//  * This is a useReducer example. It is note complete yet.
//  * Need to learn more about useReducers to finish implementing it.
//  * Currently only the states types and the TodoReducer function are setup.
//  */
// import { useReducer } from "react";

// /**
//  * Create types with payloads for retuning. You can only have a single
//  * action at a time, so we use | or to return only one type at a time.
//  */
// type Actions =
//     | {type: "add", payload: string}
//     | {type: "remove", payload: number}
//     | {type: "done", payload: number}

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false}
//             ]
//             break;
//         case "remove":
//             return state.filter(
//                 (todo) => todo.id !== action.payload,
//             )
//             break;
//         case "done":
//             return state.map(
//                 (todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone} : todo
//             )
//             break;

//         default:
//             break;
//     }
// }

// const ReducerExample = () => {

//     const [state, dispatch] = useReducer(TodoReducer, [])

//     return (
//         //Not Complete, need to do more work to see how useReducers work.
//     )
// }
