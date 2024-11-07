import Card from "../Card/Card";
import HeaderSection from "../HeaderSection/HeaderSection";

export default function TrendyItem() {
    return (
        <>
            <HeaderSection title="trendy item" />

            <div className="box-trendy-item px">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
