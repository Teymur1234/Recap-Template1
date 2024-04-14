import React from 'react'
import "./footer.css"
import { FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footparts">
          <img src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" className='logo1' alt="" />
          <p>Sophisticated simplicity for <br /> the independent mind.</p>
          <div className="socialicons">
             <FaTwitter/>
             <CiBasketball/>
             <FaBehance/>
             <FaInstagram/>
          </div>
        </div>
        <div className="footparts">
          <h3>Help & Information</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Products Return</li>
            <li>Wholesale Policy</li>
          </ul>
        </div>
        <div className="footparts">
          <h3>About Us</h3>
          <ul>
            <li>Pagination</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
            <li>Accessories</li>
            <li>Home Page</li>
          </ul>
        </div>
        <div className="footparts">
          <h3>Categories</h3>
          <ul>
            <li>Menu items</li>
            <li>Help Center</li>
            <li>Address Store</li>
            <li>Privacy Policy</li>
            <li>HomePage</li>
          </ul>
        </div>
      </div>
      <div>
        <p>© Copyright 2022 | Fone By EngoTheme. Powered by Shopify.</p>
      </div>
    </>
  )
}

export default Footer