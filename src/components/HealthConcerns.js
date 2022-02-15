import React, { Component } from "react";
import Slider from "react-slick";
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/HealthConcern.css'
export default class HealthConcerns extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <div className="health_heading"><h2>Health Concerns</h2></div>
        <Slider {...settings}>
          
          
            <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/diabetic-care.jpg'></img>
            <span>Diabetic-Care</span>
            
            </div> 
        
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/de-addiction.jpg'></img>
            <span>De-Addiction</span>
            
          </div>
          </div>
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg'></img>
            <span>Lung Care</span>
            
           
          </div>
          </div>
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg'></img>
            <span>Weight Care</span>
            
            
          </div>
          </div>
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg'></img>
            <span>Women'S care</span>
            </div>
            
          </div>
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg'></img>
            <span>Bone And Joint Pain</span>
            
            
          </div>
          </div>
          <div className="health-card">
          
          <div className="health-card">
            <img src='https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg'></img>
            <span>Cold And Fever</span>
          
            
          </div>
          </div>

        </Slider>
      </div>
    );
  }
}