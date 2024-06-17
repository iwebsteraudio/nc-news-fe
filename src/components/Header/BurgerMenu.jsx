import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom';


const BurgerMenu = ()=>{
      const showSettings = (event)=>{
        event.preventDefault();
      }

    return (
       
        <Menu>
        <Link to="/" className='menu-link'>Home</Link>
        {/* <Link to="/post">Post</Link> */}
        <Link to= "/LogIn" className='menu-link'>Log In</Link>
        <a onClick={ showSettings } className='menu-link' href="">Settings</a>
      </Menu>
    )
}

export default BurgerMenu;