import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='err'>
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to='/'><button className='btn-err-page-back'>Go back to home page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;