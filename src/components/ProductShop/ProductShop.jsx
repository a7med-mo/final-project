/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import { useState, useMemo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardLoading from "../CardLoading/CardLoading";

export default function ProductShop({ products, count, isLoading }) {
    const [page, setPage] = useState(0);
    const limit = 16;
    const totalPages = Math.ceil(count / limit);

    // ترتيب المنتجات حسب المبيعات (أو مقياس آخر مثل rating أو stock أو remaining)
    const sortedProducts = useMemo(() => {
        return products?.sort((a, b) => {
            return b.sales - a.sales || b.rating - a.rating;
        });
    }, [products]);

    const currentProducts = useMemo(() => {
        return sortedProducts?.slice(page * limit, (page + 1) * limit);
    }, [sortedProducts, page, limit]);

    const renderPagination = () => {
        const pages = [];

        if (page > 0) {
            pages.push(
                <li key="prev">
                    <MdKeyboardArrowLeft onClick={() => setPage(page - 1)} />
                </li>
            );
        }

        if (page > 2) {
            pages.push(
                <li key="first">
                    <span onClick={() => setPage(0)}>1</span>
                </li>
            );
            if (page > 3) {
                pages.push(
                    <li key="dots-start">
                        <span>...</span>
                    </li>
                );
            }
        }

        for (let i = Math.max(0, page - 2); i <= Math.min(totalPages - 1, page + 2); i++) {
            pages.push(
                <li key={i}>
                    <span
                        className={page === i ? "active" : ""}
                        onClick={() => setPage(i)}
                    >
                        {i + 1}
                    </span>
                </li>
            );
        }

        if (page < totalPages - 3) {
            if (page < totalPages - 4) {
                pages.push(
                    <li key="dots-end">
                        <span>...</span>
                    </li>
                );
            }
            pages.push(
                <li key="last">
                    <span onClick={() => setPage(totalPages - 1)}>{totalPages}</span>
                </li>
            );
        }

        if (page < totalPages - 1) {
            pages.push(
                <li key="next">
                    <MdKeyboardArrowRight onClick={() => setPage(page + 1)} />
                </li>
            );
        }

        return pages;
    };

    return (
        <>
            <div className="card-broduct-shop px">

                {isLoading && Array.from({ length: limit }).map((_, index) => (
                    <CardLoading key={index} />
                ))}

                {currentProducts?.map((product) => (
                    <Card key={product?.id} product={product} />
                ))}
            </div>

            <div className="pagination-page">
                <ul>{renderPagination()}</ul>
            </div>
        </>
    );
}
