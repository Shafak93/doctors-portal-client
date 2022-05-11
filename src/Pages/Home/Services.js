import React from 'react';
import Service from './Service';
import flourid from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Treatment from './Treatment';

const Services = () => {
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    <Service img ={flourid} title ='Flouride Treatment'></Service>
                    <Service img ={cavity} title ='Cavity Filling'></Service>
                    <Service img ={teeth} title='Teeth Whitening'></Service>
                </div>
                <Treatment></Treatment>
            </div>
        </div>
    );
};

export default Services;