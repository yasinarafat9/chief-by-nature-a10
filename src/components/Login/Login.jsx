import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { FaGoogle, FaGithub } from "react-icons/fa";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {

    const [error, setError] = useState('');
    const [success, SetSuccess] = useState('');
    const [userImg, setUserImg] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        setError('');
        SetSuccess('');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                SetSuccess('Login Successfully')
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                console.log(user.photoURL
                    )
                    setUserImg(user.photoURL)
            }).catch((error) => {
                console.log('error', error.message)
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error.customData.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }



    return (
        <div className='full-page'>
            <div className='login-card'>
                <form onSubmit={handleLogin} >
                    <h2>Please Login</h2>
                    <br />
                    <input className='input-field' type="email" name='email' id='email' placeholder='Enter your email' />

                    <input className='input-field' type="password" name='password' id='password' placeholder=' Enter your password' />
                    <br />
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <button type='submit' className='btn btn-primary my-3'>Log In</button>

                    <div>
                        <p className='mb-1 pb-0'>New to this Website?</p>
                        <Link className='btn btn-link mt-0 pt-0' to="/register"> Create an Account </Link>
                    </div>
                    <div>
                        <p className='my-1'> <small>Or Log In using...</small></p>
                        <FaGoogle onClick={handleGoogle} className='fs-2 mx-2 text-danger' />
                        <FaGithub className='fs-2 mx-2' />
                        <img src={userImg} alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default  Login;