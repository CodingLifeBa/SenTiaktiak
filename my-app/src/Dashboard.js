import React, { useEffect, useRef, useContext, useCallback, useState } from "react";
import { redirect } from "react-router-dom";
import L from "leaflet";

import RequestRide from "./RequestRide";
import Header from "./Header";
import RideDetails from "./RideDetails";
import RideList from "./RideList";

import {MyContext} from "./Contextor";
import Footer from "./Footer";

require("leaflet-routing-machine");


const Dashboard = () => {
  const map = useRef(null);
  const routeControl = useRef();

  const { selectedFrom, selectedTo, user, currentRide } = useContext(MyContext);

  const accessDenied = ()=>{
    if(!localStorage.getItem("auth")) {
      return redirect("/login") 
    }
  }
  accessDenied();

  const drawRoute = useCallback((from, to) => {
    if (shouldDrawRoute(from, to) && routeControl && routeControl.current) {
      const fromLatLng = new L.LatLng(from.y, from.x);
      const toLatLng = new L.LatLng(to.y, to.x);
      routeControl.current.setWaypoints([fromLatLng, toLatLng]);
    }
  }, []); 

  useEffect(() => {
    if (shouldDrawRoute(selectedFrom, selectedTo)) {
      
      drawRoute(selectedFrom, selectedTo);
    }
  }, [selectedFrom, selectedTo, drawRoute]);

  const initMap = () => {
    if (map.current != undefined) map.current.remove()
    map.current = L.map("map", {
      center: [14.6935, -17.448],
      zoom: 13,
      layers: [
        L.tileLayer("https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=67c96bbeeda14438a93031e5bf0733c4", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  };
//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
  const initRouteControl = () => {
    routeControl.current = L.Routing.control({
      show: true,
      fitSelectedRoutes: true,
      plan: false,
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: "0.7",
            weight: 6,
          },
        ],
      },
      router: L.Routing.mapbox(`pk.eyJ1IjoiaGllcHRsIiwiYSI6ImNrc2xuc2F5bDFhcXgyd3BlYTNhYnlkZnIifQ.9uRZZTvD7TChE2NxXZT-iw`),
    })
      .addTo(map.current)
      .getPlan();
  };

  // if (user && selectedFrom && selectedTo) {
  //   initMap(); 
  //   initRouteControl();
  // }

  const shouldDrawRoute = (selectedFrom, selectedTo) => {
    
    return (
      selectedFrom?.label &&
      selectedTo?.label &&
      selectedFrom?.x &&
      selectedTo?.x &&
      selectedFrom?.y &&
      selectedTo?.y
    );
  };

  useEffect(()=>{
    initMap(); 
    initRouteControl();
  },[]);


  const renderSidebar = () => {
    const isPassenger = user && user.role === "passenger";
    if (isPassenger && !currentRide) {
      return (
        <>
          <div className="container" style={{}}>
          <RequestRide></RequestRide></div>
        </>
      )
    }
    if (isPassenger && currentRide) {
      return (
        <>
          <RideDetails
            user={currentRide.driver}
            isDriver={false}
            currentRide={currentRide}
          />
        </>
      );
    }
    if (!isPassenger && !currentRide) {
      return (
        <>
          <RideList />
        </>
      );
    }
    if (!isPassenger && currentRide) {
      return (
        <>
          <RideDetails
          user={currentRide.requestor}
          isDriver={true}
          currentRide={currentRide}/>
        </>
      );
    }
    return <></>;
  };

  return (
    <>
      <Header />
      <div id="map" className="" style={{width: "100%",height:"350px",zIndex: "3"}} />
      {renderSidebar()}
      <Footer></Footer>
    </>
  );
};

export default Dashboard;