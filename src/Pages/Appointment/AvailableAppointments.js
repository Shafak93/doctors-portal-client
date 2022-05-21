import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format (date, 'PP');
    const {data:services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`https://floating-gorge-57903.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`https://floating-gorge-57903.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
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
                setTreatment={setTreatment}
                refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;