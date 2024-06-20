'use client';

import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react"
import { Noto_Sans_JP } from "next/font/google";
import Footer from "./components/footer";
import "./styles/quiz.scss";


const noto = Noto_Sans_JP ({
    weight: ["400", "700", "900"],
    style: "normal",
    subsets: ["latin"],
})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ja">
            <Analytics />
            <body className={noto.className}>
                <RecoilRoot>
                    {children}
                </RecoilRoot>
                <Footer />
            </body>
        </html>
    );
}
