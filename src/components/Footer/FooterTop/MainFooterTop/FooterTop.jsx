import Dropdown from "../../../Dropdown/Dropdown";
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

            
            <div className="footer-top-mobile px">
                <FooterContact />
                <Dropdown title="Useful links" propContent={<UsefulLinks />} />
                <Dropdown title="Get in touch" propContent={<GetInTouch />} />
                <Dropdown title="Newsletter signup" propContent={<NewsletterSignup />} />
            </div>
        </>
    )
}
