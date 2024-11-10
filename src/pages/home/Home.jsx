import Banner from "../../components/Banner/mainBanner/Banner";
import Posts from "../../components/Posts/Posts";
import MainCollection from "../../components/CollectionSection/MainCollection/MainCollection";
import TrendyItem from "../../components/TrendyItem/TrendyItem";
import BannerDiscounts from "../../components/BannerDiscounts/MainBannerDiscounts/BannerDiscounts";


export default function Home() {
    return (
        <>
            <Banner />
            <Posts />
            <TrendyItem />
            <BannerDiscounts />
            <MainCollection />
        </>
    )
}
