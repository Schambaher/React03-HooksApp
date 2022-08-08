import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formValues, handleInputChange, resetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formValues;

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

            <input 
                type="password"
                placeholder="password"
                className="form-control mt-2"
                name="password" 
                value={password}
                onChange={handleInputChange}
            />

            <button
                onClick={ resetForm } 
                className="btn btn-primary mt-2"
            >
                Clear form
            </button>
        </>
    )
}
