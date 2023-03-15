import {FC, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Product } from '../types';
import "../styles/Products.css"




const AllProducts:FC = () => {
  

  const [loading,setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  

  const [products,setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])


  useEffect(() => {

    const handleFetchData = async () => {
      
      await setLoading(true)

      const responseCategory = await axios.get('https://dummyjson.com/products/categories');
      const categories:string[] = responseCategory.data;
      setCategories(categories);
  
     
      const responseProducts = await axios.get('https://dummyjson.com/products');
      const data:Product[] = await responseProducts.data.products;
      setProducts(data)
      setLoading(false)

    }
    handleFetchData().catch(console.error);

  },[])

  return (
    <div>
      
      { loading ?
      <div className='loader-container'><div className="loader"></div></div>
      : 
      <div>
        <h1 className='text-center gradient-bg pt-5 pb-5 m-0'>All Products</h1>
        <div className='products-grid'>


          <div className='sidebar rounded pb-3'>
            <h3 className='ml-3 m-0 pt-4 pb-3'>Categories</h3>
            {categories.map((x,index) => {
              return(<a href={`/products/${x}`} className='h6 d-block ml-3' key={index}>{x}</a>)
            })}
          </div>


          <div className='products'>
              {products.map((x,index) => {
                return(
                  <div key={index} onClick={()=>{navigate(`/product/${x.id}`)}} className="product-grid-items  rounded">
                    <img id='product-img' className=' rounded-left'  src={x.thumbnail} alt="" />
                    <div className='ml-3 mt-3'>
                      <h2>{x.title}</h2>
                      <p className='mr-4'>{x.description}</p>
                      <h5><b>Price:</b> ${x.price}</h5>
                      <span className='mb-3 badge badge-danger btn-sm'><h5 className='m-1'>Save {x.discountPercentage}% !</h5></span>
                    </div>
                  </div>
                )
              })}
          </div>


        </div>
      </div>
      }

    </div>
  )
}

export default AllProducts