import React from 'react'
import { useLocation } from 'react-router-dom';
import "./detail.css"

const Detail = () => {
    const location = useLocation();
    const { product } = location.state;
  return (
    <>
        <div className='product-detail'>
            <img src={product.image} alt="" />
            <div className='product-detail-text'>
                <h2>{product.name}</h2>
                <h3>$ {product.price} USD</h3>
                <p>Things You Need To Know There are many variations of passages of Lorem <br /> Ipsum available, but the majority have suffered alteration in some form, by <br /> injected humour, or randomised words which don't look even slightly <br /> believable. If you are going to use a passage of Lorem Ipsum, you need to...</p>
                <div>
                    <span>1</span>
                    <div>
                        <button>-</button><button>+</button>
                    </div>
                    <button className='add-to-cart'>ADD TO CART</button>
                </div>
                <button className='but-it'>BUY IT NOW</button>
            </div>
        </div>
    </>
  )
}

export default Detail