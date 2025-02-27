import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from './UseToken';
import auth from '../../firebase.init';
import Loading from './Loading';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading />;
  }
  if (error || gError) {
    signInError = <p className='text-red-500 pb-4'><small>{error?.message || gError?.message}</small></p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <section className=' container mt-5 lg:h-[90vh] md:h-[90vh] h-[80vh] lg:bg-base-200 md:bg-base-200 flex justify-center items-center' style={{width:"30rem"}}>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='mb-2 text-secondary'>
            <h3>Please Login</h3>
          </div>

          <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              
              <input
                type='email'
                placeholder='Enter Your Email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                // defaultValue='user@gmail.com'
                autoFocus={true}
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
            </div>

            <div className='form-group mt-3'>
              
              <input
                type='password'
                placeholder='Enter Your Password'
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                // defaultValue='12345678'
                {...register('password', {
                  required: 'Password is Required',
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />
              {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
            </div>
            {signInError}

            <input type='submit' value='Sign in' className='btn mt-3 btn-primary w-full' />
          </form>
          <p className='text-sm'>Don't have an account yet? <Link to='/signUp' className='text-error hover:link'>Sign Up</Link></p>
          <div className='divider'>OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-accent border-primary'><img className='' style={{ width: '40px', cursor: 'pointer' }} src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='' /> <span>CONTINUE WITH GOOGLE</span></button>
        </div>
      </div>
    </section>
  );
};

export default Login;