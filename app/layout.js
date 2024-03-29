import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Card from "@/components/Card";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasmeet Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Projects />
        {children}
      </body>
    </html>
  );
}
