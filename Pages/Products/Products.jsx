import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Skeleton from 'react-loading-skeleton';
import Footer from '../../SharedComponents/footer';
import { NavLink } from 'react-router-dom';

export default function Products() {
  const [data, setData]= useState([]); 
  const [filter, setFilter] = useState(data);
  const [loading, setloading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [ishidden, sethidden] = useState(true);
  const [showModal, setShowModal] = useState(false);

  let componentMounted = true;
  useEffect(()=>{
    const getProducts = async ()=>{
      setloading(true);
      const Response = await fetch('https://fakestoreapi.com/products/'); 
      if(componentMounted){
        setData(await Response.clone().json());
        setFilter(await Response.json());
        setloading(false);
      }

      return ()=>{
        componentMounted=false;
      }
    }

    getProducts();

  }, []);

  function handelInputChange(event) {
    setInputVal(event.target.value);
  }

  const Loading = ()=>{
    return(
      <>
        <div className=' d-flex flex-row'>
        {Array(4)
          .fill()
          .map((item, index) => {
            return (
              <div key={index} className="col-md-3" >
                <div className="card mx-3" style={{height:20+'rem'}}>
                  <Skeleton style={{height:20+'rem', width:10+'rem'}}/>
                </div>
              </div>
            )
          })}
        </div> 
      </>
    )
  }

  const filterProduct = (inputs)=>{
    const updatedList = data.filter((x)=>x.category.name === inputs);
    if(updatedList.length>0){
      sethidden(true);
      setFilter(updatedList);
    }else{
      if(inputs===""){
        setFilter(data);
      }else{
        sethidden(false);
        setFilter(data);
      }
      
    }
    
  }
  const ShowProducts = ()=>{
    return(
      <>
        {filter.map((product)=>{
          return(
            <div className='col-md-3 mb-4'>
            <div class="card h-100 text-center p-4 " key={product.id}>
            <img src={product.image} class="card-img-top" alt={product.title}  style={{height:20+'rem'}}/>
            <div class="card-body d-flex flex-column ">
                <span className='card-title'>{product.category}</span>
                <h5 className='card-title'>{product.title.substring(0,12)}</h5>
                <h4 className='card-title'> ${product.price}</h4>
                <NavLink to={"/products/"+product.id }><button class="btn   w-100 btn-outline-dark" style={{color:'#088178', }} 
                 >Buy Now !!</button></NavLink>
            </div>
            </div>
            </div>
          
          );
        })}
      </>
    )
  }
  

  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
           <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>All Products</h1>
            <hr />
            <div class="input-group mb-3 m-3 p-3">
                <input type="text" class="form-control" placeholder="Enter the category that you are looking for e.g(man's clothes)" 
                aria-label="Recipient's username" aria-describedby="button-addon2" value={inputVal} onChange={handelInputChange} />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>filterProduct(inputVal)}>Search</button>
            </div>
            <h1 className='display-3 fw-bolder text-center' hidden={ishidden} style={{color:'grey'}}>No result match your input </h1>
           </div>
        </div>
        <div className='row justify-content-center'>
        {loading? <Loading />: <ShowProducts />}
          
        </div>
        <Footer />
      </div>
    </div>
  )
}
