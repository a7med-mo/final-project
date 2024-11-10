// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import SlideBanner from '../SlideBanner/SlideBanner';


export default function Banner() {

    const dataSlider = [
        {
            id: 1,
            img: 'https://elessi2.myshopify.com/cdn/shop/files/slider02_1296x.jpg?v=1614392001',
            title: 'NEW FASHION',
            subtitle: 'Spring Summer Collection',
            
        },
        
        {
            id: 2,
            img: 'https://elessi2.myshopify.com/cdn/shop/files/h2-new-slider3_1296x.jpg?v=1621245725',
            title: 'ELESSI STORE',
            subtitle: 'autum & winter 2024',
        },

        {
            id: 3,
            img: 'https://elessi2.myshopify.com/cdn/shop/files/slider03_1296x.jpg?v=1614392001',
            title: 'ELESSI STORE',
            subtitle: 'Looking for the best price',
        }
    ]

    return (
        <>
            <div className="box-banner">
                <Swiper
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    rewind={true}
                    spaceBetween={30}
                    effect="fade" 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {dataSlider.map((item) => (
                        <SwiperSlide key={item.id}>
                            <SlideBanner
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </>
    )
}
