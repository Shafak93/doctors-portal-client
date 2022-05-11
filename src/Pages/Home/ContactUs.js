import React from 'react';
import bgImage from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{background:`url(${bgImage})`}} className='text-center'>
            <form className='py-16'>
                <div className='mb-2'>
                    <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                    <h4 className='text-3xl text-white'>Stay Connected With Us</h4>
                </div>
                <input type="email" placeholder="Email Address" class="mb-2 input input-bordered input-secondary w-full max-w-xs" /> <br />
                <input type="text" placeholder="Subject" class="mb-2 input input-bordered input-secondary w-full max-w-xs" /><br />
                <textarea class="mb-2 textarea textarea-secondary w-full max-w-xs" placeholder="Your message"></textarea><br />

                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;