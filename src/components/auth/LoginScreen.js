import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLogin( email, password ) );
    }
    
    return (
        <>
            <div className='limiter container-register'>

                <form
                    onSubmit={handleLogin}
                    className="form-group"
                >
                    <h3 className="auth__title">Login</h3>
                    {/* //TODO: Agregar msgError
                        {
                            msgError &&
                            (
                                <div className="auth__alert-error">
                                    { msgError}
                                </div>
                            )
                        } 
                    */}

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-5"
                    >
                        Registrar
                    </button>

                    <div>
                        <Link
                            to="/auth/register"
                            className="link"
                        >
                            Crear cuenta nueva
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}