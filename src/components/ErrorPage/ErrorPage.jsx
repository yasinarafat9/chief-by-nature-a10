import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
import errPng from '../../assets/images/error 404-min.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='err'>
                <img src={errPng} alt="" />
                {/* <h1>404</h1>
                <h2>Page not found</h2> */}
            </div>
                <Link to='/'><button className='btn-err-page-back'>Go back to home page</button></Link>
        </div>
    );
};

export default ErrorPage;