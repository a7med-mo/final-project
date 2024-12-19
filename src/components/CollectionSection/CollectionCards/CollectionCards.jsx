import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import Card from "../../Card/Card";
import CardLoading from "../../CardLoading/CardLoading";

// eslint-disable-next-line react/prop-types
export default function CollectionCards({ title, typeFilter }) {
    const { data, isLoading, isError } = useQuery(
        {
            queryKey: ['CollectionCardsProduct'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?`
            })
        }
    );

    if (isLoading) {
        return (
            <div className="collection-section-cards px">
                <div className="title"><h2>{title}</h2></div>
                <div className="collection-cards">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CardLoading key={index} />
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="collection-section-cards px">
                <div className="title"><h2>{title}</h2></div>
                <div className="collection-cards">
                    <p>Error loading products. Please try again later.</p>
                </div>
            </div>
        );
    }

    // فلترة المنتجات حسب النوع (type)
    let filteredProducts = data?.data?.filter(product => product?.type === typeFilter);

    const trendProducts = filteredProducts
        .map(product => ({
            ...product,
            reviewCount: product?.reviews?.length || 0,
            discountFactor: product?.discount || 0,
            stockFactor: product?.remaining > 0 ? 1 : 0,
        }))
        .sort((a, b) => {
            if (b?.rating !== a?.rating) {
                return b?.rating - a?.rating;
            } else if (b?.reviewCount !== a?.reviewCount) {
                return b?.reviewCount - a?.reviewCount;
            } else if (b?.discountFactor !== a?.discountFactor) {
                return b?.discountFactor - a?.discountFactor;
            } else {
                return b?.stockFactor - a?.stockFactor;
            }
        })
        .slice(0, 6);

    return (
        <div className="collection-section-cards px">
            <div className="title"><h2>{title}</h2></div>
            <div className="collection-cards">
                {trendProducts?.length === 0 ? (
                    <p>No trending {typeFilter}&rsquo;s products available at the moment.</p>
                ) : (
                    trendProducts?.map((product) => (
                        <Card key={product?.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
}
