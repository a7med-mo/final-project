/* eslint-disable react/prop-types */

import  { useState } from 'react';
import { HiStar } from "react-icons/hi";

const Rating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    const handleMouseEnter = (index) => {
        setHover(index);
    };
    
    const handleMouseLeave = () => {
        setHover(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= (hover || rating) ? 'filled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(star)}
                >
                    <HiStar />
                </span>
            ))}
        </div>
    );    
};

export default Rating;