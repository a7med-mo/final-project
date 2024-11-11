import { Link } from "react-router-dom";

export default function FooterBottom() {
    return (
        <>
            <div className="bottom-footer px">
                <p>© 2024 The4 Studio - All Right reserved!</p>

                <ul>
                    <li>
                        <Link>Accessibility</Link>
                    </li>
                    <li>
                        <Link>about us</Link>
                    </li>
                    <li>
                        <Link>contact</Link>
                    </li>
                    <li>
                        <Link>blog</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
