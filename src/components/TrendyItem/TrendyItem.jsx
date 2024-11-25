import Cards from "../Cards/Cards";
import HeaderSection from "../HeaderSection/HeaderSection";

export default function TrendyItem() {
    return (
        <>
            <HeaderSection title="trendy item" />

            <div className="box-trendy-item px">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </>
    )
}
