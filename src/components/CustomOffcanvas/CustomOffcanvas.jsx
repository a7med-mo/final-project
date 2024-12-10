/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function CustomOffcanvas({ show, onClose, products }) {
    const offcanvasRef = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";

            const handleOutsideClick = (event) => {
                if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                    onClose();
                }
            };

            document.addEventListener("mousedown", handleOutsideClick);

            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
                document.body.style.overflow = "";
            };
        }
    }, [show, onClose]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const results = products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setFilteredProducts(results);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, products]);



    return (
        <div className={`box-shadow ${show ? "show" : ""}`}>
            <div className={`custom-offcanvas ${show ? "show" : ""}`} ref={offcanvasRef}>
                <div className="custom-offcanvas-header">
                    <h2>Search Our Site</h2>
                    <IoMdClose className="close" onClick={onClose} />
                </div>

                <div className="box-search">
                    <div className="search-input-container">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <CiSearch className="icon" />
                    </div>
                </div>

                <div className="box-cards">
                    {filteredProducts?.length > 0 ? (
                        filteredProducts?.map((product, index) => (
                            <div className="card" key={index}>
                                <Link to={`/${product.id}/${product.name}`} className="box-image">
                                    <img src={product?.images[0]} alt={product?.name} />
                                </Link>
                                <Link to={`/${product.id}/${product.name}`} className="box-content">
                                    <h2>{product?.name}</h2>
                                    <h4>${product?.price}</h4>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="no-products">No products found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
