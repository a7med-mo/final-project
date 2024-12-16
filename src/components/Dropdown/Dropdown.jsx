import { useState, useRef, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";


// eslint-disable-next-line react/prop-types
export default function Dropdown({propContent, title}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const content = contentRef.current;
        if (isOpen) {
            content.style.maxHeight = `${content.scrollHeight}px`;
            content.style.visibility = "visible";
        } else {
            content.style.maxHeight = "0";
            content.style.visibility = "hidden";
        }
    }, [isOpen]);

    return (
        <div className="dropdown px">
            <button className="dropbtn" onClick={toggleDropdown}>
                {title}

                {
                    isOpen ? (
                        <FiMinus />
                    ) : (
                        <GoPlus />
                    )
                }
            </button>
            <div className="dropdown-content" ref={contentRef}>
                {propContent}
            </div>
        </div>
    );
}
