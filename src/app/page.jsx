import AllSeasons from "@/components/Season/AllSeasons"
export const metadata = {
    title: "Ежиное Телевидение"
}

// Главная страница
export default function Home() {
    return (
        <>
            <h2>О нас</h2>
            <AllSeasons />
        </>
    )
}
