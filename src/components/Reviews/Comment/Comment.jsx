/* eslint-disable react/prop-types */
import { formatDistanceToNow } from 'date-fns';
import UserAvatar from '../../UserAvatar/UserAvatar';
import StarRating from '../../StarRating/StarRating';

export default function Comment({ product }) {
    return (
        <>
            {
                product?.reviews
                    ?.slice() // إنشاء نسخة من المصفوفة
                    .reverse() // عكس ترتيب النسخة
                    .map((review, i) => (
                        <div key={i} className="comment">
                            <div className="user-comment">
                                <UserAvatar name={review?.user} />
                                <h3>{review?.user}</h3>
                            </div>
                            <div className="box-rating-time">
                                <StarRating rating={review?.quality} className="star-rating" />
                                <span className="date-time">
                                    {
                                        review?.createdAt
                                            ? `(${formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })})`
                                            : 'تاريخ غير متوفر'
                                    }
                                </span>
                            </div>

                            <h2>{review?.title}</h2>
                            <p>{review?.comment}</p>
                        </div>
                    ))
            }
        </>
    );
}
