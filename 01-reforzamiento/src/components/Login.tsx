import { useEffect } from "react"
import { useReducer } from "react"

/**
 * useReducer:
 *  reducer => funcion para retornar un estado
 *  initialState => estado inicial
 *  state => estado, se establece el tipo que va a tener
 *  dispatch => funcion que dispara una accion
 * 
 * useEffect: hooks que se usa para disparar efectos secundarios
 */

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginActionPayload = { username: string, nombre: string }

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':

            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }

        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }

        default:
            return state;
    }
}

export const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login', payload: {
                nombre: 'Fernando',
                username: 'Strider'
            }
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No Autenticado...</div>
            }

            {
                (token)
                    ? <button className="btn btn-danger" onClick={logout}>Logout</button>
                    : <button className="btn btn-primary" onClick={login}>Login</button>
            }
        </>
    )
}
