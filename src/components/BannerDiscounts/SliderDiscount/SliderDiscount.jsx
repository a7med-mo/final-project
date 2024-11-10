


export default function SliderDiscount() {
    return (
        <>
            <div className="slider-discount">

                <div className="slider-discount-image" >
                    <img src="https://elessi2.myshopify.com/cdn/shop/products/5593394805_2_6_1_360x.jpg?v=1609388500" alt="" className="image-discount"/>
                    <img src="https://elessi2.myshopify.com/cdn/shop/products/5593394805_2_5_1_360x.jpg?v=1609388506" alt="" className="hover-image-discount"/>
                </div>
                <div className="slider-discount-content" >
                    <h2>Lorem ipsum dolor sit.</h2>
                    <h4><del>$126.50</del> $100</h4>

                    <div className="box-bar">
                        <div className="stock">
                            <span className="stock-available">Available: <strong>100</strong> </span>
                            <span className="stock-sold">Already Sold: <strong>150</strong></span>
                        </div>
                        <div className="bar">
                            <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="box-data">

                        <div className="box-day">
                            <span className="data-time">0</span>
                            <span>Days</span>
                        </div>
                        <div className="box-hour">
                            <span className="data-time">00</span>
                            <span>Hours</span>
                        </div>
                        <div className="box-minute">
                            <span className="data-time">00</span>
                            <span>mins</span>
                        </div>
                        <div className="box-second">
                            <span className="data-time">00</span>
                            <span>secs</span>
                        </div>

                    </div>

                    <button className="btn btn-discount">Shop Now</button>
                    
                </div>

            </div>
        </>
    )
}
