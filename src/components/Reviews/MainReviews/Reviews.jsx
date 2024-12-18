import FullReviews from '../FullReviews/FullReviews';
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import { useQuery } from '@tanstack/react-query';
import { axiosConfig } from '../../../utils/axiosConfig';
import { useParams } from 'react-router-dom';

export default function Reviews() {
    const { id } = useParams();

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['review', id],
        queryFn: () => axiosConfig({
            method: 'get',
            url: `/products?id=eq.${id}&select=id,name,reviews`
        }),
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error fetching data</div>;
    }

    if (!data || !data.data || data?.data?.length === 0) {
        return <div>No reviews available</div>;
    }

    return (
        <div className="box-reviews px">
            <FullReviews product={data?.data[0]} />
            <AddComment refetchReviews={refetch} product={data?.data[0]} />
            <Comment product={data?.data[0]} />
        </div>
    );
}
