import React from 'react';
import { useSelector } from 'react-redux';
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/containers/productComponent.css'
import { Link } from 'react-router-dom';


const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map((products) =>{
        const{_id,name,productImage,sellPrice,category,description} = products;
        return(
            

                <Link  className="product_list"to={`/product/${_id}`}>
           <div className='card'> 
          <img classnName='inner-box' className='imageUi' src={`http://localhost:8080/${productImage}`} alt={name} width={150} height={150} />
              <span className='name'>{name}</span> 
              <span className="sub-headings">{description}</span>
              <span className="best-price"><b>Best Price*</b></span>
              <span className="price">{sellPrice}</span>
              <button className="add-to-cart"> Add to Cart</button>
        </div>
          
        </Link>
    );
    })
    return <> {renderList}</>
};



export default ProductComponent;
