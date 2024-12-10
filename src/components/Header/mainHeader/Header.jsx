import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavBar from "../navBar/NavBar";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setIsFixed(true);
                setIsHidden(currentScrollY > lastScrollY);
            } else {
                setIsFixed(false);
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    
    return (
        <>
        
        <header className={`header px ${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''}`}>
            <Logo />
            <NavBar />
            </header>
            <HeaderMobile />
        </>
    );
}

