import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/mainHeader/Header";
import MainFooter from "../components/Footer/MainFooter/MainFooter";

export default function Layout() {
    
    const location = useLocation();
    const isCheckoutPage = location.pathname === "/checkout";

    return (
        <>
            {!isCheckoutPage && <Header />}
            <Outlet />
            {!isCheckoutPage && <MainFooter />}
        </>
    );
}
