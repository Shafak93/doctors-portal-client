import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slots Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'}</p>
                <p><small>price $ {price}</small></p>
                <div className="card-actions justify-center">

                <label disabled={slots.length === 0} 
                onClick={()=>setTreatment(service)} htmlFor="my-modal-6" className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;