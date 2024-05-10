import { useContext, useRef, useEffect } from "react";
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";

import { MyContext } from "./Contextor";

import user from "./asset/account-icon.png";
import lock from "./asset/lock-icon.png";
import "./style.css";

import Loading from "./Loading.js";
import * as UI from "./ui/ui";
import validator from "validator";


function Login(props) {
    const { user, setUser } = useContext(MyContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
 
    const login = async () => {
        try {
            UI.showLoading();
            const { email, password } = getInputs();
            if (isUserCredentialsValid(email, password)) {
                saveAuthedInfo(email);
                console.log(email, password)
                UI.showLoading();
            } else {
                UI.hideLoading();
                UI.alert(`Nom d'utilisateur ou mot de passe incorrect`);
            }
        } catch (error) {
            UI.hideLoading();
        }
    };

    const getInputs = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        return { email, password };
    };

    const isUserCredentialsValid = (email, password) => {
        return validator.isEmail(email) && password;
      };

    const saveAuthedInfo = (user) => {
        setUser(user);
        localStorage.setItem("auth", JSON.stringify(user));
    };

    return (
        <>
            <Loading></Loading>
            <div className="form-container">

                <div className="form needs-validation mt-4 mb-4" noValidate>
                    <h1 className="text-center">Connexion</h1>
                    <form className="col g-3 needs-validation" noValidate>
                        <div className="col-sm">
                            <label htmlFor="validationCustomUsername" className="form-label">Nom d'utilisateur (adresse email)</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline" style={{ width: "30px" }} src={user}></img>
                                </span>
                                <input ref={emailRef} type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mt-4">
                            <label htmlFor="validationCustomUsername" className="form-label">Mot de passe</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline fa-w-16" style={{ width: "30px" }} src={lock}></img>
                                </span>
                                <input ref={passwordRef} minLength={6} type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm mt-5">
                            <button onClick={login} className="btn btn-primary" type="button">Se connecter</button>
                        </div>
                        <div className='lien_inscription'>
                            <p>Vous n'avez pas de compte? <Link to='/signup'>Inscrivez-vous</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login;