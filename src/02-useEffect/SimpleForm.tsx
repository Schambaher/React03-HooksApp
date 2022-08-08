import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

interface form {
    username: string;
    email:string;
}

export const SimpleForm = () => {

    const {formValues, handleInputChange} = useForm<form>({
        username: 'strider',
        email: 'Sebastian@gmail.com'
    })

    const { username, email } = formValues;

    useEffect(() => {
    //   console.log('useEffect called');
    }, [])
    
    useEffect(() => {
        //  console.log('FormState cambió!!');
    }, [formValues])

    useEffect(() => {
        //  console.log('email cambió!!');
    }, [email])

    return (
        
        <>
            <h1>Simple Form</h1>

            <hr />

            <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                value={username}
                onChange={handleInputChange}
            />

            <input 
                type="email"
                placeholder="example@example.com"
                className="form-control mt-2"
                name="email" 
                value={email}
                onChange={handleInputChange}
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
        

    )
}
