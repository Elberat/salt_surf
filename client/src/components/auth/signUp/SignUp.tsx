import React, { SyntheticEvent, useState,ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../../store/actionCreator/user";
import Alert from "@material-ui/lab/Alert";
import "../logIn/LogIn";


export default function SignUp(): ReactElement {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleEmailChange = (event: SyntheticEvent | any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: SyntheticEvent | any) => {
        setPassword(event.target.value);
    };
    const handlePasswordConfirmChange = (event: SyntheticEvent | any) => {
        setPasswordConfirm(event.target.value);
    };

    const handleSignUpClick = (event: SyntheticEvent) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            return setError("Пароли не совпадают");
        }
        try {
            setError("");
            setLoading(true);
            dispatch(signUp({ email, password }, history));
            history.push("/");
        } catch (err) {
            setError("Не удалось создать аккаунт");
        }
        setLoading(false);
    };


    return (
        <div className="container">
        <div className="bg">
            <h3>Registration</h3>
            <section className="login">
                <form className="loginContainer"  
                    onSubmit={handleSignUpClick}
                    action="submit" >
                        
                    {error && <Alert severity="error">{error}</Alert>}
                    <label>Username</label>
                    <input
                        required
                        onChange={handleEmailChange}
                        type="email"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        onChange={handlePasswordChange}
                        />
                        <label>Password one more time</label>
                    <input
                        type="password"
                        required
                        onChange={handlePasswordConfirmChange}
                    />
                    <button 
                    disabled={loading}
                    type="submit" 
                    className="button btn"
                    >
                        Sign Up
                    </button>

                    <Link className="btn-signup" to='/signup'><span className='button '>Log in</span></Link>
                    
                </form>
        </section>
    </div>
</div>
    )
}
