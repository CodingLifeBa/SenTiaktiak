import { Link } from "react-router-dom";

import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-3.png";
import img4 from "./images/img-4.png";
import img5 from "./images/img-5.png";
import img6 from "./images/img-6.png";
import img7 from "./images/localhost_3000_dashboard.png";
import inicon from "./images/in-icon.png";
import logoplaystore from "./images/logo_play_store.png";
import logo from "./images/logo.png";
import logott from "./asset/logo.png";
import monlogo from "./images/monlogo.jpeg";
import moto from "./images/moto.png";
import motoclient from "./images/motoclient.jpeg";
import motoclient1 from "./images/motoclient1.jpg";
import motoville from "./images/motoville.jpg";
import notreappli from "./images/notreappli.jpg";
import searchicon from "./images/search-icon.png";
import smile from "./images/smile.jpg";
import togglemenu from "./images/toggle-menu.png";
import twittericon from "./images/twitter-icon.png";
import workicon from "./images/work-5382501_1280.jpg";
import youtubeicon from "./images/youtube-icon.png";
import appstore from "./images/appstore.jpg";
import appstore1 from "./images/appstore1.png";
import instagramicon from "./images/instagram-icon.png";
import fbicon from "./images/fb-icon.png";
import buliticon from "./images/bulit-icon.png";

import lowprice from "./asset/basprix.f426477c48795c42dd7b.png"
import cc from "./asset/serviceclient.20fcd70d898a57de898a.png"
import comfort from "./asset/confort.6641f1cd37a1b1cd0c9f.png"
import secure from "./asset/securite.3e9dbdad6eca15e51dc8.png"   

function Home() {

  return (
    <>
      <div>
        <div className="banner_section">
          <div className="container-fluid">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="book_now btn" style={{ color: "white" }}>
                        <Link style={{ color: "white" }} className="texte-white" to="/signup">Essayer SenTiakTiak</Link>
                      </div>
                      <div className="image_1"><img src={moto} /></div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="booking_text">
                      </h1>
                      <div className="contact_bg container-sm">
                            <p className="p_acceuil">Commandez une course. Allez partout. Tout simplement!</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div id="taxis" className="taxis_section layout_padding">
          <div className="container">
            <h1 className="our_text">Nos <span style={{ color: " #f4db31" }}>Services</span></h1>
            <div className="taxis_section_2">
              <div className="row">
                <div className="col-sm-4">
                  <div className="taxi_main ">
                    <div className="round_1">01</div>
                    <h2 className="carol_text p-2">Transport personne </h2>
                    <p className="reader_text p-2">La ville est sous vos pied avec notre réseau de TiakTiakeurs sur moto.<br /> </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="taxi_main">
                    <div className="round_1">02</div>
                    <h2 className="carol_text p-2">Transport bagages</h2>
                    <p className="reader_text p-2">Nous transportons vos bagages sérenement et en securité<br /> </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="taxi_main">
                    <div className="round_1">03</div>
                    <h2 className="carol_text p-2">Récuperation colis</h2>
                    <p className="reader_text p-2">Nous allons plus loin avec les options de récuperation de colis<br /> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="booking" className="ride_section layout_padding">
          <div className="container">
            <div className="ride_main">
              <h1 className="ride_text">Pourquoi choisir <span style={{ color: "#f4db31" }}>SenTiakTiak</span></h1>
            </div>
          </div>
        </div>
        <div className="ride_section_2 layout_padding">
          
          <div className="row pt-4" style={{ textAlign: "justify" }}>
            <div className="col-md-3">
              <div className="p-4 m-2 text-center">
                <span className="img-secu">
                  <img src={secure}></img>
                </span>
                <h5 className="font-weight-bold">Sécurité</h5>
                Votre sécurité et bien-être sont prioritaires. Avec nos partenaires, nous assurons un voyage serein.
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="p-4 m-2 text-center">
                <span className="img-confort">
                  <img src={comfort}></img>
                </span>
                <h5 className="font-weight-bold">Confort</h5>
                Embarquez pour une expérience sur mesure ! Choisissez vos options de voyage selon vos envies.
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="p-4 m-2 text-center">
                <span className="img-lowprice">
                  <img src={lowprice}></img>
                </span>
                <h5 className="font-weight-bold">Bas prix</h5>
                Rendre le transport en bus abordable pour tous, c'est notre mission. Nous chassons les meilleurs prix pour vous.
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="p-4 m-2 text-center">
                <span className="img-cc mt-3">
                  <img src={cc}></img>
                </span>
                <h5 className="font-weight-bold">Service client 24h/24</h5>
                Votre satisfaction, notre priorité ! Contactez-nous 24/7. Expérience et savoir-faire au service de vos voyages.
              </div>
              
            </div>
          </div>
        </div>

        <div id="contact" className="location_sectin layout_padding">
          <div className="container-fluid">
            <div className="location_main">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-5">
                  <div className="download_text">Installez<br />notre application pour une expérience optimale.</div>
                </div>
                <div className="col-sm-3 container">
                  <div className="image_7"><img className="image-fluid" style={{height:"height: 300px", width:"100%"}} src={img7} /></div>
                  <div className="appd">
                    <div className="images_G1"><a href="#"><img src={appstore1} style={{ width: "200px" }} /></a></div>
                    <div className="image_G2"><a href="#"><img src={logoplaystore} style={{ height: "50px", width: "200px" }} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_footer ">
          <div className="container">
            <div className="footer_section_2">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">Adresse</h2>
                  <p className="ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
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
      </div >
      
      <div className="copyright_section">
        <div className="container">
          <p className="copyright">&copy;2024 SenTiakTiak</p>
        </div>
      </div>
    </>
  )
}

export default Home