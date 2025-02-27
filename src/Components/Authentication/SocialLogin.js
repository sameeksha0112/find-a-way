import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, user , error] = useSignInWithGoogle(auth);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/';

  if (error) {
    console.log(error);
  }
  if (user ) {
    navigate(from, { replace: true });
  }
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  

  return (
    <div className='d-flex justify-content-around align-items-center'>
      
      <button className='btn btn-white border border-primary w-100'  onClick={handleSignInWithGoogle}>
      <img className='rounded-circle' style={{ width: '40px', cursor: 'pointer' }} src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='' />
      </button>
    </div>
  );
};

export default SocialLogin;
