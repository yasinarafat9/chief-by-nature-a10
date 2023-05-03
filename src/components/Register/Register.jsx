import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
// import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { FaGoogle, FaGithub } from "react-icons/fa";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Register = () => {
    // const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, SetSuccess] = useState('');
    const [userImg, setUserImg] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(userName, email, password)

        setError('');
        SetSuccess('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                SetSuccess('Registration Successfully')
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
            <div className='register-card'>
                <form onSubmit={handleSubmit}>
                    <h2>Please Register</h2>
                    <br />
                    <input type="text" className='input-field' name='userName' placeholder='Your Name' />

                    <input className='input-field' type="email" name='email' id='email' placeholder='Enter your email' />

                    <input className='input-field' type="password" name='password' id='password' placeholder=' Enter your password' />
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <button type='submit' className='btn btn-primary my-3'>Register</button>


                    <div>
                        <p className='mb-1 pb-0'>Already have an Account? </p>
                        <Link className='btn btn-link mt-0 pt-0' to="/login"> Log In</Link>

                    </div>
                    <div>
                        <p className='my-1'> <small>Or Register using...</small></p>
                        <FaGoogle onClick={handleGoogle} className='fs-2 mx-2 text-danger' />
                        <FaGithub className='fs-2 mx-2' />
                        <img className='user-img  mx-2' src={userImg} alt="" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;