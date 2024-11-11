import FooterContact from "../FooterContact/FooterContact";
import GetInTouch from "../GetInTouch/GetInTouch";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import UsefulLinks from "../UsefulLinks/UsefulLinks";




export default function FooterTop() {
    return (
        <>
            <div className="footer-top px">

                <FooterContact />
                <UsefulLinks />
                <GetInTouch />
                <NewsletterSignup />

            </div>
        </>
    )
}
