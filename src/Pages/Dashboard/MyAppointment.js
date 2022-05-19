import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    console.log(appointments);
    const [user] = useAuthState(auth)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data));
        }
    },[user])
    return (
        <div>
            <h2 className='text-xl font-bold'>I have {appointments.length} appointments</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>Appoint ID</th>
                        <th>Name</th>
                        <th>Appoint Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appoint, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{appoint.patientName}</td>
                                <td>{appoint.date}</td>
                                <td>{appoint.slot}</td>
                                <td>{appoint.treatment}</td>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyAppointment;