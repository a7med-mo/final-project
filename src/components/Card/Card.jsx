
import { GrView } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";





export default function Card() {
    return (
        <>
            <div className="box-card">
                
                <div className="btn-card">
                    <button ><IoMdHeartEmpty /></button>
                    <button><GrView /></button>
                </div>
                
                <div className="box-image-card">
                    <img src="../../../public/assets/images/imageCard1.jpg" alt="item" className="image-card" />
                    <img src="../../../public/assets/images/hImageCard1.jpg" alt="item" className="hover-image-card"/>
                </div>

                <div className="box-content-card">
                    <h3>Short Sleeve Dress</h3>
                    <h4>$24.00</h4>
                </div>

                <div className="box-color">
                    <ul>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
