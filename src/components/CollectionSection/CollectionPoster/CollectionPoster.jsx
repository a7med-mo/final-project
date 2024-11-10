

// eslint-disable-next-line react/prop-types
export default function CollectionSection({ image, title }) {
    return (
        <>
            <div className="collection-section-poster">
                <div className="poster">
                    <img src={image} alt={title} />
                </div>
            </div>
        </>
    );
}

