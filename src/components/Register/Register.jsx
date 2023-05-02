import React from 'react';
import './Register.css'

const Register = () => {





    return (
        <div>
            <h2>Please Register</h2>
            <div>
                <form >
                   <div className='d-flex'>
                   <h6>Email:</h6>
                    <input type="email" name='email' id='email' placeholder='Enter your email' />
                   </div>

                    <input type="password" name='password' id='password' placeholder=' Enter your password' />

                </form>
            </div>
        </div>
    );
};

export default Register;