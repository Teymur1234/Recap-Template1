import React, { useEffect, useState } from 'react';
import './home.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { FaCheck } from "react-icons/fa";
import Slider from './slider';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../Slice/BasketSlice';
import { useSelector } from 'react-redux';
import { CiHeart } from "react-icons/ci";
import { addWishlist } from '../../Slice/WishlistSlice';


const images = ['https://fone-store-demo.myshopify.com/cdn/shop/files/s2.jpg?v=1660640292','https://fone-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1660640243']
const names=['Ham Sandwitch','Hamburger Veggie', 'Sushi Sashimi','Pepperoni Pizza']
const images1=['https://fone-store-demo.myshopify.com/cdn/shop/files/ba2.png?v=1660639531','https://fone-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1660639490','https://fone-store-demo.myshopify.com/cdn/shop/files/ba1.png?v=1660639419','https://fone-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1660639419']
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Home = () => {
  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.items)
  const total=useSelector(state=>state.basket.total)
  const [index, setIndex] = useState(0)
  const [indexFirst,setFirst]=useState(0)
  const [indexSecond,setSecond]=useState(1)
  const [indexThird,setThird]=useState(2)
  const sliderStyle={
    backgroundImage: `url(${images[index]})`
  } 
  const prev=()=>{
    setFirst(prev=>prev > 0 ? prev-1 : prev=images1.length-1)
    setSecond(prev=>prev > 0 ? prev-1 : prev=images1.length-1)
    setThird(prev=>prev > 0 ? prev-1 : prev=images1.length-1)
  }
  const next=()=>{
    setFirst(prev=> prev <images1.length-1 ? prev+=1 : prev=0)
    setSecond(prev=> prev <images1.length-1 ? prev+=1 : prev=0)
    setThird(prev=> prev <images1.length-1 ? prev+=1 : prev=0)
  }
  const [data,setData]=useState([])
  useEffect(()=>{
    axios('http://localhost:3001/products').then(response=>setData(response.data))
  },[])
  const [open, setOpen] = React.useState(false);
  const [selected,setSelected]=useState({
    id:null,
    image:"",
    name:"",
    price:null,
    count:null
  })
  const handleOpen = (product) => {
    setOpen(true)
    setSelected({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      count:product.count
    })
    dispatch(addBasket(product))
  }
  const handleClose = () => {
    setOpen(false)
    setSelected({
      id:null,
      image:"",
      name:"",
      price:null,
      count:null
    })
  }
  const navigate=useNavigate()
  const infoProduct=(product)=>{
    navigate("/detail",{ state: { product } })
  }
  const addWish=(product)=>{
    dispatch(addWishlist(product))
  }
  return (
    <>
    <div className="slider" style={sliderStyle}>
      <FaArrowLeft className='previous' onClick={()=>setIndex((previndex)=>previndex > 0 ? previndex-1 : previndex=images.length-1)}/>
      <p>Style Destination</p>
      <h1>Burger Delicious</h1>
      <p>It is a long established fact that a reader will be <br /> distracted by the readeble content</p>
      <button>SHOP NOW</button>
      <FaArrowRight className='next' onClick={()=>setIndex((previndex)=>previndex<images.length-1 ? previndex+=1 : previndex=0)}/>
    </div>
    <div className='slider2'>
      <h1>VISIT OUR STORE</h1>
      <div className="slider-container">
        <FaArrowLeft className='prev' onClick={prev}/>
        <div className="slider-items">
          <img src={images1[indexFirst]} alt="" />
          <div>
          <h4>{names[indexFirst]}</h4>
          <p>It is long established fact that <br /> a reader</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={images1[indexSecond]} alt="" />
          <div>
          <h4>{names[indexSecond]}</h4>
          <p>It is long established fact that <br /> a reader</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={images1[indexThird]} alt="" />
          <div>
          <h4>{names[indexThird]}</h4>
          <p>It is long established fact that <br /> a reader</p>
          </div>
        </div>
        <FaArrowRight className='next1' onClick={next}/>
      </div>
    </div>
    <div className='products-upper'>
      <h1>BEST SELLER</h1>
      <h5>Best Seller Product This Week!</h5>
    </div>
    <div className="products">
        {data && data.map((product)=>(
          <div key={product.id} className='product'>
            <img src={product.image} alt="" />
            <h4 onClick={()=>infoProduct(product)}>{product.name}</h4>
            <div>
            <h3>${product.price}.00</h3>
            <CiHeart className="wish" onClick={()=>addWish(product)}/>
            <Button onClick={()=>handleOpen(product)}>Add to Cart</Button>
            </div>
          </div>  
        ))}
    </div>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <div className='product-modal'> 
                <div className='modal-first'>
                  <div>
                  <FaCheck/> <h4>Added to cart successfully!</h4>
                  </div>
                  <img src={selected.image} alt="" />
                  <p>{selected.name}</p>
                  <h4>PRICE : ${selected.price}</h4>
                  <h4>QTY : {selected.count}</h4>
                  <h4>CART TOTALS : {selected.count * selected.price}</h4>
                </div>
                <div className='modal-second'>
                  <p>There are {basket.length} items <br /> in your cart</p>
                  <h4>CART TOTALS : ${total} </h4>
                  <button>COUNTINUE SHOPPING</button>
                  <button>GO TO CART</button>
                </div>
              </div>
          </Box>
        </Fade>
      </Modal>
        <Slider/>
    </>
  );
};

export default Home;
