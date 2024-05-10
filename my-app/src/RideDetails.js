import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";

import Loading from "./Loading";
import * as UI from "./ui/ui";

import {MyContext} from "./Contextor";

import email_icon from "./asset/message-icon.png";
import phone_icon from "./asset/phone-icon.png";
import exit_icon from "./asset/exit-icon.png";
import tick_icon from "./asset/tick-icon.png";

import user_icon from "./asset/account-icon.png";

const RideDetail = ({ user, isDriver, currentRide }) => {
  const { setCurrentRide } = useContext(MyContext);

  const cancelRide = () => {
    const isCancel = window.confirm("Voulez-vous annuler la course?");
    if (isCancel) {
      currentRide.status = "canceled";
      updateRide(currentRide);
    }
  };

  const finishRide = () => {
    const isFinish = window.confirm("Voulez-vous finir la course?");
    if (isFinish) {
      currentRide.status = "done";
      updateRide(currentRide);
    }
  };

  const updateRide = async (ride) => {
    UI.showLoading();
    try {
      //IL FAUDRA METTRE A JOUR LES INFOS SUR LA COURSE DANS LA BASE DE DONNE PAR ICI
    } catch (error) {
      console.log(error.message)
      UI.hideLoading();
    }
    UI.hideLoading();
    removeRide();
  };

  const removeRide = () => {
    localStorage.removeItem("currentRide");
    setCurrentRide(null);
    window.location.reload();
  };

  return (
    <>
    <Loading></Loading>
    <div className="ride-detail row g-3 col12 col-lg-4 col-md-6 search-shadow bg-white mt-1 pt-1 pb-4" style={{ maxHeight: "30rem", borderRadius: "12px", boxShadow: "0 8px 16px #0000001a" }}>
      <div className="ride-detail__user-avatar">
      </div>
      
      <div className="ride-detail__content">
      <div className="col-sm input-group mt-1 m-2">
          <span className="input-group-text" id="basic-addon1">
          </span>
          <span className="h6">Tarif: 1200 FCFA</span>
        </div>
        <div className="col-sm input-group mt-1 m-3">
          <span className="input-group-text" id="basic-addon1">
          <img src={email_icon} style={{width:"30px"}}></img>
          </span>
          <span>Email: {user.email}</span>
        </div>
        <div className="col-sm input-group m-3">
          <span className="input-group-text" id="basic-addon1 p-3">
            <img src={phone_icon} style={{width:"30px"}}></img>
          </span>
          <span>Téléphone: {user.phone}</span>
        </div>
        <div className="col-sm input-group m-3">
          <span className="input-group-text" id="basic-addon1">
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30px' height='30px'><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
          </span>
          <span>Lieu de départ: </span>
          {currentRide.pickup && currentRide.pickup.label
            ? currentRide.pickup.label
            : ""}
        </div>
        <div className="col-sm input-group m-3">
          <span className="input-group-text" id="basic-addon1">
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline fa-w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30px" height="30px"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          </span>
          <span>Destination: </span>
          {currentRide.destination && currentRide.destination.label
            ? currentRide.destination.label
            : ""}
        </div>
      </div>

      <div className="row">
        <button className="btn primary col-md-4- col-sm-12 m-2" onClick={cancelRide}>
          Annuler la course <img src={exit_icon} alt="exit" style={{width:"30px"}}/>
        </button>
        {isDriver && (
          <button className="btn btn-light col-md-4- col-sm-12 m-2" onClick={finishRide}>
            Terminer la course <img src={tick_icon} alt="tick" style={{width:"30px"}}/>
          </button>
        )} 
      </div>
    </div>
    </>
    
  );
};

export default RideDetail;