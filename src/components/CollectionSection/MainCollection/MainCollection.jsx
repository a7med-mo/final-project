import CollectionCards from "../CollectionCards/CollectionCards";
import CollectionPoster from "../CollectionPoster/CollectionPoster";

export default function MainCollection() {
    const collectionPoster = [
        {
            image: "https://elessi2.myshopify.com/cdn/shop/files/h2-banner41_720x.jpg?v=1614392006",
            title: "men's collection",
            type: "men",
            typeFilter: "men"
        },
        {
            image: "https://elessi2.myshopify.com/cdn/shop/files/h2-banner3_720x.jpg?v=1614392001",
            title: "girls collection",
            type: "girls",
            typeFilter: "girls"
        },
    ];

    return (
        <>
            {collectionPoster.map((item, index) => (
                <div className="collection-section" key={index}>
                    {index % 2 === 0 ? (
                        <>
                            <CollectionPoster image={item.image} title={item.title} />
                            <CollectionCards title="Trending Men Products" typeFilter={item.typeFilter} />
                        </>
                    ) : (
                        <>
                                <CollectionCards title="Trending Girls Products" typeFilter={item.typeFilter} />
                            <CollectionPoster image={item.image} title={item.title} />
                        </>
                    )}
                </div>
            ))}
        </>
    );
}
