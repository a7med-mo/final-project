import { Link } from "react-router-dom";
import { FaRegFaceSadTear } from "react-icons/fa6";
import HeaderPages from "../../components/HeaderPages/HeaderPages";


export default function Error() {
    return (
        <>
            <HeaderPages title="Error 404" link="" nameLink="home" />
            <div className="error-empty">
                <div className="box-icon">
                    <FaRegFaceSadTear className="icon" />
                </div>
                <h2>Oops! That page can’t be found.</h2>
                <p>
                    Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.
                </p>
                <Link to="/" className="btn">go to home</Link>
            </div>
        </>
    )
}
