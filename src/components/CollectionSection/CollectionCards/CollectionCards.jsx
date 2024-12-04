
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import Card from "../../Card/Card";

// eslint-disable-next-line react/prop-types
export default function CollectionCards({ title }) {

    const { data } = useQuery(
        {
            queryKey: ['product'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=2`
            })
        }
    )
    return (
        <>
            <div className="collection-section-cards px">
                <div className="title"><h2>{title}</h2></div>
                <div className="collection-cards">
                    {data?.data?.map((product) => (
                        <Card key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
