import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import "./navbar.css"
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addBasketfromWish, removeWishlist } from '../../Slice/WishlistSlice';

const Navbar = () => {
    const [tab,setTab]=useState(false)
    const [open,setOpen]=useState(false)
    const [basketopen,setBasketopen]=useState(false)
    const basket=useSelector(state=>state.basket.items)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const gocheckout=()=>{
        navigate("/checkout")
    }
    const wishlist=useSelector(state=>state.wishlist.wishlist)
    const removeFromWishlistHandler=(id)=>{
        dispatch(removeWishlist(id))
    }
    const addedToBasket=(product)=>{
        dispatch(addBasketfromWish(product))
    }
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <nav>
            <div className="menuicon" onClick={()=>setOpen(true)}>
                <RiMenu2Line/>
            </div>
            
            <img src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" className='logo' alt="" />
            <div className="menulinks">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/featured"}>Featured</Link>
                    </li>
                    <li>
                        <Link to={"/pages"}>Pages</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <CiSearch/>
                <CiUser/>
                <CiHeart onClick={()=>setIsOpen(true)}/>
                <div className='basket'>
                    <IoCartOutline onClick={()=>setBasketopen(true)}/><span className='say'>{basket.length}</span>
                </div>
            </div>
        </nav>
        <div className={`sidebar-basket ${basketopen ? "opening" : ""}`}>
            <div>
                <IoCloseSharp onClick={()=>setBasketopen(false)}/>
                <h3>Shopping Cart</h3>
            </div>
            <div className='basket-items'>
                {basket ? basket.map(product=>(
                    <div className='product-sidebar' key={product.id}>
                        <img src={product.image} alt="" />
                       <div>
                       <p>{product.name}</p>
                        <p>{product.price} x {product.count} : {product.price*product.count}</p>
                       </div>
                    </div>
                )): <p>basket is empty</p>}
            </div>
            <button className='go-checkout' onClick={()=>gocheckout()}>GO TO CHECKOUT</button>
        </div>
        <div className={`sidebar-menu ${open ? "open" : ""}`}>
            <div className="tab">
                <div className={`menu-tab ${tab ? "" : "style"}`} onClick={()=>setTab(false)}>
                    <RiMenu2Line/> MENU
                </div>
                <div className={`login-tab ${tab ? "style" : ""}`} onClick={()=>setTab(true)}>
                    <CiUser/> LOGIN
                </div>
            </div>
            <ul style={{ display: tab ? 'none' : 'block' }}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/featured"}>Featured</Link>
                    </li>
                    <li>
                        <Link to={"/pages"}>Pages</Link>
                    </li>
                    <li>
                        <Link to={"/blog"}>Blogs</Link>
                    </li>
                </ul>
                <div className='form' style={{ display: tab ? 'block' : 'none' }}>
                <form action="submit"  >
                    <input type="text" placeholder='Email adress' />
                    <input type="password" placeholder='Password' />
                    <p>Forget your password?</p>
                    <button>LOG IN</button>
                    <h3>OR</h3>
                    <h4>Register Now</h4>
                </form>
                </div>
               
                <button className='close-button' onClick={()=>setOpen(false)}>CLOSE</button>
            </div>
            <div className={`wishlist-sidebar ${isOpen ? 'open' : ''}`}>
      <h3>Wishlist</h3>
      <IoCloseSharp onClick={()=>setIsOpen(false)}/>
      <div>
        {wishlist.map(product => (
          <div key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            </div>
            <button onClick={() => removeFromWishlistHandler(product.id)}>Remove</button>
            <button onClick={()=>addedToBasket(product)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Navbar