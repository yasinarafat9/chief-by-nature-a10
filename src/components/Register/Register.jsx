import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {





    return (
        <div className='full-page'>
            <div className='register-card'>
                <form >
                    <h2>Please Register</h2>
                    <br />
                    <input type="text" className='input-field' name='username' placeholder='Your Name' />

                    <input className='input-field' type="email" name='email' id='email' placeholder='Enter your email' />

                    <input className='input-field' type="password" name='password' id='password' placeholder=' Enter your password' />
                    <br />

                    <div>
                    <p>Already have an Account? </p>
                    <Link className='btn btn-link' to="/login"> Log In</Link>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;