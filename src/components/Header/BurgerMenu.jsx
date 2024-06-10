import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link} from 'react-router-dom';

const BurgerMenu = ()=>{
      const showSettings = (event)=>{
        event.preventDefault();
      }

    return (
        <Menu>
        <Link to="/">Home</Link>
        {/* <Link to="/post">Post</Link> */}
        <Link to= "/LogIn">Log In</Link>
        <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    )
}

export default BurgerMenu;