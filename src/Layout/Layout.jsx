import { Outlet } from "react-router-dom";
import Header from "../components/Header/mainHeader/Header";
import MainFooter from "../components/Footer/MainFooter/MainFooter";



export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <MainFooter />
        </>
    )
}