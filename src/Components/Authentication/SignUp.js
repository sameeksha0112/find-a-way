
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import auth from '../../firebase.init';
import useToken from './UseToken';
import Loading from './Loading';

const SignUp = () => {
  const { register, formState: { errors }, reset, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();
  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }
  if (error || gError || updateError) {
    signInError = <p className='text-red-500 pb-4'><small>{error?.message || gError?.message || updateError?.message}</small></p>;
  }
  if (token) {
    navigate('/');
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
  };

  return (
    <section className='h-[90vh] d-flex justify-content-center justify-items-center bg-base-200 mt-5' >
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <Form className='text-center' onSubmit={handleSubmit(onSubmit)}>
            <h4>Please Sign Up</h4>
            <Form.Group className='mb-3'>
              
              <Form.Control
                type='text'
                placeholder='Enter Your Name'
                {...register('name', {
                  required: 'Name is Required',
                })}
                isInvalid={!!errors.name}
              />
              {errors.name && <Form.Control.Feedback type='invalid'>{errors.name.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group className='mb-3'>
             
              <Form.Control
                type='email'
                placeholder='Enter Your Email'
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
                isInvalid={!!errors.email}
              />
              {errors.email && <Form.Control.Feedback type='invalid'>{errors.email.message}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Group className='mb-3'>
              
              <Form.Control
                type='password'
                placeholder='Enter Your Password'
                {...register('password', {
                  required: 'Password is Required',
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
                isInvalid={!!errors.password}
              />
              {errors.password && <Form.Control.Feedback type='invalid'>{errors.password.message}</Form.Control.Feedback>}
            </Form.Group>
            {signInError}
            <Button type='submit' variant='primary' className='w-100'>
              Sign Up
            </Button>
          </Form>
          <p className='text-sm'>Already have an account? <Link to='/login' className='text-error hover:link'>Please Login </Link></p>
          <div className='divider'>OR</div>
          <button onClick={() => signInWithGoogle()} className='btn btn-accent border-primary'><img className='' style={{ width: '40px', cursor: 'pointer' }} src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='' /> <span>CONTINUE WITH GOOGLE</span></button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;