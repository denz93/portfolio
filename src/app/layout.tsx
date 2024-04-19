import type { Metadata } from "next";
import { Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Nhan Bach - Portfolio",
  description: "True Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula" className="scroll-smooth">
      <body className={comfortaa.className + " scroll-smooth bg-base-100"}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
