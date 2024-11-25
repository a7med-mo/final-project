/* eslint-disable react/prop-types */

import FullReviews from '../FullReviews/FullReviews';
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import { useQuery } from '@tanstack/react-query';
import { axiosConfig } from '../../../utils/axiosConfig';
import { useParams } from 'react-router-dom';

export default function Reviews() {
    const { id } = useParams();

    const { data, refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: () => axiosConfig({
            method: 'get',
            url: `/products/${id}`,
        }),
        refetchOnWindowFocus: false,
    });

    return (
        <div className="box-reviews px">
            <FullReviews product={data?.data} />
            <AddComment refetchReviews={refetch} />
            <Comment product={data?.data} />
        </div>
    );
}
