import CollectionCards from "../CollectionCards/CollectionCards";
import CollectionPoster from "../CollectionPoster/CollectionPoster";

export default function MainCollection() {
    const collectionPoster = [
        {
            image: "https://elessi2.myshopify.com/cdn/shop/files/h2-banner41_720x.jpg?v=1614392006",
            title: "men's collection"
        },
        {
            image: "https://elessi2.myshopify.com/cdn/shop/files/h2-banner3_720x.jpg?v=1614392001",
            title: "girls collection"
        },
    ];

    return (
        <>
            {collectionPoster.map((item, index) => (
                <div className="collection-section" key={index}>
                    {index % 2 === 0 ? (
                        <>
                            <CollectionPoster image={item.image} title={item.title} />
                            <CollectionCards title={item.title} />
                        </>
                    ) : (
                        <>
                            <CollectionCards title={item.title} />
                            <CollectionPoster image={item.image} title={item.title} />
                        </>
                    )}
                </div>
            ))}
        </>
    );
}