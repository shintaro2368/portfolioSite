import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import CopyRight from "./_components/copy-right";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "shintaro portfolio",
  description: "桝井 真太郎(ますい しんたろう)のポートフォリオサイトへようこそ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* {1d1d1d} */}
      <body className={`${inter.className} bg-[#171717] text-[#efefef] select-none`}>
        <div className="max-w-7xl m-auto px-2">
          <header>
            <Nav />
          </header>
          <main className="min-h-[calc(100vh_-_176px)] py-10">
            {children}
          </main>
          <footer>
            <CopyRight />
          </footer>
        </div>
      </body>
    </html>
  );
}
