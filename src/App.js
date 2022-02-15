import logo from './logo.svg';
import './App.css';
import ProminentAppBar from './components/navigation_bar';
import { SliderData } from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/SliderData.js'
import bootstrap from 'bootstrap';
import ImageSlider from './components/imageSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AutoPlayMethods from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/imageComponent.js';
import PaymentOption from './components/payment_option';
import Product from './components/Product';
import SwipeToSlide from './components/TopProducts';
import SwipeToSlide1 from './components/LightingDeals';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import HealthConcerns from './components/HealthConcerns';
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/TopProducts.css'
import SignIn from './components/SignIn';
import Medicine from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/navbarcomponents/Medicine.js';
import Wellness from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/navbarcomponents/Wellness.js';
import Labtest from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/navbarcomponents/Labtest.js';
import ProminentAppBarMain from './components/ProminentAppBarMain';
import PersonalCare from './components/navbarcomponents/Beautycomponents/PersonalCare';
import Make_up from './components/navbarcomponents/Beautycomponents/Make_up';
import Hair from './components/navbarcomponents/Beautycomponents/Hair';
import Skin_care from './components/navbarcomponents/Beautycomponents/Skin_care';
import Tools_appliances from './components/navbarcomponents/Beautycomponents/Tools_appliances';
import Mom_baby from './components/navbarcomponents/Beautycomponents/Mom_baby';
import Fragrances from './components/navbarcomponents/Beautycomponents/Fragrances';
import Men_rooming from './components/navbarcomponents/Beautycomponents/Men_grooming';
import Men_grooming from './components/navbarcomponents/Beautycomponents/Men_grooming';
import Health_library from './components/navbarcomponents/Health_Corner/Health_library';
import Patients_alike from './components/navbarcomponents/Health_Corner/Patients_alike';
import Corona_awareness from './components/navbarcomponents/Health_Corner/Corona_awareness';
import FirstSlider from './components/SliderComponents/FirstSlider';
import SecondSlider from './components/SliderComponents/SecondSlider';
import ThirdSlider from './components/SliderComponents/ThirdSlider';
import ShowProducts from './ShowProducts';
import ProductDetails from '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/ProductDetailsPage/ProductDetails.js'
import About from './components/FooterComponents/About';
import CustomerSpeak from './components/FooterComponents/CustomerSpeak';
import Contact from './components/FooterComponents/Contact';
import InTheNews from './components/FooterComponents/InTheNews';
import BrowseByManufacturers from './components/FooterComponents/BrowseByManufacturers';
import HealthArticles from './components/FooterComponents/HealthArticles';
import FAQS from './components/FooterComponents/FAQS';
import Offers from './components/FooterComponents/Offers';
import FamilyCare from './components/FooterComponents/FamilyCare';
import ProductDetail from './containers/productDetail';
import ProductListing from './containers/productListing';


function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
       <Route path="/"  element={ <ProminentAppBar/>}/> 
       <Route path="/signIn"element={ <SignIn/>}/>
       <Route path="/prescriptions" element={< Medicine/>}/>
       <Route path="/wellness" element={< Wellness/>}/>
       <Route path="/labtest" element={< Labtest/>}/>
       <Route path="/personal-care" element={<PersonalCare/>}/>
       <Route path="/make-up" element={<Make_up/>}/>
       <Route path="/hair" element={<Hair/>}/>
       <Route path="/skin-care" element={<Skin_care/>}/>
       <Route path="/tools-appliances" element={<Tools_appliances/>}/>
       <Route path="/mom-baby" element={<Mom_baby/>}/>
       <Route path="/fragrances" element={<Fragrances/>}/>
       <Route path="/men-grooming" element={<Men_grooming/>}/>
       <Route path="/health-library" element={<Health_library/>}/>
       <Route path="/patients-alike" element={<Patients_alike/>}/>
       <Route path="/corona-awareness" element={<Corona_awareness/>}/>
       <Route path="/covid-essentials" element={<Corona_awareness/>}/>
       <Route path="/diabetes" element={<Corona_awareness/>}/>
       <Route path="/eye-wear" element={<Corona_awareness/>}/>
       <Route path="/ayush" element={<Corona_awareness/>}/>
       <Route path="/fitness" element={<Corona_awareness/>}/>
       <Route path="/mom-baby" element={<Corona_awareness/>}/>
       <Route path="/devices" element={<Corona_awareness/>}/>
       <Route path="/surgicals" element={<Corona_awareness/>}/>
       <Route path="/sexual-wellness" element={<Corona_awareness/>}/>
       <Route path="/treatments" element={<Corona_awareness/>}/>
       <Route path="/offers/15percent-off" element={<FirstSlider/>}/>
       <Route path="/offers/20percent-off" element={<SecondSlider/>}/>
       <Route path="/offers/6months-member" element={<ThirdSlider/>}/>
       <Route path ="/products/:productId" element={<ProductDetails/>}/>
       <Route path = "/about" element={<About/>}/>
       <Route path="/customer-speak" element={<CustomerSpeak/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/in-the-news" element={<InTheNews/>}/>
       <Route path="/browse-by-manufacturers" element={<BrowseByManufacturers/>}/>
       <Route path="/health-articles" element={<HealthArticles/>}/>
       <Route path="/faqs" element={<FAQS/>}/>
       <Route path="/offers" element={<Offers/>}/>
       <Route path="/family-care" element={<FamilyCare/>}/>
       <Route path="/product-listing" element={<ProductListing/>}/>
       <Route path="/product/:productId" element={<ProductDetail/>}/>

       


      </Routes>
    </div>
      </Router>
          
         
);
}

export default App;
