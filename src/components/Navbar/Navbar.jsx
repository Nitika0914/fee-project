import React, {useState,useContext} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
import {StoreContext} from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("menu");
    const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
       <ul className="navbar-menu">
        <Link to='/'onClick={()=>setMenu("home")} className={menu==="home" ?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ?"active":""}>Menu</a>
        <a href='#footer'onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ?"active":""}>Contact us</a>
       </ul>
       <div className="navbar-right">
             <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
             </div>
             <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar