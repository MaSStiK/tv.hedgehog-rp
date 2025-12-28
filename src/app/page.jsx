import AboutProject from "@/components/AboutProject/AboutProject"
import AllSeasons from "@/components/Season/AllSeasons"
export const metadata = {
    title: "Ежиное Телевидение"
}

// Главная страница
export default function Home() {
    return (
        <>
            <AboutProject />
            <AllSeasons />
        </>
    )
}
