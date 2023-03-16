import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "../styles/SingleProduct.css"

import { Product } from "../types"
import { dummyProduct } from '../types';


function SingleProduct() {
    let { productID } = useParams();
    const [product,setProduct] = useState<Product>(dummyProduct);
    const [loading,setLoading] = useState<boolean>(false);
    const [discount,setDiscount] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([])


    useEffect(()=>{
        

        const fetchProduct = async () =>{
            

            setLoading(true)
            const categoryResponse = await axios.get('https://dummyjson.com/products/categories');
            const categories = categoryResponse.data;
            setCategories(categories)


            const response = await axios.get(`https://dummyjson.com/products/${productID}`)
            setProduct(response.data)
            const discountedPrice = parseInt(response.data.price)-(parseInt(response.data.discountPercentage)*0.01*parseInt(response.data.price))
            setDiscount(Math.round(discountedPrice * 100) / 100)
            setLoading(false)
        }
        fetchProduct()


        
    },[productID])    

    async function handleClick(){
        const productID = product.id;
        const myCartIDs:number[] = JSON.parse(localStorage.getItem('cartIDs') || "[]")
        const myCartItems:Product[] = JSON.parse(localStorage.getItem('cartItems') || "[]")

        if (myCartIDs === null){
            localStorage.setItem('cartIDs',JSON.stringify([productID]))
        }else{
            myCartIDs.push(productID)
            localStorage.setItem('cartIDs',JSON.stringify(myCartIDs))
        }

        if (myCartItems === null){
            localStorage.setItem('cartItems',JSON.stringify([product]))
            alert("Item has been added to cart.")
        }else{
            let arrayIDs:number[] = []
            await myCartItems.forEach(e => {
                arrayIDs.push(e.id)
            })

            if (arrayIDs.includes( product.id)){
                alert("Item has been added to cart.")
                return
            }else{
                myCartItems.push(product)
                localStorage.setItem('cartItems',JSON.stringify(myCartItems))
                alert("Item has been added to cart.")
            }

        }

        
    }


    return (
        <div >
            {loading ?
            <div className='loader-container'><div className="loader"></div></div> 
            :
            <div className='product-page mt-5 mb-5 '>
                <div className='sidebar-single-page rounded pb-3'>
                    <h3 className='ml-3 m-0 pb-3 pt-4'>Categories</h3>
                    {categories.map((x,index) => {
                    return(<a href={`/products/${x}`} className='h6 d-block ml-3' key={index}>{x}</a>)
                    })}
                </div>
                <div className='product-info rounded pt-5 pb-4 pr-4 pl-4'>  
                    <h1>{product.title} </h1><h2><span className='badge badge-dark btn-sm mb-3'>{product.category}</span></h2>
                    <p>{product.description}</p>
                    <h5 className=''><b>Price:</b> <del>${product.price}</del> <span className='text-success'>${discount}</span></h5>
                    <h5 className=''><b>Rating:</b> {product.rating}/5</h5>
                    <h5 className='mb-5'><b>Brand:</b> {product.brand}</h5>
                    <img className='d-block rounded mb-5' style={{objectFit:"cover"}} width={500} height={330} src={product.thumbnail} alt="" />
                    <span className='badge btn-block mt-5  badge-danger btn-sm'><h5 className='m-1'>Save {product.discountPercentage}% !</h5></span>
                    <button onClick={handleClick} className='d-block btn-block mt-2 mb-1 btn btn-purple'><b>Add to Cart</b></button>
                </div>
            </div>}
        </div>
    )
}

export default SingleProduct;