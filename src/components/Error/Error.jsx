import Link from "next/link"
import "./Error.css"

export default function Error({ statusCode="404", text="" }) {
    return (
        <div className="flex-col error">
            <h2>Ошибка {statusCode}</h2>
            <h3>{text}</h3>
            <Link className="button green" href="/">На главную</Link>
        </div>
    )
}
