import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { smallText } from '../utilities/utilites';

import { Quantity } from '../types';
import { dummyQuantity } from '../types';

import "../styles/Cart.css"

import { Product } from '../types';

function Cart() {
  
  const [cartItems, setItems] = useState<Product[]>([])
  const [cartQuantity,setQuantity] = useState<Quantity>(dummyQuantity)
  const [total,setTotal] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(()=>{

    getCart()
  },[])

  const getCart  = async () => {
    let cartIDArray = await JSON.parse(localStorage.getItem('cartIDs') || "[]");
    let cartItemsArray = await JSON.parse(localStorage.getItem('cartItems') || "[]");

    if (cartIDArray === null){
      return
    }else{
      cartIDArray = cartIDArray.reduce((acc:any, e:any) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

      setItems(cartItemsArray);
      setQuantity({uniqueValues:[...cartIDArray.keys()],occurrences:[...cartIDArray.values()]});



      let tempTotal =  0;
      for (let i=0;i < cartItemsArray.length;i++){
        tempTotal = tempTotal + ([...cartIDArray.values()][[...cartIDArray.keys()].indexOf(cartItemsArray[i].id)] * cartItemsArray[i].price)
      }
      setTotal(tempTotal)



    }

  }

  
  function handleClear(){
    localStorage.removeItem('cartIDs')
    localStorage.removeItem('cartItems')
    setTotal(0)
    setItems([])
  }

  async function handleIncrease(event:any){
    if (event.target === null){return}
    const itemID = parseInt((event.target as HTMLInputElement).value);

    let cartIDArray = JSON.parse(localStorage.getItem('cartIDs') || "[]");

    cartIDArray.push(itemID);

    localStorage.setItem('cartIDs',JSON.stringify(cartIDArray))

    getCart()


  }


  async function handleDecrease(event:any){
    if (event.target === null){return}
    const itemID = parseInt((event.target as HTMLInputElement).value);

    let cartIDArray = JSON.parse(localStorage.getItem('cartIDs') || "[]");
    let cartItemsArray = await JSON.parse(localStorage.getItem('cartItems') || "[]");

    if (cartQuantity.occurrences[cartQuantity.uniqueValues.indexOf(itemID)] === 1){
      // removing the id from array
      const indexID =  cartIDArray.indexOf(itemID);
      cartIDArray.splice(indexID,1);
      localStorage.setItem('cartIDs',JSON.stringify(cartIDArray))

      //removing item from array
      console.log(cartItemsArray)
      for(let i = 0;i < cartItemsArray.length ; i++) {
        if (cartItemsArray[i].id === itemID){
          cartItemsArray.splice(i,1);
          localStorage.setItem('cartItems',JSON.stringify(cartItemsArray))
        }
      }
    }else{
      const indexID =  cartIDArray.indexOf(itemID);
      cartIDArray.splice(indexID,1);
      localStorage.setItem('cartIDs',JSON.stringify(cartIDArray))
    }

    getCart()
    
  }

  return (
    <div>
      <div className='mb-5'>
        {cartItems.map((x,index) => {
          return(
          <div key={index} className='cart-container'>
            <div onClick={()=>{navigate(`/product/${x.id}`)}} className="cart rounded">
              <img className=' rounded-left' src={x.thumbnail} alt="" />
              <div className='ml-3 mt-2'>
                <h2>{smallText(x.title,34)}</h2>
                <p>{smallText(x.description,50)}</p>
                <h5><b>Price:</b> ${x.price}</h5>
              </div>
              
            </div> 
            <div className='quantity-box rounded d-flex pl-3 pr-3'>
              <p className='mt-3'><b>Quantity:</b></p>
              <p className='text-center mb-1'>{cartQuantity.occurrences[cartQuantity.uniqueValues.indexOf(x.id)]}</p>
              <button onClick={(event) => {handleIncrease(event)}} value={x.id} className='btn btn-light mb-2'>ʌ</button>
              <button onClick={(event) => {handleDecrease(event)}} value={x.id} className='btn btn-light mb-3'>v</button>
            </div>
          </div>
          )
        })}
        { total === 0 
        ?
        <div style={{height: "15vh",marginTop: "20%"}} className='text-center'>
          <h1>Cart is empty.</h1>
          <p>Add items to your cart!</p>
        </div>
        
        :
        <div>
          <h1 className='text-center my-5'><b>Total:</b> ${total}</h1>
          <button className=' clear-btn btn-lg btn btn-dark btn-block mb-2'>Checkout</button>
          <button className='btn clear-btn btn-lg btn-block btn-purple ' onClick={handleClear}>Clear Cart</button>
        </div>
        }
        </div>
      
    </div>
  )
}

export default Cart;