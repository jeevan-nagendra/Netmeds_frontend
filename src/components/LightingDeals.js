import React, { Component } from "react";
import Slider from "react-slick";
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/LightingDeals.css'

export default class SwipeToSlide1 extends Component {
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
        <h2>Lighting deals</h2>
        <Slider {...settings}>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/860987/morpheme_remedies_garcinia_green_tea_500mg_extract_60_s_0.jpg" alt="medicine" ></img>
              <span>Morpheme Remedies Garcinia</span> 
              <span className="sub-headings">MKT: marpheme remedy</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 499.08</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/812809/pure_nutrition_progut_plus_for_healthy_digestion_veg_capsules_60_s_0.jpg" ></img>
              <span>  Pure Nutrition  Progut Plus</span>
              <span className="sub-headings">MKT: Herb Nutriprod..</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 1,499.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/858567/inlife_triphala_extract_capsules_60_s_0.jpg" ></img>
              <span>INLIFE triphala Extract Capsules</span>
              <span className="sub-headings">MKT: Inline pharma...</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 289.17</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg" alt="medicine" ></img>
              <span>INLIFE Guggul Extract Capsules</span>
              <span className="sub-headings">MKT: Inlife Pharma</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 363.77</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/858569/inlife_shatavari_extract_capsules_60_s_0.jpg" ></img>
              <span>INLIFE Shatavari Extract Capsules</span>
              <span className="sub-headings">MKT:  Inlife Pharma</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 314.37</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg" alt="medicine" ></img>
              <span>HealthVit Ginkgo Biloba 180 mg</span>
              <span className="sub-headings">MKT: West Coast Pharma</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 860.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg" ></img>
              <span>HealthVit Horse Chestnut 500mg</span>
              <span className="sub-headings">MKT:West Coast Pharma</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs. 688.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/858539/inlife_diastan_plus_diabetic_care_powder_300_gm_0.jpg" alt="medicine" ></img>
              <span> INLIFE Diastan Plus Diabetic Care</span>
              <span className="sub-headings">MKT: Inlife Pharma</span>
              <h5><b>Best Price*</b></h5>
              <span className="price">Rs. 477.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/838353/healthvit_boswellia_serrata_500_mg_capsule_60_s_0.jpg" alt="medicine" ></img>
              <span> HealthVit Boswellia Serrata 500mg</span>
              <span className="sub-headings">MKT: West Coast pharma</span>
              <h5><b>Best Price*</b></h5>
              <span className="price">Rs 387.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/814953/zenith_nutrition_gin_kgo_biloba_60_mg_capsules_90_s_0.jpg" alt="medicine" ></img>
              <span> Zenith Nutrition Gin kgo Biloba 60mg</span>
              <span className="sub-headings">MKT: Zenith Nutrition</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price"> 499.2n0 Rs</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
          <div className="health-care">
          <div className="card">
              <img src="https://www.netmeds.com/images/product-v1/150x150/814959/zenith_nutrition_ginseng_500_mg_capsules_100s_0_1.jpg" alt="medicine" ></img>
              <span> Zenith Nutrition ginseng 500mg</span>
              <span className="sub-headings">MKT: Zenith Nutrition</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">Rs 507.00</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          </div>
        </Slider>
      </div>
    );
  }
}