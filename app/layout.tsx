import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import CopyRight from "./_components/copy-right";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "桝井真太郎のポートフォリオサイトへようこそ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`$inter.className bg-black text-white`}>
          <div className="max-w-7xl m-auto">
            <header>
              <Nav/>
            </header>
            <main>
              {children}
            </main>
            <footer>
              <CopyRight/>
            </footer>
          </div>
      </body>
    </html>
  );
}
