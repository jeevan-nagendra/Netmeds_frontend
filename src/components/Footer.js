import React from 'react'
import '../components/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
            <div className='footer1'>
                <div >
                    <img src='https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg'></img>
                    <p className='text'>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha& Company one of India's most trusted<br></br> pharmacies, with over 100 years'experience in displaying quality medicines</p>
                    <hr></hr> 
                    <div className='footer-handle'>
                    <div className='company'>
                        
                      <li> <h4>Company</h4>
                        <ul><Link className="footer-text"to={'/about'}>About_netmeds </Link></ul>
                        <ul><Link className="footer-text" to={'/customer-speak'}>Customers Speak</Link></ul>
                        <ul><Link className="footer-text" to={'/in-the-news'}>In the News</Link></ul>
                        <ul><Link className="footer-text" to={'/contact'}>Contact</Link></ul></li> 
                    </div>   
                    <div className='shoping'>
                        
                      <li> <h4> Shopping</h4>
                       <ul> <Link className="footer-text" to='/browse-by-manufacturers'>Browse by Manufacturers</Link></ul>
                       <ul><Link className="footer-text" to='/health-articles'>Health Articles</Link></ul>
                       <ul> <Link className="footer-text"to={'/offers'}>Offers / Coupons</Link></ul>
                       <ul><Link className="footer-text" to={'faqs'}>FAQs</Link></ul></li> 
</div>      
                    <div className='Categories'>
                        
                        <li><h4> CATEGORIES</h4>
                         <ul><Link className="footer-text" to={'/ayush'}>Ayush</Link></ul>
                         <ul><Link className="footer-text" to={'/devices'}>Devices</Link></ul>
                         <ul><Link  className="footer-text" to={'/family-care'}>Family Care</Link></ul>
                         <ul><Link className="footer-text" to={'/fitness'}>Fitness</Link></ul>
                         <ul><Link className="footer-text" to={'/lifestyle'}>Lifestyle</Link></ul>
                         <ul><Link className="footer-text" to={'/personal-care'}>Personal care</Link></ul>
                         <ul><Link  className="footer-text" to={'/treatment'}>Treatments</Link></ul>
                         </li>
 </div>
                
                <div className='social'>
                        
                        <li><h4> SOCIAL</h4>
                         <ul><Link className="footer-text" to={'#'}>Patients Alike</Link></ul>
                         <ul><a className="footer-text" href='https://www.facebook.com/NetMeds/'>Facebook</a></ul>
                         <ul><a className="footer-text" href='https://twitter.com/NetMeds'>Twitter</a></ul>
                         <ul><a className="footer-text" href='https://www.linkedin.com'>LinkedIn</a></ul>
                         <ul><a className="footer-text" href='https://www.youtube.com/channel/UCNuPx810akEPrbwAUpdNPyw'>Youtube</a></ul>
                         <ul><Link className="footer-text" to={'#'}>Refer & Earn</Link></ul>
                         </li>
 </div><div>
                     <h3><b>Subscibe to our NewsLetter</b></h3>
                     <p>Get a free subscription to our health and <br></br>fitness tip and stay tuned to our latest offers </p> 
                    <input className='email-enter' placeholder='Enter your email address' ></input>
                    <Link to={'#'}> <img className='playstore-img'src='https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png' alt="playstore"></img></Link>
                    </div></div> <hr></hr> 
                    <div className='footer-last'>
                    <Link className="footer-text"  to={'/wellness'}>Wellness</Link>
                    <Link  className="footer-text" to={'/lab-test'}>Lab Tests</Link>
                    <Link className="footer-text"to={'/beauty'}> Beauty</Link>
                    <Link className="footer-text" to={'/consult-a-doctor'}>Consult a Doctore</Link>
                    <Link className="footer-text" to={'/generic-medicine'}>Generic Medicine</Link>
                    <Link className="footer-text"to={'/store-near-you'}>Store near you</Link>
                    <p> Copyrights 2022</p>
                    </div>
                    
                    </div>
                </div>
            
    )
}

export default Footer
