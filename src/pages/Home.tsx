import { useState, useEffect, FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import "../styles/Home.css";

const Home:FC = () => {

  const [phoneProducts, setPhoneProducts] = useState<Product[]>([]);
  const [laptopProducts, setLaptopProducts] = useState<Product[]>([]);
  const [sunglassProducts, setSunglassProducts] = useState<Product[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  const navigate = useNavigate();


  useEffect(() => {
    handleFetchData();
  },[])

  const handleFetchData = async () => {
    setLoading(true)
    const phoneResponse = await fetch('https://dummyjson.com/products/category/smartphones');
    const laptopResponse = await fetch('https://dummyjson.com/products/category/laptops');
    const sunglassResponse = await fetch('https://dummyjson.com/products/category/sunglasses');

    const phoneData = await phoneResponse.json();
    const laptopData = await laptopResponse.json();
    const sunglassData = await sunglassResponse.json();

    let tempArray:Product[] = []

    setPhoneProducts(phoneData.products);
    for (let i = 0; i < laptopData.products.length -1; i++) {
      tempArray.push(laptopData.products[i])
    }
    setLaptopProducts(tempArray)
    setSunglassProducts(sunglassData.products)

    setLoading(false)
  }

  return (
    <div>
      { loading ?
        <div className='loader-container'><div className="loader"></div></div>
      :
      <div>
        <div className='hero-text text-center'>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quidem velit eius? Provident impedit fuga officia sint, possimus maxime qui.</p>
            
            <button type="button" onClick={()=>{navigate("/cart")}} className="btn btn-lg btn-purple mr-2 mb-2">View Cart</button>
            <button type="button" onClick={()=>{navigate("/products")}}  className="btn btn-lg btn-outline-light mb-2">View Products</button>  
          
        </div>
        <div className='hero-img'></div>


        <h1 className='text-center first-title'>Smartphone Products</h1>
        <div className='first-grid-container'>
          {phoneProducts.map((x,index) => {
            return(
              <div key={index} onClick={()=>{navigate(`/product/${x.id}`)}} className={`grid-items-${index} img-container`}>
                <img className={`grid-image-${index} rounded`} src={x.thumbnail} alt="" />
                <div className='img-text'><p>{x.title}</p></div>
              </div>
              
            )
          })}
        </div>

        <div className='bg-dark'>
          <h1 className='text-light text-center first-title p-5'>Laptop Products</h1>
          <div className='second-grid-container'>
            {laptopProducts.map((x,index) => {
              return(
                <div onClick={()=>{navigate(`/product/${x.id}`)}} key={index} className={`grid-items-${index}-two img-container`}>
                  <img className={`grid-image-${index}-two rounded`} src={x.thumbnail} alt="" />
                  <div className='img-text '><h1>{x.title}</h1></div>
                </div>
                
              )
            })}
          </div>
        </div>

          <div className='homepg-products'>
            <h1 className='text-center font-weight-bold pb-4 mb-5'>Sunglass Products</h1>
                {sunglassProducts.map((x,index) => {
                  return(
                    <div key={index} onClick={()=>{navigate(`/product/${x.id}`)}} className="homepg-product-grid-items  rounded">
                      <img id='homepg-product-img' className=' rounded-left' src={x.thumbnail} alt="" />
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
      }
    </div>
  )
}

export default Home;