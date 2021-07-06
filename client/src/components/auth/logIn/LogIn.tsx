import React, { ReactElement, SyntheticEvent, useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signIn, signUp } from "../../../store/actionCreator/user";
import './LogIn.css'
import Alert from "@material-ui/lab/Alert";



export default function LogIn(): ReactElement {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: SyntheticEvent | any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: SyntheticEvent | any) => {
        setPassword(event.target.value);
    };

    const handleSignInClick = (event: SyntheticEvent | any) => {
        event.preventDefault();
        dispatch(signIn({ email, password }, history));
        history.push("/");
    };


    return (

        <div className="container">
                <div className="bg">
                    <h3>Login</h3>
                <section className="login">
                    <form className="loginContainer"  
                        onSubmit={handleSignInClick}
                        action="submit" >
                            
                        {error && <Alert severity="error">{error}</Alert>}
                        <label>Username</label>
                        <input
                            onChange={handleEmailChange}
                            type="email"
                            required
                            autoFocus
                            value={email}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <button 
                        disabled={loading}
                        type="submit" 
                        className="button btn"
                        >
                            log In
                        </button>

                        <Link className="btn-signup" to='/signup'><span className='button '>Sign up</span></Link>
                        
                    </form>
                </section>
            </div>
        </div>
    )
}

