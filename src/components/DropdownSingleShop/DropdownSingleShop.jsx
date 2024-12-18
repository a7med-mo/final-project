
import CustomTap from "../Custom/CustomTap";
import Dropdown from "../Dropdown/Dropdown";
import Reviews from "../Reviews/MainReviews/Reviews";
import TableViewDetails from "../TableViewDetails/TableViewDetails";


// eslint-disable-next-line react/prop-types
export default function DropdownSingleShop({product}) {
    return (
        <>
            
            <div className="box-dropdown-single-shop py">
                <Dropdown title="Additional Information" propContent={<TableViewDetails product={product}/>}/>
                <Dropdown title={"custom tab"} propContent={<CustomTap />}/>
                <Dropdown title="Reviews" propContent={<Reviews product={product}/>}/>
            </div>

        </>
    )
}
