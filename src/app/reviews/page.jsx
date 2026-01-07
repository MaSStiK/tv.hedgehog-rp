import AboutProject from "@/components/AboutProject/AboutProject"
import Reviews from "@/components/Reviews/Reviews"

export default function ReviewsPage() {
    return (
        <main>
            <AboutProject withoutLink={true} />
            <Reviews />
        </main>
    )
}
