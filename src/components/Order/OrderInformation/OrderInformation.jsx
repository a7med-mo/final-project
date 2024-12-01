/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { HiOutlineTruck } from "react-icons/hi";


import confetti from 'canvas-confetti';
export default function OrderInformation({ total }) {

    let remaining = 100 - total;

    useEffect(() => {
        if (total >= 100) {
            confetti({
                particleCount: 250,
                angle: 60,
                spread: 100,
                origin: { x: 0 },
            });

            confetti({
                particleCount: 250,
                angle: 120,
                spread: 100,
                origin: { x: 1 },
            });
        }
    }, [total >= 100]);


    if (remaining < 0) {
        remaining = 0;
    }

    return (
        <>
            <div className="box-order-information">

                {
                    total < 100 ? (
                        <>
                            <h4>Almost there, add <span>${remaining.toFixed(2)}</span> more to get <span>FREE SHIPPING!</span></h4>
                            <div className="bar-free-order">
                                <div className="bar">
                                    <div className="progress-bar" style={{ width: `${100 - remaining}%` }}>
                                        <span>
                                            <HiOutlineTruck />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <h4><span className="congratulations">Congratulations</span>! You&apos;ve got free shipping!</h4>
                    )
                }




                <h5>Subtotal: ${total.toFixed(2)}</h5>
            </div>
        </>
    )
}
