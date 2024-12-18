import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../HeaderSection/HeaderSection";
import { axiosConfig } from "../../utils/axiosConfig";
import Card from "../Card/Card";
import CardLoading from "../CardLoading/CardLoading";

export default function TrendyItem() {

    const { data, isLoading, isError, error } = useQuery(
        {
            queryKey: ['TrendyItem'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=10`
            })
        }
    );

    if (isLoading) {
        return (
            <>
                <HeaderSection title="Trendy Item" />
                <div className="box-trendy-item px">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CardLoading key={index} />
                    ))}
                </div>
            </>
        );
    }

    if (isError) {
        return (
            <div>Error: {error.message}</div>
        );
    }

    const sortedData = data?.data?.sort((a, b) => {
        if (b.rating !== a.rating) {
            return b.rating - a.rating;
        }

        if (b.remaining !== a.remaining) {
            return b.remaining - a.remaining; 
        }

        return b.discount - a.discount; 
    });

    return (
        <>
            <HeaderSection title="Trendy Item" />
            <div className="box-trendy-item px">
                {sortedData?.map((product) => (
                    <Card key={product?.id} product={product} />
                ))}
            </div>
        </>
    );
}
