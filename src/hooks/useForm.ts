import { ChangeEvent, useState } from "react";

interface useFormProps<T> {
    formValues: T;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
}

export const useForm = <T>(initialState: T): useFormProps<T> => {

    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setFormValues(values => ({
            ...values,
            [target.name]: target.value
        }))
    }

    const resetForm = () => {
        setFormValues(initialState);
    }

    return {
        formValues,
        handleInputChange,
        resetForm
    }

}