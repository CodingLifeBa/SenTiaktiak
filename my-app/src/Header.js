import { Outlet, Link, BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext } from "react";
import "./style.css";
import logo from "./asset/logo.png";

const Layout = () => {
    const { user, setUser } = useContext(MyContext);

    const logout = async () => {
        let isLogout = window.confirm("Voulez-vous vous deconnecter ?");
        if (!isLogout) {
            removeAuthedInfo();
            return redirect("/login");
        }
    };

    const removeAuthedInfo = () => {
        setUser(null);
        localStorage.removeItem("auth");
    };


    return (
        <>
            <nav className="primary- bg-white flex-header navbar navbar-expand-md navbar-light bg-light-blue center ">
                <div className="container">
                    <a className="navbar-brand px-3" href="#"><img style={{ height: "40px" }} src={logo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav px-3">
                            <Link className="nav-link btn-link" aria-current="page" to="/">SenTiakTiak</Link>
                            {user !== null?
                                <>
                                    <Link className="nav-link active btn-link" aria-current="page" to="/">Acceuil</Link>
                                    <Link className="nav-link btn-link" to="/dashboard">Dashboard</Link>
                                    <Link onClick={logout} className="nav-link disabled- btn-link" tabIndex="-1" aria-disabled="true" to="#">Se déconneter</Link>
                                </>:
                                <> 
                                    <Link className="nav-link btn-link" to="/login">Se connecter</Link>
                                    <Link className="nav-link btn-link" to="/signup">S'inscrire en tant que passager</Link>
                                    <Link className="nav-link btn-link" to="/signup-driver">S'inscrire en tant que chauffeur</Link>
                                    <Link className="nav-link btn-link" to="/">Contact</Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout