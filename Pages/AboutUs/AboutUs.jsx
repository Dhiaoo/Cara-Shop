import React from 'react';
import banner from "../../assets/img/about/banner.png";
import 'bootstrap/dist/css/bootstrap.css';
import img from '../../assets/img/about/a6.jpg';
import video from "../../assets/img/about/1.mp4";
import Features from '../Home/Featers';
import Footer from '../../SharedComponents/footer';

 function AboutUs() {
  return (
    <div>
        <div class="card text-bg-dark mb-5 ">
          <img src={banner} class="card-img" alt="..." style={{width:100+'%', height:40+'vh'}} />
          <div class="card-img-overlay text-center d-flex flex-column justify-content-center">
            <h2 class="card-title">#KnowUs</h2>
            <p class="card-text">Lorem ipsum dolor it amet, consectetur</p>
          </div>
        </div>

        <div className='container d-flex flex-row justify-content-between my-5 p-5'>
         <img src={img} style={{height:400+'px', width:600+'px', marginRight:2+'rem'}}/>
         <div className='d-flex flex-column justify-content-center align-items-start'>
         <h2>Who are you ? </h2>
                <p>The gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton,
                    this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton,
                    this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton,
                    this classific fit preshurunkThe gildan ultra cotton T-shirt is made from a substantial 6.0 oz. per sq .yd. fabric constructed form 100% cotton,
                    this classific fit preshurunk</p>
                    <br /><br />
                    <marquee  loop ="-1" scrollmount="5"  style={{bgcolor:'#CCC', width:100+"%", }}
                    >Create staunning images with as such or as little control as you 
                        like thanks to choice of Basics and Creative modes</marquee>
         </div>
        </div>

        <div className='container d-flex flex-column justify-content-center '>
        <h1 className='text-center'>Download Our <span style={{color:'#088178'}}>App</span></h1>
            <div class="video d-flex flex-column justify-content-center  align-items-center py-5">
                <video src={video} autoplay muted loop style={{height:100+'%', width:70+'%', borderRadius:20+'px'}}></video>
            </div>
        </div>
        <Features />
        <Footer />
    </div>
  )
}

export default AboutUs;