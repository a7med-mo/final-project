import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterContact() {
    return (
        <>
                <div className="footer-contact">
                    <div className="footer-logo">
                        <img src="https://elessi2.myshopify.com/cdn/shop/files/logo-retina_135x.png?v=1614391959" alt="footer-logo" />
                    </div>
                    <p>Calista Wise 7292 Dictum Av. Antonio, Italy.</p>
                    <p>(+01)-800-3456-88</p>
                    <p>contact@company.com</p>

                    <ul>
                        <li>
                            <Link>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaXTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaPinterestP />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FaTiktok />
                            </Link>
                        </li>
                    </ul>
                </div>
        </>
    )
}
