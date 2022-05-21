import React from 'react';
import auth from '../../firebase.init';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user || googleUser)
      const navigate = useNavigate()
      let signInError;

      if(loading || googleLoading || updating){
          return <Loading></Loading>
      }
      if(error || signInError || updateError){
          signInError = <small><p className='text-red-500'>{error?.message || googleError?.message || updateError?.message}</p></small>
      }
    if(token){
        console.log(googleUser);
        navigate('/appointment')
    }
    const onSubmit = async data => {
        console.log(data)

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName : data.name })
        
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" 
                        placeholder="Your Name" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register("name",{
                            required :{
                                value: true,
                                message : 'Name is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


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
                        <input className="btn w-full max-w-xs" type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already have an account ? <Link to='/login' className='text-primary'>Please login</Link></small></p>
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

export default SignUp;