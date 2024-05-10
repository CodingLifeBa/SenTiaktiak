import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext, useRef } from "react";

import user from "./asset/account-icon.png";
import phone from "./asset/phone-icon.png";
import lock from "./asset/lock-icon.png";
import Loading from "./Loading.js";
import * as UI from "./ui/ui";
import validator from "validator";
import "./style.css";

function Signup(props) {
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);
    const roleRef = useRef(null);

    const signup = async () => {
        try {
            const { firstName, lastName, email, password, role, phone } =
                getInputs();
            if (
                isSignupValid({
                firstName, lastName, email, password, role, phone
            })
            ) {
                console.log(firstName, lastName, email, password, role, phone)
                UI.showLoading();
                //IL FAUDRA INSERER LES INFOS DANS LA BASE DE DONNE PAR ICI
                UI.hideLoading();
                UI.alert(
                    `${email} a ete cree avec succes! Veuillez vous connecter maintenant.`
                );
            }
        } catch (error) {
            UI.hideLoading();
        }
    };


    const getInputs = () => {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const role = roleRef.current.value;
        return { firstName, lastName, email, password, role, phone };
    };

    const isSignupValid = (firstName, lastName, email, password,  phone) => { 
        //IL N'EST PAS NECESSAIRE D'UTILISER VALIDATOR PAR ICI, JE LE FAIS DEJA AVEC HTML5
        if (validator.isEmpty(firstName) || validator.isEmpty(lastName)) {
            UI.alert("Please input your fullname");
            return false;
        }
        if (!validator.isEmail(email)) {
            UI.alert("Please input your email");
            return false;
        }
        if (!validator.isMobilePhone(phone)) {
            alert("Please input your phone number");
            return false;
        }
    }

    return (
        <>
            <Loading></Loading>
            <div className="form-container">

                <div className="form needs-validation mt-4 mb-4" noValidate>
                    <h1 className="text-center">Inscription Usager</h1>
                    <form className="col g-3 needs-validation" noValidate>
                        <div className="col-sm mt-4">
                            <label htmlFor="firstname" className="form-label">Prénom</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline" style={{ width: "30px" }} src={user}></img>
                                </span>
                                <input ref={firstNameRef} type="text" className="form-control" id="firstname" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm mt-3">
                            <label htmlFor="lastname" className="form-label">Nom</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline" style={{ width: "30px" }} src={user}></img>
                                </span>
                                <input ref={lastNameRef} type="text" className="form-control" id="lastname" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm mt-3">
                            <label htmlFor="phone" className="form-label">Numéro téléphone</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline" style={{ width: "30px" }} src={phone}></img>
                                </span>
                                <input ref={phoneRef} title="Votre numero doit contenir 9 chiffres" pattern="^\d{9}$" type="tel" max={9} maxLength={9} size={9} className="form-control" id="phone" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm mt-3">
                            <label htmlFor="email" className="form-label">Adresse email</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="inputGroupPrepend" required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-sm mt-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    <img className="svg-inline" style={{ width: "30px" }} src={lock}></img>
                                </span>
                                <input ref={passwordRef} minLength={6} pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{6,}$" type="password" className="form-control" id="password" aria-describedby="inputGroupPrepend" title="Votre mot de passe contenir: 6 characteres au minimum dont 1 charactere special, une lettre et un chiffre." required></input>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <input type="hidden" ref={roleRef} name="account-type" value="user"></input>

                        <div className="col-sm mt-5">
                            <button className="btn btn-primary" type="button" onClick={signup}>S'inscrire</button>
                        </div>
                        <div className='lien_inscription'>
                            <p>Vous avez un  compte? <Link to='/login'>Connectez-vous</Link> </p>
                            <p>Vous avez une moto? <Link to='/signup-driver'>Devenez un TiakTiakeur</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;