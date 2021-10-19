import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
    changeFavoriteIcon: (iconName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUserName = (userName: string) => {
        dispatch({ type: 'changeUserName', payload: userName })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeUserName,
            changeFavoriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}