import React, { Component } from "react";
import Slider from "react-slick";
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/imageContainers.css';
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="image_slider">
    
        <Slider {...settings}>
          <div>
          <p> <Link to={`/offers/15percent-off`} ><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1641299453_homeweb.jpg'></img></Link></p> 
          </div>
          <div>
          <p><Link to ={`/offers/20percent-off`} ><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1637042183_Home_bannerddd.jpg'></img></Link> </p>
          </div>
          <div>
          <p> <Link to ={`/offers/6months-member`}><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1624976484_Web_home.jpg'></img></Link></p>
          </div>
        </Slider>
      </div>
    );
  }
}
