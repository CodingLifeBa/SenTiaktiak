import { useContext, useState, useRef, useEffect, useCallback } from "react";

import Loading from "./Loading";
import * as UI from "./ui/ui";

import { MyContext } from "./Contextor";
import { OpenStreetMapProvider } from "leaflet-geosearch";

import lowprice from "./asset/basprix.f426477c48795c42dd7b.png"
import cc from "./asset/serviceclient.20fcd70d898a57de898a.png"
import comfort from "./asset/confort.6641f1cd37a1b1cd0c9f.png"
import secure from "./asset/securite.3e9dbdad6eca15e51dc8.png"  
import overlay_image from "./asset/ride-2.avif"

const RequestRide = ({ toggleModal }) => {
    const [isFrom, setIsFrom] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    const { user, setRideRequest, selectedFrom, setSelectedFrom, selectedTo, setSelectedTo,setCurrentRide } =
        useContext(MyContext);

    const provider = useRef();
    const searchRef = useRef();

    useEffect(() => {
        initProvider();
    }, []);

    const shouldRequestDriver = useCallback(() => {
        if (selectedFrom && selectedTo) {
        }
    }, [selectedFrom, selectedTo, toggleModal]);

    useEffect(() => {
        if (selectedFrom && selectedTo) {
            shouldRequestDriver();
            console.log(selectedFrom, selectedTo)
        }
    }, [selectedFrom, selectedTo, shouldRequestDriver]);

    const onInputChanged = (e) => {
        const input = e.target.value;
        provider.current.search({ query: input }).then((results) => {
            setSearchResults(() => results);
        });
    };

    const initProvider = () => {
        provider.current = new OpenStreetMapProvider({
            params: {
                "accept-language": "fr",
                countrycodes: "sn",
            },
        });
    };

    const onLocationSelected = (selectedLocation) => {
        if (selectedLocation?.label && selectedLocation?.x && selectedLocation?.y) {
            if (isFrom) {
                setSelectedFrom(selectedLocation);
                setIsFrom(false);
            } else {
                setSelectedTo(selectedLocation);
                setIsFrom(true);
            }
            setSearchResults(() => []);
            searchRef.current.value = "";
        }
    };


    const requestRide = async () => {
        if (user && selectedFrom && selectedTo) {
            setCurrentRide({status:"started",pickup:{label:"Dakar" },destination:{label:"Yeumbel"}})
            UI.showLoading();
            const ride = {
                rideUuid: 8475,
                requestor: user,
                pickup: selectedFrom,
                destination: selectedTo,
                status: "waiting",
            };
            try {
                ////IL FAUDRA INSERER UNE DEMANDE DE COURSE DANS LA BASE DE DONNE PAR ICI
                setRideRequest(ride);
                UI.hideLoading();
            } catch (error) {
                UI.hideLoading();
            }
        }
    };

    return (
        <>
            <Loading></Loading>

            <div className="row justify-content-center" style={{ marginTop: "-50px", zIndex: "6", position: "relative" }}>
                <div className="row g-3 col-md-12 search-shadow bg-white mt-1 pt-3 pb-4" style={{ maxHeight: "30rem", borderRadius: "12px", boxShadow: "0 8px 16px #0000001a" }}>
                    
                    <div className="col-sm input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30px' height='30px'><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                        </span>
                        <input onChange={onInputChanged}
                        ref={searchRef} onClick={() => setIsFrom(true)} type="text" className="form-control input-omni" placeholder="D'ou partez-vous?" aria-label="D'ou partez-vous?"></input>
                    </div>

                    <div className="col-sm input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline fa-w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30px" height="30px"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                        </span>
                        <input type="text" className="form-control input-omni" placeholder="Votre Destination" aria-label="Votre Destination" onClick={() => setIsFrom(false)}
                        onChange={onInputChanged}
                        ref={searchRef}></input>
                    </div>

                    <div className="col-sm input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline fa-w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30px" height="30px"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                        </span>
                        <input type="text" className="form-control input-omni" placeholder="Nombre de passagers" aria-label="Nombre de passagers" value="1 passager" disabled></input>
                    </div>

                    <div className="col-sm">
                        <button type="submit" id="save-entity" className="primary text-white btn btn-reserver col-md-6 col-sm-12" style={{ width: "100%", }}>
                            <span onClick={requestRide}>Commander</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="search__result">
                {searchResults &&
                    searchResults.length !== 0 &&
                    searchResults.map((result, index) => (
                        <div
                            className="search__result-item"
                            key={index}
                            onClick={() => onLocationSelected(result)}
                        >
                            <div className="search__result-icon">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline fa-w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30px" height="30px"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </span>
                            </div>
                            <p className="search__result-label">{result.label}</p>
                        </div>
                    ))}
            </div>

            <div className="container">
                <hr className="mt-5"></hr>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <h3 style={{ textAlign: " center" }}>Choisir SenTiakTiak c'est:</h3>
                    </div>
                </div>

                <div className="row pt-4" style={{ textAlign: "justify" }}>
                    <div className="col-md-3">
                        <div className="p-4 m-2 text-center">
                            <span className="img-secu">
                                <img src={secure}></img>
                            </span>
                            <h5 className="font-weight-bold">Sécurité</h5>
                            Votre sécurité et bien-être sont prioritaires. Avec nos partenaires, nous assurons un voyage serein.
                        </div>
                        {/* <!---->
                            <!----> */}
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 m-2 text-center">
                            <span className="img-confort">
                                <img src={comfort}></img>
                            </span>
                            <h5 className="font-weight-bold">Confort</h5>
                            Embarquez pour une expérience sur mesure ! Choisissez vos options de voyage  selon vos envies.
                        </div>
                        {/* <!---->
                            <!----> */}
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 m-2 text-center">
                            <span className="img-lowprice">
                                <img src={lowprice}></img>
                            </span>
                            <h5 className="font-weight-bold">Bas prix</h5>
                            Rendre le transport en bus abordable pour tous, c'est notre mission. Nous chassons les meilleurs prix pour vous.
                        </div>
                        {/* <!---->
                            <!----> */}
                    </div>
                    <div className="col-md-3">
                        <div className="p-4 m-2 text-center">
                            <span className="img-cc mt-3">
                                <img src={cc}></img>
                            </span>
                            <h5 className="font-weight-bold">Service client 24h/24</h5>
                            Votre satisfaction, notre priorité ! Contactez-nous 24/7. Expérience et savoir-faire au service de vos voyages.
                        </div>
                        {/* <!---->
                            <!----> */}
                    </div>
                </div>
            </div>
        </>

    );
};

export default RequestRide;