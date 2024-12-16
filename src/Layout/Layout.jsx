import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/mainHeader/Header";
import MainFooter from "../components/Footer/MainFooter/MainFooter";

export default function Layout() {
    
    const location = useLocation();
    const isCheckoutPage = location.pathname === "/checkout";
    const isLogInPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    return (
        <>
            {!isCheckoutPage && <Header />}
            <Outlet />
            {!isCheckoutPage && !isLogInPage && !isRegisterPage && <MainFooter />}
        </>
    );
}
