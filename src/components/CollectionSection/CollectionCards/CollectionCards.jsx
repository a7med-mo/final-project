
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import Card from "../../Card/Card";
import CardLoading from "../../CardLoading/CardLoading";

// eslint-disable-next-line react/prop-types
export default function CollectionCards({ title }) {

    const { data, isLoading } = useQuery(
        {
            queryKey: ['CollectionCardsProduct'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=6`
            })
        }
    )
    return (
        <>
            <div className="collection-section-cards px">
                <div className="title"><h2>{title}</h2></div>
                <div className="collection-cards">
                    {isLoading && Array.from({ length: 6 }).map((_, index) => (
                        <CardLoading key={index} />
                    ))}
                    {data?.data?.map((product) => (
                        <Card key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
