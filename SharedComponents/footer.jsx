import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/img/logo.png'

 function Footer() {
  return (
    <div>
    <div className='d-flex flex-row  justify-content-between align-items-center mt-5 mb-5' style={{height:20+"rem", backgroundColor:'#088178'}}>
        <div className='d-flex flex-column p-4 m-4'>
            <h4>Sign Up for Newsletters</h4>
            <p style={{color:'#818ea0'}}> Get E-mail updates about our latest shop and <span style={{color:'#ffbd27'}}>special offers</span></p>
         </div>
         <div className='d-flex flex-row justify-content-between p-4 m-4'>
         <input type={Text} placeholder='Your E-mail Adress' style={{height:3+'rem'}}/>
         <button className='btn btn-outline-light' style={{height:3+'rem' }}> Sign Up</button>
         </div>
    </div>
    <div className='d-flex flex-row justify-content-between align-items-center mx-5 px-5'>
            <div class="d-flex flex-column justify-content-between ">
                <img src={logo} alt=""  style={{height:3+'rem', width:10+'rem'}}/>
                <h4>Contact</h4>
                <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone: </strong> +01 234 234 435 654 </p>
                <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
                <div class="follow">
                    <h2>Follow Us</h2>
                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column justify-content-between my-5 py-5">
                <h4>My Account</h4>
                <a href="#" style={{textDecoration:'none', color:'grey'}}>Sign In</a>
                <a href="#" style={{textDecoration:'none', color:'grey'}}>View Cart</a>
                <a href="#" style={{textDecoration:'none', color:'grey'}}>My Wishlist</a>
                <a href="#" style={{textDecoration:'none', color:'grey'}}>Track My Order</a>
                <a href="#" style={{textDecoration:'none', color:'grey'}}>Help</a>
            </div>
    </div>
    </div>
  )
}

export default Footer;
