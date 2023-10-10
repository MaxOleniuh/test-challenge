"use client";
import SideBar from "@/components/SideBar";
import NavBar from "../components/NavBar";
import CustomFont from "next/font/local";
import Main from "@/components/Main";

const cfont = CustomFont({
  src: "../public/fonts/static/Teko-Medium.ttf",
  variable: "--font-cfont",
});

export default function Home() {
  return (
    <div className={`${cfont.variable}`}>
      <NavBar />
      <SideBar />
      <Main />
    </div>
  );
}
