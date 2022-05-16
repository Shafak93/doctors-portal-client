import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({date, treatment, setTreatment}) => {
    const [user, loading, error] = useAuthState(auth);
    const {name, slots} = treatment

    const handleBooking = event =>{
        event.preventDefault()
        const slot = event.target.slot.value
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label htmlFor="my-modal-6" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg">Appoint for {name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input type="text" value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" />
                    <select name='slot' className="select select-bordered select-secondary w-full max-w-xs">
                        {
                            slots.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' placeholder='Your Name' value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="email" name='email' placeholder='Your email' value={user?.email} className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                </form>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-secondary">Close</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;