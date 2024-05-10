import { useEffect, useState, useContext, useRef } from "react";

import void_icon from "./asset/voidlist-icon.png";

import * as UI from "./ui/ui";

import {MyContext} from "./Contextor";

const RideList = () => {
  const [rideRequests, setRideRequests] = useState();

  const { user, setCurrentRide, setSelectedFrom, setSelectedTo } =
    useContext(MyContext);

  const DBRideRef = useRef(/**UTILISEZ L'IDENTIFIANT DE LA COURSE PAR ICI */);

  useEffect(() => {
    //IL FAUDRA METTRE A JOUR LA BASE DE DONNE PAR ICI
    return () => {
      //IL FAUDRA METTRE A JOUR LA BASE DE DONNE PAR ICI
    };
  }, []);

  const onRidesLoaded = (values) => {
    if (!values) {
      setRideRequests([]);
      return;
    }
    const keys = Object.keys(values);
    if (keys && keys.length !== 0) {
      const rides = [];
      for (const key of keys) {
        rides.push(values[key]);
      }
      setRideRequests(rides);
    } else {
      setRideRequests([]);
    }
  };

  const acceptRide = async (request) => {
    request.driver = user;
    request.status = "accepted";
    UI.showLoading();
    try {
      //IL FAUDRA METTRE A JOUR LA BASE DE DONNE PAR ICI
    } catch (error) {
      UI.hideLoading();
    }
    UI.hideLoading();
    localStorage.setItem("currentRide", JSON.stringify(request));
    setCurrentRide(request);
    setSelectedFrom(request.pickup);
    setSelectedTo(request.destination);
  };

  const renderRideList = () => {
    if (rideRequests?.length) {
      return rideRequests.map((request) => (
        <div className="ride-list__result-item" key={request.rideUuid}>
          <div className="ride-list__result-icon">
            <svg
              title="LocationMarkerFilled"
              viewBox="0 0 24 24"
              className="g2 ec db"
            >
              <g transform="matrix( 1 0 0 1 2.524993896484375 1.0250244140625 )">
                <path
                  fillRule="nonzero"
                  clipRule="nonzero"
                  d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z"
                  opacity="1"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <p className="ride-list__result-label">
              <span>Lieu de depart: </span>
              {request.pickup && request.pickup.label
                ? request.pickup.label
                : ""}
            </p>
            <p className="ride-list__result-label">
              <span>Destination: </span>
              {request.destination && request.destination.label
                ? request.destination.label
                : ""}
            </p>
            <button
              className="ride-list__accept-btn"
              onClick={() => acceptRide(request)}
            >
              Accepter
            </button>
          </div>
        </div>
      ));
    } else {
      return (
        <div className="justify-center">
          <img src={void_icon} style={{width:"100px"}}></img>
          <h1 className="empty-message pt-6 pb-6 mt-4">Vous n'avez aucune course actuellement!</h1>
        </div>
      )
    }
  };

  return (
    <div className="ride-list container">
      <div className="ride-list__container">
        <div className="ride-list__title mt-4">Liste de courses</div>
        <div></div>
      </div>
      <div className="ride-list__content mt-4 mb-4">{renderRideList()}</div>
    </div>
  );
};

export default RideList;
