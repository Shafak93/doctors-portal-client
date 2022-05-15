import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({date, treatment, setTreatment}) => {
    const {name, slots} = treatment

    const handleBooking = event =>{
        event.preventDefault()
        const slot = event.target.slot.value
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="my-modal-6" class="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg">Appoint for {name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input type="text" value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-xs" />
                    <select name='slot' class="select select-bordered select-secondary w-full max-w-xs">
                        {
                            slots.map(slot=> <option value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' placeholder="Your Name" class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Email Address" class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="submit" value='Submit' class="btn btn-secondary w-full max-w-xs" />
                </form>
                <div class="modal-action">
                <label for="my-modal-6" class="btn btn-secondary">Close</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;