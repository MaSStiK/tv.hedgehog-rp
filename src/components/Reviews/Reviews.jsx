import Image from "next/image"
import reviews from "./reviews.js"
import imgReviewStar from "@/assets/reviews/review-star.png"

import "./Reviews.css"

export default function Reviews() {
    return (
        <>
            <hr />
            <section className="reviews">
                <h2>Отзывы с премии ЛеФильм</h2>
                <div className="flex-col gap-medium">
                    {reviews.map((item, i) => (
                        <div className="flex-row review" key={i}>
                            <Image
                                className="review__image"
                                src={item.imageUrl}
                                alt={item.name}
                                width={64}
                                height={64}
                            />
                            <div className="flex-col gap-tiny">
                                <div className="flex-row">
                                    <p className="h3">{item.name}</p>
                                    <div className="flex-row review__rating">
                                        <Image
                                            src={imgReviewStar}
                                            alt="Звезда"
                                        />
                                        <p className="h3">10</p>
                                    </div>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
