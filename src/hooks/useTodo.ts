import { useEffect, useReducer } from "react";
import { Todo } from "../08-useReducer/interface";
import { TodoReducer } from "../08-useReducer/TodoReducer";

interface useTodoProps {
    todos: Todo[];
    handleNewTodo: (todo: Todo) => void;
    handleDeleteTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
    todosCount: () => number;
    pendingTodosCount: () => number;
}

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '');
}

export const useTodo = (initialState: Todo[]): useTodoProps => {

    const [ todos, dispatchTodo ] = useReducer( TodoReducer , initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = ( todo: Todo ) => {
        dispatchTodo({
            type: 'addTodo',
            payload: { todo }
        })
    }

    const handleDeleteTodo = (id: number) => {
        dispatchTodo({
            type: 'deleteTodo',
            payload: {id}
        })
    }

    const handleToggleTodo = (id: number) => {
        dispatchTodo({
            type: 'toggleTodo',
            payload: {id}
        })
    }
    
    const todosCount = () => {
        return todos.length   
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length
    }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }

}