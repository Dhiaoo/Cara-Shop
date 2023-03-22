import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import banner from '../../assets/img/about/banner.png';
import popl from '../../assets/img/people/1.png';
import popl2 from '../../assets/img/people/2.png';
import popl3 from '../../assets/img/people/3.png';
import Footer from '../../SharedComponents/footer';

 function ContactUs() {
  return (
    <div>
        <div class="card text-bg-dark mb-5 ">
          <img src={banner} class="card-img" alt="..." style={{width:100+'%', height:40+'vh'}} />
          <div class="card-img-overlay text-center d-flex flex-column justify-content-center">
            <h2 class="card-title">#Let's_talk</h2>
            <p class="card-text">LEAVE A MESSAGE,We love to hear from you !</p>
          </div>
        </div>
        <div className='container d-flex flex-row justify-content-between py-5 px-3'>
          <div className='container d-flex flex-column justify-content-between align-items-start'>
                <span>GET IN TOUCH</span>
                <h2 className='py-3'>Visit one of our agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div className='container d-flex flex-column justify-content-between'>
                        <i class="fal fa-map"></i>
                        <p> 56 Glassford Street Glasgow G1 1UL New York</p>
                        <i class="fal fa-envelope"></i>
                        <p> Contact@example.com</p>
                        <i class="fal fa-phone-alt"></i>
                        <p> +213 698 324 456</p>
                        <i class="fal fa-clock"></i>
                        <p> Monday to Saturday : 9:00 am to 16:00 pm </p>
                </div>
          </div>
          <div>
          <div class="map" style={{width:600, height:450 ,}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.2361912219567!2d-4.2463117158034365!3d55.8585683912973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a1bde1f8c1%3A0x488b18a5fe6f185d!2sClub%20Gym%20Wellness!5e0!3m2!1sar!2sdz!4v1677163669539!5m2!1sar!2sdz"
                 style={{height:100+"%", width:100+'%' ,border:0}}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className='container d-flex flex-row justify-content-between border border-3 p-5 m-5' style={{borderRadius:20+'px'}}>
        <div className='container d-flex flex-column justify-content-between' style={{width:40+'%'}} >
            <div className="mb-3">
              <label for="username" class="form-label">User Name</label>
              <input type="text" class="form-control"  placeholder="User Name" />
            </div>
            <div className="mb-3">
              <label for="E-mail" class="form-label">Email</label>
              <input type="email" class="form-control"  placeholder="Enter your e-mail" />
            </div>
            <div className="mb-3">
              <label for="Subject" class="form-label">Subject</label>
              <input type="text" class="form-control"  placeholder="Subject" />
            </div>
            <div className='mb-3'>
              <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
            </div>
            <button className='btn btn-outline-dark' >Submit</button>
        </div>
        <div className='container d-flex flex-column justify-content-between ' style={{width:40+'%'}}>
                <div className='container d-flex flex-row '>
                    <img src={popl} alt="" />
                    <p><span>John Doe</span> Senior Marketing Manager <br />Phone: +000 828 234 532 <br /> Email :contact@example.com</p>
                </div>
                <div className='container d-flex flex-row  py-5'>
                    <img src={popl2} alt="" />
                    <p><span>William Smith</span> Senior Marketing Manager <br />Phone: +000 828 234 532 <br /> Email :contact@example.com</p>
                </div>
                <div className='container d-flex flex-row '>
                    <img src={popl3} alt="" />
                    <p><span>Emma Stone</span> Senior Marketing Manager <br />Phone: +000 828 234 532 <br /> Email :contact@example.com</p>
                </div>
          </div>

        </div>

        <Footer />
        
    </div>
  )
}

export default ContactUs;