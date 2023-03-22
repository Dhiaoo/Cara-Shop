import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/img/logo.png'
import user from '../assets/img/user.png';
import { NavLink } from "react-router-dom";
import HomePage from '../Pages/Home/Home';

function Header() {
  return (
    <nav className='navbar navbar-light bg-light navbar-expand-lg justify-content-evenly d-flex' style={{maxHeight:50}}>
    <a href="#" className='navbar-brand'>
    <img src={logo}  alt="" />
    </a>
    <div className="navbar-nav">
      <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
      <NavLink to="/products" className='nav-item nav-link'>Products</NavLink>
      <NavLink to="/aboutUs" className='nav-item nav-link'>About Us</NavLink>
      <NavLink to="/contactUs" className='nav-item nav-link'>Contact Us</NavLink>
    </div>
    <div className='navbar-nav'>
    <img src={user} className='nav-item' height={'40'} alt="" />
    <NavLink to="/Myaccount" className='nav-item nav-link'>My Account</NavLink>
    </div>
    </nav>
  );
}

export default Header;