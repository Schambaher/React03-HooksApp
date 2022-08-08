import { FC, FormEvent } from "react";
import { useForm } from "../hooks"
import { Todo } from "./interface";

interface TodoAddProps {
    handleNewTodo : (todo: Todo) => void
}

interface FormValuesProps {
    description: string;
}

export const TodoAdd: FC<TodoAddProps> = ({ handleNewTodo }) => {

    const {formValues, handleInputChange, resetForm} = useForm<FormValuesProps>({
        description: ''
    });

    const { description } = formValues;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (description.length  <= 1) return;

        handleNewTodo({
            id: new Date().getTime(),
            description,
            done: false
        });

        resetForm();
    }
     
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder="Que hay que hacer"
                className="form-control"
                onChange={ handleInputChange }
                name="description"
                value={description}
            />

            <button
                className='btn btn-outline-primary mt-3'
                type='submit'
            >
                Agregar
            </button>
        </form>
    )
}
