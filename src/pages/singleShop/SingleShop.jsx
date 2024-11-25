import { useQuery } from "@tanstack/react-query"
import { axiosConfig } from "../../utils/axiosConfig"
import { useParams } from "react-router-dom"
import CardSingleShop from "../../components/CardSingleShop/MainCardSingleShop/CardSingleShop";
import HeaderSingleShop from "../../components/HeaderSingleShop/HeaderSingleShop";
import DropdownSingleShop from "../../components/DropdownSingleShop/DropdownSingleShop";
import { Toaster } from 'react-hot-toast';
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";

export default function SingleShop() {
    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const response = await axiosConfig({
                method: "get",
                url: `/products/${id}`
            });
            return response;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error fetching data</div>;
    }



    return (
        <>
            <Toaster position="top-left" reverseOrder={false} />
            <HeaderSingleShop product={data?.data} />
            <CardSingleShop product={data?.data} />
            <DropdownSingleShop product={data?.data} />
            <YouMayAlsoLike product={data?.data} /> 
        </>
    )
}

