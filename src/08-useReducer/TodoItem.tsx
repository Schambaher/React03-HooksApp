import { FC } from "react";
import { Todo } from "./interface";

interface TodoItemProps extends Todo {
    handleDeleteTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ id, description, done, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span
                onClick={ () => handleToggleTodo(id) } 
                className={ `align-self-center pe-auto ${done ? 'text-decoration-line-through' : ''}` }
            >
                { description }
            </span>
            <button
                onClick={ () => handleDeleteTodo(id) } 
                className='btn btn-danger rounded-4'
            >
                Borrar
            </button>
        </li>
    )
}
