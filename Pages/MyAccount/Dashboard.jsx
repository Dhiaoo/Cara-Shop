import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import information from '../../assets/img/icons8-information-64.png';
import cart from '../../assets/img/icons8-shopping-cart-48.png';
import logOut from '../../assets/img/icons8-log-out-64.png';



function Dashboard() {
  const [isinformations, setInformations]= useState(true);
  const [isMyCart, setMyCart] = useState(false);

  function InfoButton (){
    setInformations(true);
    setMyCart(false);
  }
  function MyCartButton(){
    setMyCart(true);
    setInformations(false);
  }

  const ShowinFormation = () =>{
    return(
      <>
      <div className='container p-5 m-2 border border-3 mx-5' style={{borderRadius:20+'px', width:90+'%'}}>
       <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
               <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
            <div class="valid-feedback">
            Looks good!
            </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">Phone-Number</label>
                <div class="input-group has-validation">
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div class="invalid-feedback">
                Please choose a username.
                </div>
            </div>
            </div>
            <div class="col-md-6">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
                Please provide a valid city.
            </div>
            </div>
            <div class="col-md-3">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
            </select>
            <div class="invalid-feedback">
                Please select a valid state.
            </div>
            </div>
            <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
            Please provide a valid zip.
            </div>
            </div>
            <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
            This information will be used in your shopping operations ,So be Careful when you fill it && Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
            </div>
            </div>
            <div class="col-12 ">
            <button class="btn btn-outlined-dark mx-2" type="submit">Submit For the First Time</button>
            <button class="btn btn-outlined-dark mx-2" type="update"> Update</button>
            </div>
            </form>
       </div>
      </>
    );
  }

  const ShowMyCart = ()=>{
    return(
      <>
      <div data-bs-spy="scroll"   style={{width:80+'%', overflowX:"scroll"}}>
        <div className=' border border-3 p-3' style={{borderRadius:20+'px'}} >
          <div className='d-flex flex-row '>
             <div className='container'>
             <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={150} height={150}   className='img-fluid rounded-start '/>
             </div>
             <div className='col-md-8'>
               <div className=' d-flex flex-column  align-content-center my-5'>
                <h4 className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                <h4 className='card-title'>men's clothing</h4>
                <h3 className='card-text'>$ 90.0</h3>
                <div className='d-flex flex-row justify-content-between'>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder" >-</button>
                <button type="button" class="btn btn-outline-secondary p-3 w-100" disabled>1</button>
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder">+</button>
                </div>
                <div >
                <button type='button' className='btn btn-outline-secondary mx-3'>Check Out</button>
                <button type='button' className='btn btn-outline-danger'>Delete</button>
                </div>
                </div>
               </div>
             </div>
          </div>
        </div>
        <div className=' border border-3 p-3' style={{borderRadius:20+'px'}} >
          <div className='d-flex flex-row '>
             <div className='container'>
             <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={150} height={150}   className='img-fluid rounded-start '/>
             </div>
             <div className='col-md-8'>
               <div className=' d-flex flex-column  align-content-center my-5'>
                <h4 className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                <h4 className='card-title'>men's clothing</h4>
                <h3 className='card-text'>$ 90.0</h3>
                <div className='d-flex flex-row justify-content-between'>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder" >-</button>
                <button type="button" class="btn btn-outline-secondary p-3 w-100" disabled>1</button>
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder">+</button>
                </div>
                <div >
                <button type='button' className='btn btn-outline-secondary mx-3'>Check Out</button>
                <button type='button' className='btn btn-outline-danger'>Delete</button>
                </div>
                </div>
               </div>
             </div>
          </div>
        </div>
        <div className=' border border-3 p-3' style={{borderRadius:20+'px'}} >
          <div className='d-flex flex-row '>
             <div className='container'>
             <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={150} height={150}   className='img-fluid rounded-start '/>
             </div>
             <div className='col-md-8'>
               <div className=' d-flex flex-column  align-content-center my-5'>
                <h4 className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                <h4 className='card-title'>men's clothing</h4>
                <h3 className='card-text'>$ 90.0</h3>
                <div className='d-flex flex-row justify-content-between'>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder" >-</button>
                <button type="button" class="btn btn-outline-secondary p-3 w-100" disabled>1</button>
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder">+</button>
                </div>
                <div >
                <button type='button' className='btn btn-outline-secondary mx-3'>Check Out</button>
                <button type='button' className='btn btn-outline-danger'>Delete</button>
                </div>
                </div>
               </div>
             </div>
          </div>
        </div>
        <div className=' border border-3 p-3' style={{borderRadius:20+'px'}} >
          <div className='d-flex flex-row '>
             <div className='container'>
             <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={150} height={150}   className='img-fluid rounded-start '/>
             </div>
             <div className='col-md-8'>
               <div className=' d-flex flex-column  align-content-center my-5'>
                <h4 className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                <h4 className='card-title'>men's clothing</h4>
                <h3 className='card-text'>$ 90.0</h3>
                <div className='d-flex flex-row justify-content-between'>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder" >-</button>
                <button type="button" class="btn btn-outline-secondary p-3 w-100" disabled>1</button>
                <button type="button" class="btn btn-outline-secondary w-100 fw-bolder">+</button>
                </div>
                <div >
                <button type='button' className='btn btn-outline-secondary mx-3'>Check Out</button>
                <button type='button' className='btn btn-outline-danger'>Delete</button>
                </div>
                </div>
               </div>
             </div>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <div style={{height:100+'%', width:100+'%'}} className="d-flex flex-row">
       <div className=' d-flex flex-column' style={{backgroundColor:'#088178', width:40+'vh', height:93+'vh'}}>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center ' style={{width:100+'%', height:100+'%'}} onClick={InfoButton} >
           <img src={information}  width={50} style={{paddingRight:10+'px'}} />
           <h4>My information</h4>
           </button>
          </div>
          <div className='d-flex flex-row  p-3' >
          <button className='btn btn-outline-light d-flex flex-row align-items-center' style={{width:100+'%', height:100+'%'}} onClick={MyCartButton} >
            <img src={cart} width={50} style={{paddingRight:10+'px'}}  />
            <h4>My Cart</h4>
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
        {isinformations? <ShowinFormation /> : <ShowMyCart />}
       </div>
    </div>
  )
}

export default Dashboard;
