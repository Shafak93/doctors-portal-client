import React from 'react';
import clock from  '../../assets/icons/clock.svg';
import marker from  '../../assets/icons/marker.svg';
import phone from  '../../assets/icons/clock.svg';
import InfoCard from './InfoCard';

const info = () => {
    return (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
            <InfoCard bgClass = 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary' cardTitle = 'Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass = 'bg-accent' cardTitle = 'Our Locations' img={marker}></InfoCard>
            <InfoCard bgClass = 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary' cardTitle = 'Contact Us' img={phone}></InfoCard>
        </div>
    );
};

export default info;