import f1 from '../../assets/img/features/f1.png';
import f2 from '../../assets/img/features/f2.png';
import f3 from '../../assets/img/features/f3.png';
import f4 from '../../assets/img/features/f4.png';
import f5 from '../../assets/img/features/f5.png';
import f6 from '../../assets/img/features/f6.png';
import 'bootstrap/dist/css/bootstrap.css';

function Features(){
    return(
        <div>
            <h1 className='text-center p-5 m-5'><span style={{color:'#088178'}}>Our</span> Services</h1>
            <div className='d-flex flex-row p-4 m-4'>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f1} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>Free Shipping</h6>
                </div>
            </div>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f2} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>Online Order</h6>
                </div>
            </div>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f3} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>Save Money</h6>
                </div>
            </div>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f4} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>Promotions</h6>
                </div>
            </div>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f5} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>Happy Sell</h6>
                </div>
            </div>
            <div class="card p-3 m-3 shadow" style={{width:15+'rem'}}>
                <img src={f6} class="card-img-top" alt="cart-img" />
                <div class="card-body text-center">
                    <h6 class="card-title p-2" style={{backgroundColor:'#088178'}}>F24/24 Support</h6>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Features;