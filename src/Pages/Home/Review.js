import React from 'react';

const Review = ({review}) => {
    return (
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center py-2'>
                        <div class="avatar mr-6">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <h4>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;