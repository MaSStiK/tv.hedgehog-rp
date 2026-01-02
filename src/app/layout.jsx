import { montserrat, _metadata, _viewport } from "@/components/metadata"
import Header from "@/components/Header/Header"
import "./styles/app.css"
import "./styles/app-phone.css"
import "./styles/style.css";

export const metadata = _metadata
export const viewport = _viewport

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
