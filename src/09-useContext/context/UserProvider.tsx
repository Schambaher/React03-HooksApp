import { FC, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
    children: JSX.Element | JSX.Element[];
}

export interface User {
    id: number;
    name: string;
    email: string;
}

// const user: User = {
//     id: 123,
//     name: 'sebastián',
//     email: 'sebastian@gmail.com'
// }

export const UserProvider:FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState({} as User);

    return (
        <UserContext.Provider value={{
            user: user, setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
