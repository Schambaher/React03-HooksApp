import { FC } from "react";
import { Todo } from "./interface";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    handleDeleteTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <ul className='list-group'>
            {
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        {...todo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo} 
                    />
                ))
            }
        </ul>
    )
}
