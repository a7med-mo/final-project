import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../HeaderSection/HeaderSection";
import { axiosConfig } from "../../utils/axiosConfig";
import Card from "../Card/Card";
import CardLoading from "../CardLoading/CardLoading";

export default function TrendyItem() {

    const { data, isLoading } = useQuery(
        {
            queryKey: ['TrendyItem'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products?limit=10`
            })
        }
    )

    return (
        <>
            <HeaderSection title="trendy item" />

            <div className="box-trendy-item px">
                {isLoading && Array.from({ length: 10 }).map((_, index) => (
                    <CardLoading key={index} />
                ))}
                {data?.data?.map((product) => (
                    <Card key={product?.id} product={product} />
                ))}
            </div>
        </>
    )
}
