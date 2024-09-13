import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [Menu,setMenu] = useState("Home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("Home")} className={Menu==="Home"?"active":""}>Home</Link>
                <a href = '#explore-menu' onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"active":""}>Menu</a>
                <a href = '#app-download' onClick={()=>setMenu("Mobile App")} className={Menu==="Mobile App"?"active":""}>Mobile App</a>
                <a href = '#footer' onClick={()=>setMenu("Contact Us")} className={Menu==="Contact Us"?"active":""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
