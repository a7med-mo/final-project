import { Form, Formik } from "formik";
import WrapperField from "../../../WrapperField/WrapperField";


export default function NewsletterSignup() {
    return (
        <>
            <div className="newsletter-signup">
                <h2>Newsletter Signup</h2>
                <p>Subscribe to our newsletter to get the latest news and updates.</p>

                <Formik>
                    <Form className="newsletter-signup-form">
                        <WrapperField name="email" title="your Email Address" />
                        <button className="btn btn-primary">Subscribe</button>
                    </Form>
                </Formik>

                <div className="image-cards">
                    <img src="https://elessi2.myshopify.com/cdn/shop/files/payment-icons_180x.png?v=1614392572" alt="cards" />
                </div>
            </div>
        </>
    )
}
