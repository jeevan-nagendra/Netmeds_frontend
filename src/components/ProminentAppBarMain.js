import React from 'react'

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

const ProminentAppBarMain = () => {
    return (
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
             <p className="nav-text">  <Link  to={`/signin`}>SignUp/SignIn </Link> </p>
              </div>
              <div className="top-nav1" >
              <div class="dropdown">
        <button class="dropbtn">medicine</button>
        <div class="dropdown-content">
        <a href="#">All medicines</a>
        <a href="#">Previosly ordered products</a></div></div>
          <div ><p> <Link className="medicine" to={`/wellness`}>Wellness</Link></p></div>
         <div> <p> <Link className="medicine" to={`/labtest`}>Labtest</Link></p></div>
         <div class="dropdown">
        <button class="dropbtn">Beauty</button>
        <div class="dropdown-content">
        <a href="#">Personal care</a>
        <a href="#">Make-up</a>
        <a href="#">Hair</a>
        <a href="#">Skin Care</a>
        <a href="#">Tools & Appliances</a>
        <a href="#">Mom & Baby</a>
        <a href="#">Fragrances</a>
        <a href="#">Men's Grooming</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Health Corner</button>
        <div class="dropdown-content">
        <a href="#">Health Library</a>
        <a href="#">PatientsAlike</a>
        <a href="#">Corona Awareness</a>
        </div>
        
      </div>
        </div>
        </div>
        );
        }


export default ProminentAppBarMain;
