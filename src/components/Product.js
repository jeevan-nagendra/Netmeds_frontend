import React from 'react'
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/components/Product.css'
const Product = (props) => {
    return (
        <div className='box'>
            
           <div className='inner-box'>
           <img src={props.image}></img>
           <span className="card-element">{props.name}</span>
           </div> 
        </div>
    )
}

export default Product

