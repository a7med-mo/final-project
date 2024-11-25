
import Cards from "../../Cards/Cards";


// eslint-disable-next-line react/prop-types
export default function CollectionCards({ title }) {
    return (
        <>
            <div className="collection-section-cards px">
                <div className="title"><h2>{title}</h2></div>
                <div className="collection-cards">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </>
    )
}
