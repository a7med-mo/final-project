import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavBar from "../navBar/NavBar";


export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <header className={`px ${isFixed ? 'fixed' : ''}`}>
                <Logo />
                <NavBar />
            </header>
        </>
    )
}
