import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='px-12'>
            <h4 className='text-xl text-center text-secondary font-bold'>Available Appointemnts on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }

            </div>
            {
                treatment && <BookingModal 
                date={date} 
                treatment={treatment}
                setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;