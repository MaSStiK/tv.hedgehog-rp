import Error from "@/components/Error/Error"

// Страница не найдена
export default function NotFound() {
    return (
        <main>
            <Error
                text="Страница не найдена"
                statusCode="404"
            />
        </main>
    )
}