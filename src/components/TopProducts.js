import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="top_slider">
        <div><h2 className="top_heading">Top Brands</h2></div>
        <Slider {...settings}>
          
          <div className="top">
            <div className="top">
            <img className="top_image"src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/head-shoulders.jpg?v=15'></img>
            <span className="card-element" >Head-sholders</span>
            <h3>Upto 5% off</h3>
            </div> 
        </div>
          <div className="top">
          
          <div className="top">
            <img className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/coony.jpg?v=15'></img>
            <span  className="card-element">Coony</span>
            <h3>Upto 30% off</h3>
          </div>
          </div>
          <div className="top">
          
          <div className="top">
            <img className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/coony.jpg?v=15'></img>
            <span className="card-element">Veet</span>
            <h3>Flat 10% off</h3>
           
          </div>
          </div>
          <div className="top">
          
          <div className="top">
            <img className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/st-dvence.jpg?v=15'></img>
            <span className="card-element">St-dvence</span>
            <h3>Upto 30% off</h3>
            
          </div>
          </div>
          <div className="top">
          
          <div className="top">
            <img  className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/aroma-magic.jpg?v=15'></img>
            <span className="card-element">Aroma-magic</span>
            <h3>Up to 25% off</h3>
            
          </div>
          </div>
          <div className="top">
          
          <div className="top">
            <img className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=15'></img>
            <span className="card-element">Dabur</span>
            <h3>Upto 27% off</h3>
            
          </div>
          </div>
          <div className="top">
          
          <div className="top">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/baidyanath.jpg?v=15'></img>
            <span className="card-element">Baidyanath</span>
            <h3>FLAT 10% off</h3>
            
          </div>
          </div>
          <div className="top">
         
          <div className="top">
            <img className="top_image" src='https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/kerala-ayurveda.jpg?v=15'></img>
            <span className="card-element">Kerala-ayurveda</span>
            <h3>Flat 15% off</h3>
           
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}