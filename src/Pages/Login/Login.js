import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const Login = () => {
     const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
      const [token] = useToken(user || googleUser)
      let signInError;

      useEffect(()=>{
        if(token){
            navigate(from, { replace: true });
        }
      },[token, from , navigate])

      if(loading || googleLoading){
          return <Loading></Loading>
      }
      if(error || signInError){
          signInError = <small><p className='text-red-500'>{error?.message || googleError?.message}</p></small>
      }
    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        placeholder="Your Email" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("email",{
                            required :{
                                value: true,
                                message : 'Email is required.'
                            },
                            pattern: {
                                //[A-Za-z]{3}
                              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: 'Enter a valid email.' // JS only: <p>error message</p> TS only support string
                            }
                          })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        placeholder="Password" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("password",{
                            required :{
                                value: true,
                                message : 'Password required.'
                            },
                            minLength: {
                              value: 6,
                              message: 'Password should be minimum 6 character or greater.' // JS only: <p>error message</p> TS only support string
                            }
                          })}
                        />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                        <input className="btn w-full max-w-xs" type="submit" value='Login' />
                    </form>
                    <p><small>New to Doctors Portal ? <Link to='/signup' className='text-primary'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button 
                   onClick={() => signInWithGoogle()}
                    className="btn btn-outline uppercase"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;