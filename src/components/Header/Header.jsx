import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
                <Container>
                    <nav className='d-flex justify-content-between align-items-center m-auto '>
                        <Link className='navWord'><h4>Chef By Nature</h4></Link>
                        <div>
                            <Link className='navWord' to='/'>Home</Link>
                            <Link className='navWord' to='/blog'>Blog</Link>
                        </div>
                        <div className='d-flex align-items-center'>
                            <Link className='navWord'>User</Link>
                            <Link className='navWord' to='/login'>login</Link>
                            <Link className='navWord' to='/register'>Register</Link>
                        </div>
                    </nav>
                        <hr />
                </Container>
         
        </div>
    );
};

export default Header;