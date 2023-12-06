import React, { Fragment } from 'react'
import {Link, Route, Switch } from 'react-router-dom';


// Your React component code here


const NavBar = () => {
  return (
    <Fragment>
        <nav className='nav'>
            <a href='/' className='site-title'>Site name</a>
            <ul>
                <li>  
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>  
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                
            </ul>
        </nav>
    </Fragment>
  )
}

export default NavBar
