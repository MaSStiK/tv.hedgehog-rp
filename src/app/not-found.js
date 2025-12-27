import Link from "next/link"

// Страница не найдена
export default function NotFound() {
    return (
        <>
            <h2>Ошибка 404</h2>
            <h3>Страница не найдена</h3>
            <Link className="button green" href="/">На главную</Link>
        </>
    )
}