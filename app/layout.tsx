import "../styles/globals.scss";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
    title: "URL Lab",
    description: "A URL shortener for the modern web",
};

import { Roboto_Mono } from "next/font/google";
const font = Roboto_Mono({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="waifudex">
            <Script src="https://kit.fontawesome.com/b3f869c97c.js"></Script>

            <body className={font.className}>
                <Header />
                <main className="pt-20 m-8 flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
