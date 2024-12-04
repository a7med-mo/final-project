import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig";
import Card from "../Card/Card";



export default function Cards() {

    const { data } = useQuery(
        {
            queryKey: ['product'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=5`
            })
        }
    )


    if (!Array.isArray(data?.data)) {
        return <p>No valid data available</p>;
    }

    return (
        <>
            {data?.data?.map((product) => (
                <Card key={product?.id} product={product} />
            ))}
        </>
    )

}
