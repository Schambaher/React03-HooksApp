import { Todo } from "./interface";

type todoActions = 
    | { type: 'addTodo', payload:{todo: Todo} }
    | { type: 'deleteTodo', payload: {id: number} }
    | { type: 'toggleTodo', payload: {id: number} }


export const TodoReducer = (initialState: Todo[] = [], action: todoActions): Todo[] => {

    switch (action.type) {
        case "addTodo":
            return [ ...initialState, action.payload.todo ]
        
        case "deleteTodo":
            return initialState.filter( todo => todo.id !== action.payload.id );

        case "toggleTodo":
            return initialState.map( todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialState;
    }
}