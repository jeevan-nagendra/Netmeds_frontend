import React from "react";
import './navigation_bar.css'
import 'bootstrap/dist/css/bootstrap.css';
import reactDom from "react-dom";
import { Dropdown } from "react-bootstrap";
import { SliderData } from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/SliderData.js'
import bootstrap from 'bootstrap';
import ImageSlider from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/imageSlider.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AutoPlayMethods from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/imageComponent.js';
import PaymentOption from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/payment_option.js';
import Product from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/Product.js';
import SwipeToSlide from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/TopProducts.js';
import SwipeToSlide1 from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/LightingDeals.js';
import Footer from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/Footer.js';
import HealthConcerns from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/HealthConcerns.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const ProminentAppBar=() => {
    
        return(
          <div>
            <div className="top-nav">
              <span><img className="logo"src={require("/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/icon.png")}></img></span>
              <Dropdown className="nav-dropdown">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Deliver to <span className="pin">110002 </span>
  </Dropdown.Toggle>

  <Dropdown.Menu className="menu">
    <Dropdown.Item href="#/action-1"><h4>Where do you want to delivery?</h4>
                                    <span>Get access to your Addresses, Orders, and Wishlist</span>
                                    <div><button>Sign in to see your Location</button></div></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><h4>Or Enter Pincode</h4>
                                      <span>Select picode to see product availability.</span>
                                     <div> <input placeholder="Enter Pincode"></input></div></Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Detect my location</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> 
             <input className="search-bar"type="text" placeholder="Search.."></input>
             <a className="cart"><img className="cart-logo" src={require("/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/cart.png")}></img>Cart</a>
             <p className="nav-signin"> <Link to={`/signin`}>SignUp/SignIn </Link> </p>
              </div>
      <div className="top-nav1" >
          <div> <p> <Link className="medicine" to={`/prescriptions`}>Medicine</Link></p></div>
          <div ><p> <Link className="medicine" to={`/wellness`}>Wellness</Link></p></div>
         <div> <p> <Link className="medicine" to={`/labtest`}>Labtest</Link></p></div>
         <div class="dropdown">
        <button class="dropbtn">Beauty</button>
        <div class="dropdown-content">
        <p> <Link className="medicine" to={`/personal-care`}>Personal-care</Link></p>
        <p> <Link className="medicine" to={`/make-up`}>Make-up</Link></p>
        <p> <Link className="medicine" to={`/hair`}>Hair</Link></p>
        <p> <Link className="medicine" to={`/skin-care`}>Skin Care</Link></p>
        <p> <Link className="medicine" to={`/tools-appliances`}>Tools & Appliances</Link></p>
        <p> <Link className="medicine" to={`/mom-baby`}>Mom & Baby</Link></p>
        <p> <Link className="medicine" to={`/fragrances`}>Fragrances</Link></p>
        <p> <Link className="medicine" to={`/men-grooming`}>Men's Grooming</Link></p>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Health Corner</button>
        <div class="dropdown-content">
        <p> <Link className="medicine" to={`/health-library`}>Health Library</Link></p>
        <p> <Link className="medicine" to={`/patients-alike`}>PatientsAlike</Link></p>
        <p> <Link className="medicine" to={`/corona-awareness`}>Corona Awareness</Link></p>
        </div>
  </div>
</div>
        <div className="top-nav2" >
        <div><p> <Link className="medicine" to={`/covid-essentials`}>Covid Essentials</Link></p></div>
        <div><p> <Link className="medicine" to={`/diabetes`}>Diabetes</Link></p></div>
        <div><p> <Link className="medicine" to={`/eye-wear`}>Eyewear</Link></p></div>
        <div><p> <Link className="medicine" to={`/ayush`}>Ayush</Link></p></div>
        <div><p> <Link className="medicine" to={`/fitness`}>Fitness</Link></p></div>
        <div><p> <Link className="medicine" to={`/mom-baby`}>Mom&Baby</Link></p></div>
        <div><p> <Link className="medicine" to={`/devices`}>Devices</Link></p></div>
        <div><p> <Link className="medicine" to={`/surgicals`}>Surgicals</Link></p></div>
        <div><p> <Link className="medicine" to={`/sexual-wellness`}>Sexual Wellness</Link></p></div>
        <div><p> <Link className="medicine" to={`/treatments`}>Treatments</Link></p></div>
        </div>
        <ImageSlider slides ={SliderData}/>
        <AutoPlayMethods/>
        <PaymentOption/>
        <div> <h2 className="shop_heading">Shop By category</h2></div>
        <div className='shop-by-category'>
        <Product  name="Ayush" image='https://www.netmeds.com/images/category/481/thumb/ayush_0.jpg'/>
        <Product name="HairCare" image='https://www.netmeds.com/images/category/v1/547/thumb/hair_care_200.jpg'/>
        <Product name="Body wash" image='https://www.netmeds.com/images/category/v1/525/thumb/body_care_200.jpg'/>
        <Product name="Treatments" image='https://www.netmeds.com/images/category/624/thumb/treatments_0.jpg'/>
        <Product  name="DiabeticCare" image='https://www.netmeds.com/images/category/769/thumb/diabetic_care.jpg'/>
       </div>
      <div>
        <SwipeToSlide/>
      </div>
      <div>
        <HealthConcerns/>
      </div>
      <div>
      <SwipeToSlide1/>
      </div>
      <div>
        <Footer/>
      </div>
      
      </div>

        ); 
       
}


export default ProminentAppBar;