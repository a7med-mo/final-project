
import CardsShopCart from "../../components/CardsShopCart/CardsShopCart";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../utils/axiosConfig";
import HeaderPages from "../../components/HeaderPages/HeaderPages";
import YouMayAlsoLike from "../../components/YouMayAlsoLike/YouMayAlsoLike";
import RecentlyViewedProducts from "../../components/RecentlyViewedProducts/RecentlyViewedProducts";


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
            <HeaderPages title="Shop Cart" link="" nameLink="home" />
            <CardsShopCart product={data?.data} />
            <YouMayAlsoLike />
            <RecentlyViewedProducts />
        </>
    )

}
