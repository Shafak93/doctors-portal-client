import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    
    const url = `http://localhost:5000/booking/${id}`;
    console.log(url);
    // const {data:appointment, isLoading} = useQuery(['booking' , id], ()=>fetch(url,{
    //     method : 'GET',
    //     headers: {
    //         'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => { res.json() }))
    // console.log(appointment);

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card w-50   bg-base-100 shadow-xl">
                        <div class="card-body">
                            {/* <h2 class="card-title">Pay for {appointment.treatment }</h2> */}
                            {/* <p>We will see you on {appointment.date} at { appointment.slot}</p> */}
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                                {id}
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        
                    
                        <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                    </div>
                </div>
    </div>
        </div>
    );
};

export default Payment;