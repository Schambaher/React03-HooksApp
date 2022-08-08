import { createContext } from "react";
import { User } from "./UserProvider";

export interface UserContextProps {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext({} as UserContextProps);