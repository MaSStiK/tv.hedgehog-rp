import { Montserrat } from "next/font/google";

import "./app.css"; 
import "./styles/style.css";
import Header from "@/components/header/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Ежиное Телевидение",
    description: "Лучшая альтернатива ютубу",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Header />
                
                <article>
                    {children}
                </article>
            </body>
        </html>
    );
}
