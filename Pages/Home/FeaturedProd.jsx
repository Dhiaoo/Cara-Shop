import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';



 function FeaturedProd() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = ()=>{
            const res = fetch('https://fakestoreapi.com/products?limit=4')
            .then(response => response.json())
            .then((data)=>setProducts(data));
        }

        getProducts();
    }, []);

    const ShowProducts = ()=>{
        return(
            <>
                {products.map((product)=>{
                 return(
            <div className='col-md-3 mb-4 mx-2 shadow rounded-4' >
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
    const Loading = ()=>{
        return(
          <>
            <div className=' d-flex flex-row'>
            {Array(4)
              .fill()
              .map((item, index) => {
                return (
                  <div key={index} className="col-md-3 mx-3" >
                    <div className="card mx-3" style={{height:20+'rem', width:15+'rem'}}>
                      <Skeleton style={{height:20+'rem', width:10+'rem'}}/>
                    </div>
                  </div>
                )
              })}
            </div> 
          </>
        )
      }

  return (
    <div>
       <h1 className='text-center p-5 m-5'>Featured <span style={{color:'#088178'}}>Products</span></h1>
        <div className='container d-flex flex-row  justify-content-between mt-3 mb-5'>
        {products.length ==0 ? <Loading /> : <ShowProducts />}
    </div>
    </div>
  )
}

export default FeaturedProd;
