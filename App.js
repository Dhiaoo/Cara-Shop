
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import HomePage from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SingelProduct from './Pages/Products/SingelProduct';
import Header from './SharedComponents/header';
import ContactUs from './Pages/ContactUs/contactus';
import Myaccount from './Pages/MyAccount/Myaccount';
import Dashboard from './Pages/MyAccount/Dashboard';
import SellerDashboard from './Pages/MyAccount/SellerDashboard';
import AdminDashboard from './Pages/MyAccount/AdminDashboard';



function App() {
  return (
    <>
    <Header />
       <Routes>
       <Route exact path="/" element={<HomePage />} />
       <Route exact path="/products" element={<Products />} />
       <Route exact path='/products/:id' element={<SingelProduct />} />
       <Route exact path='/aboutUs' element={<AboutUs />} />
       <Route exact path='/contactUs' element={<ContactUs />} />
       <Route exact path='/Myaccount' element={<Myaccount />} />
       <Route exact path='/AdminDash' element={<AdminDashboard />} />
       <Route exact path='/UserDash' element={<Dashboard />} />
       <Route exact path='/SellerDash' element={<SellerDashboard />} />
       </Routes>
    </>
  );
}

export default App;
