import { Montserrat } from "next/font/google";

import "./app.css"; 
import "./app-phone.css"; 
import "./styles/style.css";
import Header from "@/components/Header/Header.jsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Ежиное Телевидение",
    description: "Лучшая альтернатива ютубу",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>
                <Header />
                
                <article>
                    {children}
                </article>
            </body>
        </html>
    );
}
