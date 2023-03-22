import React, {useEffect, useState} from 'react'
import bg from '../../assets/img/about/a4.png';
import validator from 'validator';
import axios from 'axios';
import { Await, Navigate, redirect, useNavigate } from 'react-router-dom';





 function Myaccount() {
    const [confPassword, setconfpassword] = useState('');
    const [password, setpassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [seller, setSeller] = useState(false);
    const [type, setType] = useState('user');
    const [data, setData] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
       
        if(data ==='Admin'){
            setTimeout(() => {
                navigate('/AdminDash', {replace:true});
                
            }, 1);
        }else if(data === 'User'){
            setTimeout(() => {
                navigate('/UserDash', {replace:true});
                
            }, 1);
        }else if(data ==='Seller'){
            setTimeout(() => {
                navigate('/SellerDash', {replace: true});
            }, 1);
    
    }
    },[data])
    

    function logIn(){
        if( firstName.length===0 && lastName.length ===0 &&email.length === 0 && password.length === 0 ){
            alert("Enter Your Credantials");
        }else if(firstName.length === 0 ){
            alert("First Name is required");
        }else if(lastName.length ===0 ){
            alert("Last Name is required");
        }else if(email.length === 0 ){
            alert("E-mail is required");
        }
        else if(password.length === 0 ){
            alert("Password is required");
        }else{
            if(validator.isEmail(email)){
                const url ="http://localhost:8080/Cara%20Shop/login.php";
                 let fData = new FormData();
                 fData.append('firstName', firstName);
                 fData.append('lastName', lastName);
                 fData.append('email', email);
                 fData.append('password', password);

                 axios.post(url, fData)
                 .then(res=> {
                   setData(res.data);
                 })
                 .catch(err=>alert(err.data));

            }else{
                alert('Ente a Valid E-mail');
            }
        }

    }


    function SignUp (){
        if( firstName.length===0 && lastName.length ===0 &&email.length === 0 && password.length === 0 && confPassword.length ===0){
            alert("Enter Your Credantials");
        }else if(firstName.length === 0 ){
            alert("First Name is required");
        }else if(lastName.length ===0 ){
            alert("Last Name is required");
        }else if(email.length === 0 ){
            alert("E-mail is required");
        }else if(password.length === 0 ){
            alert("Password is required");
        }else if(confPassword.length === 0){
            alert("Confirmation password is required");
          }
        else if(confPassword !==password){
            alert("Pwd and ConfPwd dosen't match");
        }else{
            if(validator.isEmail(email)){
                if(validator.isStrongPassword){
                    if(seller){
                        setType('Seller');
                    }else{
                        setType('User');
                    }

                    const url = "http://localhost:8080/Cara%20Shop/signUp.php";
                    let fData = new FormData();
                    fData.append('firstName', firstName);
                    fData.append('lastName', lastName);
                    fData.append('email', email);
                    fData.append('password', password);
                    fData.append('type', type);

                    axios.post(url, fData)
                    .then(res=>{
                        if(res.data === "Successed"){
                            setData(type);
                        }else{
                            alert(res.data);
                        }
                    })
                    .catch(error=>alert(error));

                }else{
                    alert("Set a Strong Password")
                }
            }else{
                alert("Enter a valid E-mail");
            }
        }
    }



  return (
    <div>
        <div className="card text-bg-dark">
        <img src={bg} className="card-img" alt="..." style={{height:70+'%', width:100+'%'}} />
        <div className="card-img-overlay d-flex flex-row justify-content-around align-items-center">
         <div className='card-title d-flex flex-column justify-content-center align-items-center'>
         <div className="mb-3 border border-2 p-5 " style={{borderRadius:20+'px', opacity:0.85, backgroundColor:'wheat'}}>
            <h1 style={{color:'#088178'}}>Log In </h1>
              <label htmlFor="firstname" className="form-label" style={{color:'black'}}>First Name</label>
              <input type="text" className="form-control" onChange={(e)=> setFirstName(e.target.value)} placeholder="First Name" required/>
              <label htmlFor="lastname" className="form-label" style={{color:'black'}}>Last Name</label>
              <input type="text" className="form-control" onChange={(e)=> setlastName(e.target.value)} placeholder="Last Name" required />
            <div className="mb-3">
              <label htmlFor="E-mail" className="form-label" style={{color:'black'}}>Email</label>
              <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your e-mail" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label" style={{color:'black'}}>Password</label>
              <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} placeholder="password" required />
            </div>
              <button className='btn btn-outline-dark' onClick={logIn} >Log In</button>
           </div>
        </div>
          <div> <h1 className='text-center w-100 ' style={{fontSize:20+'rem', color:'#088178'}}>&Or</h1> </div>
        <div className='card-title'>
             <div className='mb-3 border border-2 p-5' style={{borderRadius:20+'px', opacity:0.85, backgroundColor:'wheat'}}>
             <h1 style={{color:'#088178'}}>Sign Up</h1>
              <label htmlFor="firstname" className="form-label" style={{color:'black'}}>First Name</label>
              <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" required />

              <label htmlFor="lastname" className="form-label" style={{color:'black'}}>Last Name</label>
              <input type="text" className="form-control" onChange={(e)=>setlastName(e.target.value)} placeholder=" Name" required/>


            <div className="mb-3">
              <label htmlFor="E-mail" className="form-label" style={{color:'black'}}>Email</label>
              <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your e-mail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label" style={{color:'black'}}>Password</label>
              <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} placeholder="password" required />
            </div>
            <div className="mb-3">
              <label htmlFor="confPassword" className="form-label" style={{color:'black'}}>Confirmation Password</label>
              <input type="password" className="form-control" onChange={(e)=>setconfpassword(e.target.value)} placeholder="confirme your password" required />
            </div>
            <label className='d-flex' htmlFor="Terms">
                    <input type="checkbox" className="checkbox" required value="Terms" style={{display: 'inline',width: 1.2+'em',
                    height: 1.2+'em'}}/>
                    <p style={{paddingLeft:10+'px', paddingBottom:15+'px', color:'black'}}>I Agree To The Terms &amp; Conditions</p>
                </label>
                <label className='d-flex' htmlFor="isSeller">
                    <input type="checkbox" className="checkbox" onClick={(e)=>setSeller( !seller)} value="isSeller" style={{display: 'inline',width: 1.2+'em',
                    height: 1.2+'em'}}/>
                    <p style={{paddingLeft:10+'px', paddingBottom:15+'px', color:'black'}}>Sign Up as Seller (You will be normal user by defult) </p>
                </label>
              <button className='btn btn-outline-dark' onClick={SignUp} >Sign Up</button>
           </div>
             </div>

        </div>
        </div>
    </div>
    
  )
}

export default Myaccount;
