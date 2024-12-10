/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig";
import { Card } from "react-bootstrap";

export default function YouMayAlsoLike({ product }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["youMayAlsoLike", product.category, product.brand, product.type],
        queryFn: async () => {
            const response = await axiosConfig({
                method: "get",
                url: `/products?category=eq.${product.category}&brand=eq.${product.brand}&type=eq.${product.type}&limit=4&neq.id=${product.id}`,
            });
            return response.data;
        },
    });

    if (isLoading) return <div>Loading similar products...</div>;
    if (error) return <div>Error fetching similar products</div>;

    return (
        <div className="you-may-also-like px py">
            <h2>You May Also Like</h2>
            <div className="you-may-also-like-cards">
                {data?.map((item) => (
                    <Card key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}
