import Link from "next/link"

// Эпизод не найден
export default function NotFound() {
    return (
        <>
            <h2>Ошибка 404</h2>
            <h3>Эпизод не найден</h3>
            <Link className="button green" href="/">На главную</Link>
        </>
    )
}