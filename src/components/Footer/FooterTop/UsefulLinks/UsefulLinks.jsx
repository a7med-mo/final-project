import { Link } from "react-router-dom";


export default function UsefulLinks() {
    return (
        <>
            <div className="useful-links">
                <h2>Useful links</h2>
                <ul>
                    <li>
                        <Link>Delivery Information</Link>
                    </li>
                    <li>
                        <Link>Terms & Condition</Link>
                    </li>
                    <li>
                        <Link>Customer Service</Link>
                    </li>
                    <li>
                        <Link>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link>Search Terms</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
