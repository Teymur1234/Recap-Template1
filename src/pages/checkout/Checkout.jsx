import React from 'react'
import "./checkout.css"
import { useDispatch, useSelector } from 'react-redux'
import { FiXSquare } from "react-icons/fi";
import { addBasket, changeCount, removeBasket } from '..//..//Slice/BasketSlice';

const Checkout = () => {
  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.items)
  const total=useSelector(state=>state.basket.total)
  const increase=(item)=>{
      dispatch(addBasket(item))
  }
  const decrease=(item)=>{
      dispatch(changeCount(item))
  }
  const remove=(id)=>{
      dispatch(removeBasket(id))
  } 
  return (
    <>
        <div className='table'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket && basket.map((item)=>(
                            <tr key={item.id}>
                                <td><img src={item.image} alt="" className='item-images'/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button onClick={()=>decrease(item)}>-</button>{item.count}<button onClick={()=>increase(item)}>+</button></td>
                                <td>{item.price*item.count}</td>
                                <td><FiXSquare onClick={()=>remove(item.id)}></FiXSquare></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
             <h3>TOTAL PRICE : ${total}</h3>
    </>
  )
}

export default Checkout