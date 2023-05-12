import React from 'react'
import "./Reviews.css";
import { SubHeading } from '../../components';
import { data } from "../../constants";
import { FaQuoteLeft } from "react-icons/fa";

const Card = ({ review: { imgUrl, name, review } }) => (
    <div className="app__review-card">
        <div className="card-review">
            <div className="app__review-card_content">
                <div className='img-quote'>
                    <img src={imgUrl} alt="review" />
                    <FaQuoteLeft className='quote' />
                </div>
                <h1 className="app__review-name">{name}</h1>
            </div>

            <h3 className="app__review-review">{review}</h3>
        </div>
    </div>
);
const Reviews = () => {
    return (
        <div className="app__review app__bg flex__center section__padding">
            <div className="app__review-h1">
                <SubHeading title="Reviews" />
                <h1 className='headtext__cormorant'>
                    What Customers Say
                </h1>
            </div>

            <div className="app__review-p flex__center">
                <p className="p__opensans">
                    We believe that customer reviews are an important way to measure our success and identify areas where we can improve. By sharing your thoughts with us, you help us to better understand what we're doing well and where we can make changes to serve you better.
                </p>
            </div>

            <div className="app__review-cards">
                {data.reviews.map((review) => (
                    <Card review={review} key={review.name} />
                ))}
            </div>
        </div>
    )
}

export default Reviews