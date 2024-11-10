import SliderDiscount from "../SliderDiscount/SliderDiscount";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


export default function BannerDiscounts() {
    return (
        <>
            <div className="banner-discounts">
                <div className="background py">
                    <img src="https://elessi2.myshopify.com/cdn/shop/files/h1-deal-bg_1296x.jpg?v=1621246411&quot" alt="background" />
                </div>
                <div className="section-banner">
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Pagination]}
                    >

                        <SwiperSlide>
                            <SliderDiscount />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderDiscount />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderDiscount />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </>
    )
}
