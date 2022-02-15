import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeSelectedProduct, fetchProduct } from '../redux/actions/ProductActions';
import { useSelector } from 'react-redux';
import '/home/jeevannagendra/Desktop/MedPlus_clone/netmeds/src/containers/productDetails.css'

const ProductDetail = () => {
    const product = useSelector((state) => state.product);

    const{payload,name,productImage,sellPrice,category} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);
    
    
    
     useEffect(() => {
     if(productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct)
        };
    },[]);

  return (
     <> 

        {Object.keys(product).length===0 ? (
            <div>...loading</div>
        ):(
                
            <div className='card'>
                <span className='name'>{payload.name}</span> 
            <img classnName='inner-box' className='imageUi' src={`http://localhost:8080/${payload.productImage}`} alt={name} width={400} height={400} />

               <span className="sub-headings">{payload.description}</span>
                <span className="best-price"><b>MRP</b>{payload.mrp}</span>
                <span className="best-price"><b>Best Price*</b></span>
             <span className="price">{payload.sellPrice}</span>
                <button className="add-to-cart"> Add to Cart</button>
          </div>
                   
                    
                    )}
        </>
  )

};

export default ProductDetail;
