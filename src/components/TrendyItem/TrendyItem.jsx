import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../HeaderSection/HeaderSection";
import { axiosConfig } from "../../utils/axiosConfig";
import Card from "../Card/Card";

export default function TrendyItem() {

    const { data } = useQuery(
        {
            queryKey: ['product'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=10`
            })
        }
    )


    if (!Array.isArray(data?.data)) {
        return <p>No valid data available</p>;
    }
    return (
        <>
            <HeaderSection title="trendy item" />

            <div className="box-trendy-item px">
                {data?.data?.map((product) => (
                    <Card key={product?.id} product={product} />
                ))}
            </div>
        </>
    )
}
