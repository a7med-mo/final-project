/* eslint-disable react/prop-types */
import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import { BsFilterLeft } from "react-icons/bs";

export default function FilterShop({ products, setFilters, filters }) {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);
    const [price, setPrice] = useState([0, 1000]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [isOpen, setIsOpen] = useState(false);

    const handlePriceChange = (event, newPrice) => {
        setPrice(newPrice);
    };

    const applyPriceFilter = () => {
        setFilters((prev) => ({
            ...prev,
            price: price,
        }));
    };

    useEffect(() => {
        if (products && Array.isArray(products)) {
            const allColors = products?.flatMap((product) => product?.colors || []);
            const uniqueColors = Array.from(
                new Map(
                    allColors.map((color) => [
                        `${color.colorName.toLowerCase()}-${color.hexCode}`,
                        {
                            name: color.colorName.toLowerCase(),
                            hex: color.hexCode || "#000000",
                        },
                    ])
                ).values()
            );
            setColors(uniqueColors);

            const allSizes = products.flatMap((product) => product.sizes || []);
            setSizes([...new Set(allSizes)]);

            const uniqueBrands = [...new Set(products.map((product) => product.brand))];
            setBrands(uniqueBrands);

            const uniqueTypes = [...new Set(products.map((product) => product.type))];
            setTypes(uniqueTypes);

            const prices = products.map((product) => product.price || 0);
            const maxPriceValue = Math.max(...prices, 0);
            setMaxPrice(maxPriceValue);
            setPrice([0, maxPriceValue]);
        }
    }, [products, filters, setFilters]);

    const handleFilterChange = (type, value) => {
        setFilters((prev) => {
            const updatedFilters = { ...prev };
            if (updatedFilters[type].includes(value)) {
                updatedFilters[type] = updatedFilters[type].filter((item) => item !== value);
            } else {
                updatedFilters[type].push(value);
            }
            return updatedFilters;
        });
    };

    return (
        <>
            <div className="filter-shop">
                <button className="filter-icon" onClick={() => setIsOpen(!isOpen)}>
                    <BsFilterLeft /> Filter
                </button>
            </div>

            <div className={`filterContainer ${isOpen ? "active" : ""}`}>
                <div className="color-box">
                    <h2>Color</h2>
                    <ul>
                        {colors.map((color, i) => (
                            <li
                                key={i}
                                className={filters.colors.includes(color.name) ? "selected" : ""}
                                onClick={() => handleFilterChange("colors", color.name)}
                            >
                                <span style={{ background: color.hex }} className="color-swatch"></span>
                                <h3>{color.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="size-box">
                    <h2>Size</h2>
                    <ul>
                        {sizes.map((size, i) => (
                            <li
                                key={i}
                                className={filters.sizes.includes(size) ? "selected" : ""}
                                onClick={() => handleFilterChange("sizes", size)}
                            >
                                <h3>{size}</h3>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="brand-box">
                    <h2>Brand</h2>
                    <ul>
                        {brands.map((brand, i) => (
                            <li
                                key={i}
                                className={filters.brands.includes(brand) ? "selected" : ""}
                                onClick={() => handleFilterChange("brands", brand)}
                            >
                                <h3>{brand}</h3>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="type-box">
                    <h2>Type</h2>
                    <ul>
                        {types.map((type, i) => (
                            <li
                                key={i}
                                className={filters.types?.includes(type) ? "selected" : ""}
                                onClick={() => handleFilterChange("types", type)}
                            >
                                <h3>{type}</h3>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="price-box">
                    <h2>Price</h2>
                    <Slider
                        value={price}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value}`}
                        min={0}
                        max={maxPrice}
                        step={0.01}
                        disableSwap
                    />
                    <p className="price-range">Price: <span>${price[0]}</span> - <span>${price[1]}</span></p>
                    <button onClick={applyPriceFilter} className="apply-filter-btn btn">
                        Filter
                    </button>
                </div>
            </div>
        </>
    );
}
