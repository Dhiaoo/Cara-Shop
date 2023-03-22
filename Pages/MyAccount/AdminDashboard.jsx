import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import information from '../../assets/img/icons8-information-64.png';
import cart from '../../assets/img/icons8-shopping-cart-48.png';
import logOut from '../../assets/img/icons8-log-out-64.png';
import user from '../../assets/img/user.png';
import Produ from '../../assets/img/products.png';
import newProd from '../../assets/img/new-product.png';
import visitor from '../../assets/img/visitors.png';

 function AdminDashboard() {
    const [isDashboard, setDashboard] = useState(true);
    const [isUsers, setUsers] = useState(false);
    const [isProduct, setProducts] = useState(false);
    const [isRequ, setRequ] = useState(false);

    function dashButton (){
        setDashboard(true);
        setUsers(false);
        setProducts(false);
        setRequ(false);
    }

    function usersButton (){
        setUsers(true);
        setProducts(false);
        setDashboard(false);
        setRequ(false);
    }
    function productButton (){
        setProducts(true);
        setDashboard(false);
        setUsers(false);
        setRequ(false);
    }
    function requButton (){
        setRequ(true);
        setDashboard(false);
        setProducts(false);
        setUsers(false);
    }

    const Dashboard = ()=>{
        return(
            <>
                <div data-bs-spy="scroll" className='p-3'   style={{width:100+'%'}} >

                    <div className='d-flex flex-row justify-content-around '>
                        <div className='d-flex flex-row justify-content-between align-items-center border border-2 p-2 shadow' style={{width:250+'px', height:150+'px'}}>
                            <div className='d-flex flex-column'>
                                <h1 className='w-bold'>150</h1>
                                <h3 className='w-bold'>Users</h3>
                            </div>
                            <img src={user} width={80} height={80} />
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center border border-2 p-2 shadow' style={{width:250+'px', height:150+'px'}}>
                            <div className='d-flex flex-column'>
                                <h1 className='w-bold'>20</h1>
                                <h3 className='w-bold'>Products</h3>
                            </div>
                            <img src={ Produ } width={80} height={80} />
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center border border-2 p-2 shadow' style={{width:250+'px', height:150+'px'}}>
                            <div className='d-flex flex-column'>
                                <h1 className='w-bold'>50</h1>
                                <h3 className='w-bold'>Visitor</h3>
                            </div>
                            <img src={visitor} width={80} height={80} />
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center border border-2 p-2 shadow' style={{width:250+'px', height:150+'px'}}>
                            <div className='d-flex flex-column'>
                                <h1 className='w-bold'>15</h1>
                                <h3 className='w-bold'>Products selled today</h3>
                            </div>
                            <img src={cart} width={80} height={80} />
                        </div>
                    </div>
                    
                    <div className='d-flex flex-row justify-content-between ' >
                    <div className='d-flex flex-column border border-2 my-3 py-3' style={{width:60+'%', overflowX:'scroll' }}>
                    <div className='d-flex flex-row justify-content-between p-3 border-bottom'  >
                        <h3>Recent Users</h3>
                        <button className='btn btn-outline-secondary' onClick={usersButton}>View All</button>
                    </div>
                    <table class="table" style={{overflowX:'scroll'}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        </tr>
                        </thead>
                    <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark@mdo</td>
                    <td>Mark</td>
                    <td>otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Mark@ftat</td>
                    <td>Thornton</td>
                    <td>fat</td>
                     </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                     <tr>
                    <th scope="row">3</th>
                    <td >Larry@Bird</td>
                    <td>Bird</td>
                    <td>Larry</td>
                     </tr>
                    
                    </tbody>
                    </table>
                    </div>

                    <div className='d-flex flex-column border border-2 my-3 py-3 px-1' style={{width:38+'%', overflowX:'scroll'}}>
                    <div className='d-flex flex-row justify-content-between border-bottom py-2'>
                        <h3>Recent Products</h3>
                        <button className='btn btn-outline-secondary' onClick={productButton}>View All</button>
                    </div>
                    <table class="table" style={{overflowX:'scroll'}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quentity</th>
                        </tr>
                        </thead>
                    <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Jordan</td>
                    <td>23$</td>
                    <td>1</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>AireForce</td>
                    <td>40$</td>
                    <td>3</td>
                     </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Nice Air</td>
                    <td>60$</td>
                    <td>1</td>
                     </tr>
                    </tbody>
                    </table>
                    </div>

                    </div>
                    </div>
            </>
        )
    }


    const Users = ()=>{
        return(
            <>
                <div className='container border border-2 p-3 m-3' style={{width:95+'%', height:100+'%', overflowX: 'scroll', borderRadius:20+'px'}} >
                    <table className='table table-hover'>
                        <tbody>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col' colSpan={4}>Email</th>
                            </tr>
                        </tbody>
                        <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    const Products = ()=>{
        return(
            <>
                <div className='container border border-2 p-3 m-3' style={{width:95+'%', height:100+'%', overflowX: 'scroll', borderRadius:20+'px'}} >
                    <table className='table table-hover'>
                        <tbody>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope='col'>Product Category</th>
                                <th scope='col' >Items in Stock</th>
                                <th scope='col'>Selled items</th>
                            </tr>
                        </tbody>
                        <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>AirPods</td>
                            <td>Electronics</td>
                            <td>100</td>
                            <td>30</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    const Requests = ()=>{
        return(
            <>
            <div data-bs-spy="scroll"   style={{width:80+'%', overflowX:"scroll"}}>
              <div className=' border border-3 p-3' style={{borderRadius:20+'px'}} >
              <div className='d-flex flex-row border-bottom'>
                 <div className='container'>
                 <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={150} height={150}   className='img-fluid rounded-start '/>
                 </div>
                 <div className='col-md-8'>
                   <div className=' d-flex flex-column  align-content-center my-5'>
                    <h4 className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                    <h4 className='card-title'>men's clothing</h4>
                    <h3 className='card-text' style={{color:'grey'}}>Quantity : 200 </h3>
                    <h3 className='card-text' style={{color:'grey'}}>Price: 20 $</h3>
                    <div class="col-md-6">
                    <label for="Price" class="form-label">Your Profit</label>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Enter yout profit'/>
                        <span class="input-group-text">$</span>
                        </div>
                        <div class="invalid-feedback">
                            Please provide a Price.
                        </div>
                        </div>
                    <div className='d-flex flex-row justify-content-end '>
                    <button type='button' className='btn btn-outline-success mx-3'>Accept</button>
                    <button type='button' className='btn btn-outline-danger'>Decline</button>
                    </div>
                   </div>
                 </div>
              </div>
              
            </div>
            </div>
            </>
        )
    }

  return (
    <div style={{height:100+'%', width:100+'%'}} className="d-flex flex-row">
       <div className=' d-flex flex-column' style={{backgroundColor:'#088178', width:40+'vh', height:93+'vh'}}>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center ' style={{width:100+'%', height:100+'%'}} 
           onClick={dashButton} >
           <img src={information}  width={50} style={{paddingRight:10+'px'}} />
           <h4>Dashboard</h4>
           </button>
          </div>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center' style={{width:100+'%', height:100+'%'}} 
          onClick={usersButton} >
            <img src={user} width={50} style={{paddingRight:10+'px'}}  />
            <h4>Users</h4>
            </button>
          </div>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center' style={{width:100+'%', height:100+'%'}} 
          onClick={productButton}  >
            <img src={cart} width={50} style={{paddingRight:10+'px'}}  />
            <h4>Products</h4>
            </button>
          </div>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center' style={{width:100+'%', height:100+'%'}} 
          onClick={requButton}  >
            <img src={newProd} width={50} style={{paddingRight:10+'px'}}  />
            <h4 >Requests</h4>
            </button>
          </div>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center' style={{width:100+'%', height:100+'%'}}   >
            <img src={logOut} width={50} style={{paddingRight:10+'px'}}  />
            <h4 >Log Out</h4>
            </button>
          </div>
       </div>
       <div className='d-flex flex-column align-items-center' style={{height:93+'vh', width:80+'%'}}>
         {
            isDashboard? <Dashboard /> : isUsers? <Users /> : isProduct? <Products /> : <Requests />
         }
       </div>
    </div>
  )
}

export default AdminDashboard;
