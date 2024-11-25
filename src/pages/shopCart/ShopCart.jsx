
import CardsShopCart from "../../components/CardsShopCart/CardsShopCart";
import HeaderShopCart from "../../components/HeaderShopCart/HeaderShopCart";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig";


export default function ShopCart() {

    const { data } = useQuery(
        {
            queryKey: ['product'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: '/products'
            })
        }
    )

    console.log(data?.data);

    return (
        <>
            <HeaderShopCart />
            <CardsShopCart product={data?.data} />
        </>
    )

}
