import React ,{Component}from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/imageContainers.css"
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
      };
      return (
        <div className='margin_left'>
          <div><h1 className='trending_heading'>Trending Today</h1></div>
          <Slider className="display" ref={slider => (this.slider = slider)} {...settings}>
            <div>
            <a href="#"><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1640936877_Mini-banner_web.jpg'></img></a>
            </div>
            <div>
            <a href="#"><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1634972793_Netmeds-masks_Mini_Banner__Web.jpg'></img></a>
            </div>
            <div>
            <a href="#"><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1637564004_Mini-banner_calpol.jpg'></img></a>
            </div>
            <div>
            <a href="#"><img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1638442174_Dabur_web.jpg'></img></a>
            </div>
          </Slider>
        </div>
      );
    }
  }