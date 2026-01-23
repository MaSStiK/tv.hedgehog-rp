import Image from "next/image"
import reviews from "./reviewsData.js"

import "./Reviews.css"

export default function Reviews() {
    return (
        <>
            <hr />
            <section className="reviews">
                <h2>Отзывы с премии ЛеФильм</h2>
                <div className="flex-col gap-5">
                    {reviews.map((item, i) => (
                        <div className="flex-row review" key={i}>
                            <Image
                                className="review__image"
                                src={item.imageUrl}
                                alt={item.name}
                                width={64}
                                height={64}
                            />
                            <div className="flex-col gap-2">
                                <div className="flex-row">
                                    <p className="h3">{item.name}</p>
                                    <div className="flex-row gap-1 review__rating">
                                        <Image
                                            src="/reviews/review-star.png"
                                            alt="Звезда"
                                            width={20}
                                            height={20}
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
