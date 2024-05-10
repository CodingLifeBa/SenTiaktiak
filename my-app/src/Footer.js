import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";

import instagramicon from "./images/instagram-icon.png";
import fbicon from "./images/fb-icon.png";
import inicon from "./images/in-icon.png";
import buliticon from "./images/bulit-icon.png";
import twittericon from "./images/twitter-icon.png";
import youtubeicon from "./images/youtube-icon.png";
 
const Footer = () => {
    return (
        <div>
            <div className="section_footer ">
          <div className="container">
            <div className="footer_section_2">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">Adresse</h2>
                  <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">Liens utiles</h2>
                  <div className="image-icon"><img src={buliticon} /><a href="#"><span className="fb_text">Home</span></a></div>
                  <div className="image-icon"><img src={buliticon} /><a href="#"><span className="fb_text">About</span></a></div>
                  <div className="image-icon"><img src={buliticon} /><a href="#"><span className="fb_text">Taxi</span></a></div>
                  <div className="image-icon"><a href="#"><img src={buliticon} /><span className="fb_text">Booking</span></a></div>
                  <div className="image-icon"><a href="#"><img src={buliticon} /><span className="fb_text">Contact Us</span></a></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">Nous suivre</h2>
                  <div className="image-icon"><img src={fbicon} /><span className="fb_text"><a href="#">Facebook</a></span></div>
                  <div className="image-icon"><img src={twittericon} /><span className="fb_text"><a href="#">Twitter</a></span></div>
                  <div className="image-icon"><img src={inicon} /><span className="fb_text"><a href="#">Linkedin</a></span></div>
                  <div className="image-icon"><img src={youtubeicon} /><span className="fb_text"><a href="#">Youtube</a></span></div>
                  <div className="image-icon"><img src={instagramicon} /><span className="fb_text"><a href="#">Instagram</a></span></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="adderess_text">Newsletter</h2>
                  <input type="" className="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                  <button className="subscribr_bt">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Footer