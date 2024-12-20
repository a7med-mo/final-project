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
import { useQuery } from '@tanstack/react-query';
import { axiosConfig } from '../../../utils/axiosConfig';


export default function Banner() {

    const { data } = useQuery(
        {
            queryKey: ['cardsProducts'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/slider_data?`
            })
        }
    )

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
                    {data?.data?.map((item) => (
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
