
import 'bootstrap/dist/css/bootstrap.css';
import hero from '../../assets/img/hero4.png';
import Features from './Featers';
import FeaturedProd from './FeaturedProd';
import bannerImg from '../../assets/img/banner/b2.jpg'
import Footer from '../../SharedComponents/footer';
import { NavLink } from 'react-router-dom';


function HomePage(){
    return(
        <div className='hero'>
            <div class="card text-bg-light">
            <img src={hero} class="card-img" alt="background_img" height={'100%'} />
            <div class="card-img-overlay d-flex flex-column justify-content-center shadow" style={{paddingLeft:8+'rem'}}>
            <h4 className='card-title '>Trade-in-offer</h4>
            <h2 className='card-text '>Super value deals</h2>
            <h1 className='card-text' style={{color: '#088178',}}>On All Products</h1>
            <p className='card-title '>Save more with copone &up to <span style={{color:'#088178'}}>70%</span> off</p>
            <NavLink to={'/products'}><button className='btn btn-outline-dark ' style={{width:10+'em'}}>Shop Now</button></NavLink>
            </div>
            </div>
            <Features />
            <FeaturedProd />
            <div className="card text-bg-light p-3 m-5" >
            <img src={bannerImg} class="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column justify-content-center  text-center" >
            <h4 className='card-text' style={{color:'white'}}>Repair Services </h4>
            <h2 className='card-text' style={{color:'white'}}>Up to <span style={{color:'#088178'}}>70% off</span> - All t-shirts & Accesoies</h2>
            <button class="btn  card-text w-100" style={{color:'#088178'}}>Explore More</button>
            </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default HomePage;