import { useEffect, useReducer } from "react"
interface IAuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}
const initialState: IAuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}
type LoginPayload = {
    username: string;
    nombre: string;
}
type AuthAction =
    | { type: 'login', payload: LoginPayload }
    | { type: 'logout' }
const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case 'logout':
            return {
                ...state,
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }
        case 'login':
            return {
                ...state,
                validando: false,
                username: action.payload.username,
                nombre: action.payload.nombre,
                token: 'abc123'
            }
        default:
            return state;
    }
}
const Login = () => {
    const [{ validando, token }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })

        }, 1500)
    }, []);
    const handleLogin = () => {
        dispatch(
            {
                type: 'login',
                payload: {
                    username: 'admin',
                    nombre: 'Administrador'
                }
            }
        )
    }
    const handleLogout = () => {
        dispatch({ type: 'logout' })
    }
    if (validando) {
        return (
            <>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
    return (
        <>
            {
                token ?
                    (
                        <div className="alert alert-success">
                            Autenticado
                        </div>
                    )
                    :
                    (
                        <div className="alert alert-danger">
                            No autenticado
                        </div>
                    )

            }
            {
                token ?
                    (
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    ) :
                    (
                        <button className="btn btn-primary" onClick={handleLogin}>
                            Login
                        </button>
                    )
            }


        </>
    )
}

export default Login