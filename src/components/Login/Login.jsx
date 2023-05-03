import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='full-page'>
            <div className='login-card'>
                <form >
                    <h2>Please Login</h2>
                    <br />


                    <input className='input-field' type="email" name='email' id='email' placeholder='Enter your email' />

                    <input className='input-field' type="password" name='password' id='password' placeholder=' Enter your password' />
                    <br />
                    <button className='btn btn-primary my-3'>Log In</button>
                    
                    <div>
                        <p className='mb-1 pb-0'>New to this Website?</p>
                        <Link className='btn btn-link mt-0 pt-0' to="/register"> Create an Account </Link>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;