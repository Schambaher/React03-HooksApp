import { ChangeEvent, useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'sebastianschambaher@gmail.com'
    })

    const {username, email} = formState;

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
    //   console.log('useEffect called');
    }, [])
    
    useEffect(() => {
        // console.log('FormState cambió!!');
    }, [formState])

    useEffect(() => {
        // console.log('email cambió!!');
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
