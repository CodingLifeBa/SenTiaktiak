import { useContext,useState,useRef,useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header.js";
import Signup from "./Signup.js";
import SignupDriver from "./SignupDriver.js"; 
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
  
import { MyContext }from "./Contextor.js";
import Loading from "./Loading";
import * as UI from "./ui/ui";
import "./style.css";
import logo from "./asset/logo.png";

function App() {
  const [user, setUser] = useState(null);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);
  const [rideRequest, setRideRequest] = useState(null);
  const [currentRide, setCurrentRide] = useState(null);

  const dbCreatedRideRef = useRef();
  const dbCurrentRideRef = useRef();
  const lookingDriverTimeout = useRef();
  const lookingDriverMaxTime = 30000;

  const initAuthUser = () => {
    const authenticatedUser = localStorage.getItem("auth");
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  };

  const initCurrentRide = () => {
    const currentRide = localStorage.getItem("currentRide");
    if (currentRide) {
      const parsedCurrentRide = JSON.parse(currentRide);
      setCurrentRide(parsedCurrentRide);
      setSelectedFrom(parsedCurrentRide.pickup);
      setSelectedTo(parsedCurrentRide.destination);
    }
  };

  useEffect(() => {
    initAuthUser();
    initCurrentRide();
  }, []); 

  const onCreatedRideRefUpdated = useCallback(
    (updatedRide) => {
      if (
        updatedRide?.rideUuid === rideRequest.rideUuid &&
        updatedRide?.driver
      ) {
        UI.hideLoading();
        clearTimeout(lookingDriverTimeout.current);
        setRideRequest(null);
        localStorage.setItem("currentRide", JSON.stringify(updatedRide));
        setCurrentRide(updatedRide);
      }
    },
    [rideRequest]
  );

  useEffect(() => {
    if (rideRequest) {
      lookingDriverTimeout.current = setTimeout(() => {
        alert(
          "Nous n'arrivons pas àtrouver un chauffeur pour l'instant, veuillez réessqyer plus tard.."
        );
        setRideRequest(null);
        UI.hideLoading();
      }, lookingDriverMaxTime);
      UI.showLoading();
      //IL FAUDRA METTRE A JOUR LA BASE DE DONNE PAR ICI
    }
  }, [rideRequest, onCreatedRideRefUpdated]);

  const onCurrentRideRefUpdated = useCallback(
    (updatedRide) => {
      if (
        updatedRide?.rideUuid === currentRide.rideUuid &&
        updatedRide?.driver &&
        (updatedRide?.status === "canceled" || updatedRide?.status === "done")
      ) {
        localStorage.removeItem("currentRide");
        setCurrentRide(null);
        window.location.reload();
      }
    },
    [currentRide]
  );

  useEffect(() => {
    if (currentRide) {
      //IL FAUDRA METTRE A JOUR LA BASE DE DONNE PAR ICI
    }
  }, [currentRide, onCurrentRideRefUpdated]);


  return (
    <div className="App">
      <MyContext.Provider value={{
        user,
        setUser,
        selectedFrom,
        setSelectedFrom,
        selectedTo,
        setSelectedTo,
        rideRequest,
        setRideRequest,
        currentRide,
        setCurrentRide}}>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signup-driver" element={<SignupDriver/>}></Route>
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </MyContext.Provider>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
