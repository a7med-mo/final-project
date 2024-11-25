/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi";



export default function StarRating({ rating = 0, totalStars = 5 }) {
    const calculateStarWidth = (index) => {
        if (index < Math.floor(rating)) return "100%"; 
        if (index < rating) return `${(rating - Math.floor(rating)) * 100}%`;
        return "0%";
    };

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <div key={index} className="star-wrapper">
                    <span className="star full"><HiStar /></span>
                    <span
                        className="star filled"
                        style={{ width: calculateStarWidth(index) }}
                    >
                        <HiStar />
                    </span>
                </div>
            ))}
        </div>
    );
}