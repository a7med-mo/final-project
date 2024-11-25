/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import StarRating from "../../StarRating/StarRating";
import { axiosConfig } from "../../../utils/axiosConfig";
import { useParams } from "react-router-dom";


const calculateRatingsPercentage = (product) => {

    const totalReviews = product?.reviews?.length || 0;

    if (totalReviews === 0) {
        return [0, 0, 0, 0, 0];
    }

    const ratingsCount = [0, 0, 0, 0, 0];
    product?.reviews?.forEach((review) => {
        const quality = review?.quality;
        if (quality >= 1 && quality <= 5) {
            ratingsCount[5 - quality]++;
        }
    });

    const ratingsPercentage = ratingsCount.map(
        (count) => (count / totalReviews) * 100
    );

    return ratingsPercentage;
};


const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;

    const totalRatings = reviews.reduce((sum, review) => {
        const rating = review?.quality;
        return rating ? sum + rating : sum;
    }, 0);
    const averageRating = totalRatings / reviews.length;

    return averageRating;
};

const FullReviews = ({ product }) => {
    const averageRating = calculateAverageRating(product?.reviews);
    const ratingsPercentage = calculateRatingsPercentage(product);

    const { id } = useParams();

    useQuery({
        queryKey: ['product', id, averageRating],
        queryFn: () =>
            axiosConfig({
                method: 'patch',
                url: `/products/${id}`,
                data: { rating: averageRating.toFixed(1) }, 
            }),
        enabled: !!id && !!averageRating,
        onSuccess: (data) => {
            console.log('Rating updated successfully:', data);
        },
        onError: (error) => {
            console.error('Error updating rating:', error);
        },
    });

    return (
        <div className="section-full-reviews">
            <div className="box-full-reviews">
                <h2>{averageRating.toFixed(1)}</h2>
                <StarRating rating={averageRating.toFixed(1)} totalStars={5} />
                <p>({product?.reviews?.length} reviews)</p>
            </div>

            <div className="box-bars">
                {ratingsPercentage?.map((percentage, index) => (
                    <div key={index} className="box-rating-bar">
                        <div className="box-rating">
                            <StarRating rating={5 - index} totalStars={1} /> {5 - index}
                        </div>
                        <div className="bar">
                            <div
                                className="bar-fill"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                        <div className="box-number-reviews">
                            <span>{percentage.toFixed(0)}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullReviews;

