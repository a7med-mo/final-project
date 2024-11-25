/* eslint-disable react/prop-types */

import { useState } from "react";


export default function ImageCardSingle({ images = [] }) {

    const [index, setIndex] = useState(0);

    const handleImageClick = (newIndex) => {
        setIndex(newIndex);
    };


    return (
        <>
            <div className="box-image-card-single">

                <div className="images-btns">
                    {images?.map((image, i) => (
                        <span key={i}>
                            <img src={image} alt="Image description" className={i === index ? "active" : ""} onClick={() => handleImageClick(i)} />
                        </span>
                    ))}
                </div>

                <div className="image-full-screen">
                    {images ? (
                        <img src={images[index]} alt="Image description" />
                    ) : (
                        <svg>
                            <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#f76b6a" strokeWidth="2" strokeDasharray="205.271142578125 51.317785644531256"><animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite" /></path>
                        </svg>
                    )}
                </div>

            </div>
        </>
    )
}
