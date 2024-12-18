// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Post from '../Post/Post';
import { useQuery } from '@tanstack/react-query';
import { axiosConfig } from '../../../utils/axiosConfig';


export default function Posts() {


    const { data } = useQuery(
        {
            queryKey: ['posts'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/post_data?`
            })
        }
    )

    console.log(data?.data);
    


    return (
        <>
            <div className="banner-posts">


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

                    {data?.data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Post item={item?.data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
