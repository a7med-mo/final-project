import { motion, AnimatePresence } from "framer-motion";


// eslint-disable-next-line react/prop-types
export default function SlideBanner({ id, img, title, subtitle }) {
    return (
        <AnimatePresence mode="wait">
            <div className="banner">
                <div className="banner-image" >
                    <motion.img
                        key={id}
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -80, opacity: 0 }} 
                        transition={{ duration: 1.5 }}
                        src={img}
                        alt=""
                    />
                </div>
                <motion.div 
                    key={id}
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 60, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="banner-contant"
                >
                    <h4>{title}</h4>
                    <h2>{subtitle}</h2>
                    <button className="btn">Shop Now</button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}



