import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ShowProducts(props) {

    const [products,setData] = useState([])

    useEffect(()=>{
        console.log("Adding component")
        axios.get('http://localhost:8080/products')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    console.log(products)

    return (
        <div>
            {products.map(product=>(
                <div className='posted'>
                    <p><Link to={`/product/${product._id}`}>{product._id} </Link></p>
                    {product.productImage}
                </div>
            ))}
        </div>
    )
}

export default ShowProducts