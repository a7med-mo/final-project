import { MdKeyboardArrowRight } from "react-icons/md";
import Cards from "../Cards/Cards";


export default function ProductShop() {
    return (
        <>
            <div className="card-broduct-shop px">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

            <div className="pagination-page">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <MdKeyboardArrowRight />
            </div>
        </>
    )
}
