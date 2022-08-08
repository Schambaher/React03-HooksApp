import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks';


export const TodoApp = () => {
    
    const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodo([]);

    return (
        <>
            <h1>Todo App: { todosCount() }, <small>pendientes {  pendingTodosCount() }</small></h1>

            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDeleteTodo={handleDeleteTodo} 
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={ handleNewTodo } />
                </div>
            </div>

        </>
    )
}
