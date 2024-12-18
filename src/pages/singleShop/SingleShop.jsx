import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig";
import { useParams } from "react-router-dom";
import CardSingleShop from "../../components/CardSingleShop/MainCardSingleShop/CardSingleShop";
import HeaderSingleShop from "../../components/HeaderSingleShop/HeaderSingleShop";
import DropdownSingleShop from "../../components/DropdownSingleShop/DropdownSingleShop";
import { Toaster } from "react-hot-toast";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import RecentlyViewedProducts from "../../components/RecentlyViewedProducts/RecentlyViewedProducts";
import LoadingSingleShop from "../../components/LoadingSingleShop/LoadingSingleShop";

export default function SingleShop() {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await axiosConfig({
                method: "get",
                url: `/products?id=eq.${id}&select=*`,
            });
            return response?.data;
        },
        enabled: !!id,
    });

    if (isLoading) {
        return <div><LoadingSingleShop /></div>;
    }

    if (error) {
        console.error(error);
        return <div>Error fetching data</div>;
    }

    if (!data || data?.length === 0) {
        return <div>Product not found</div>;
    }

    console.log(data);

    return (
        <>
            <Toaster position="top-left" reverseOrder={false} />
            <HeaderSingleShop product={data[0]} />
            <CardSingleShop product={data[0]} />
            <DropdownSingleShop product={data[0]} />
            <YouMayAlsoLike productId={data[0].id} />
            <RecentlyViewedProducts productId={data[0].id} />
        </>
    );
}
