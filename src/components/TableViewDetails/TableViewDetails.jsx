/* eslint-disable react/prop-types */

export default function TableViewDetails({ product }) {
    return (
        <table className="table-details">
            <tbody>
                <tr>
                    <td className="td-title">name</td>
                    <td>{product?.name}</td>
                </tr>

                <tr>
                    <td className="td-title">price</td>

                    {product?.discount > 0 ? (
                        <td className="td-price">
                            <del className="price-discount">${product?.price.toFixed(2)}</del>
                            ${product?.price.toFixed(2) - (product.price * product?.discount / 100)}
                        </td>
                    ) : (
                        <td>{product?.price.toFixed(2)}</td>
                    )}
                    

                </tr>

                <tr>
                    <td className="td-title">brand</td>
                    <td>{product?.brand}</td>
                </tr>

                <tr>
                    <td className="td-title">type</td>
                    <td>{product?.type}</td>
                </tr>
                
                <tr>
                    <td className="td-title">Color</td>
                    <td>
                        {product?.colors?.map((color, index) =>
                            `${color?.colorName}${index !== product?.colors.length - 1 ? ', ' : ''}`
                        )}
                    </td>
                </tr>

                <tr>
                    <td className="td-title">Size</td>
                    <td>{product?.sizes?.join(', ')}</td>
                </tr>
            </tbody>
        </table>
    );
}
