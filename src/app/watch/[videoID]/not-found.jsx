import Error from "@/components/Error/Error"

// Эпизод не найден
export default function NotFound() {
    return (
        <main>
            <Error
                text="Эпизод не найден"
                statusCode="404"
            />
        </main>
    )
}