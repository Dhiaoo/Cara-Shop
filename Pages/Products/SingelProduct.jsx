import React, {useState, useEffect} from 'react';
import { Await, NavLink, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Skeleton from 'react-loading-skeleton';
import Footer from '../../SharedComponents/footer';


export default function SingelProduct() {

    const {id} = useParams(); 
    const [product, setProduct] = useState([]); 

    useEffect(()=>{

        const getProducts =  ()=>{
            const response = ( fetch("https://fakestoreapi.com/products/"+id)
            .then(response => response.json())
            .then((data)=>setProduct(data)));
                
        }
       getProducts();
       
    }, [id] );

    const Loading = ()=>{
        return(
            <>
            <div className='col-md-6'>
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6' style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} style={{margin:6}} />
            </div>
            </>
        )
    }

    const ShowProducts = ()=>{
        
        return (
            <>
                <div className='col-md-6 py-5'>
                    <img src={product.image} alt={product.title} style={{height:400+'px', width:400+'px'}} />
                </div>
                <div className='col-md-6 py-5'>
                    <h4 className='text-uppercase text-black-50'> {product.category} </h4>
                    <h1 className='display-5' > {product.title} </h1>
                    <p className='lead fw-bolder'>Rating { product.rating.rate} /5 </p>
                    <h3 className='display-6 fw-bold my-4 '> $ {product.price}</h3>
                    <p className='lead'> {product.description} </p>
                    <button className='btn btn-outline-dark ' style={{marginRight:1+'rem'}}>Add To Card</button>
                    <NavLink to={"/cart"}><button className='btn btn-outline-dark'>Go To Card</button></NavLink>
                </div>
                <Footer />
            </>
        )
    }

  return (
    <div>
        <div className='container py-5'>
            <div className='row py-5'>
                {product.length ==0 ? <Loading /> : <ShowProducts />}
        
            </div>
        </div>
    </div>
  )
}
