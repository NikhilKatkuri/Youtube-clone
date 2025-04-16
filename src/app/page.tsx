"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useScreenContext } from "@/context/ScreenContext";

export default function Page() {
  const { isSidebar } = useScreenContext();
  return (
    <div id="main" className="home-area-grid h-screen w-screen">
      <header className="home-navbar h-full w-full bg-white">
        <Navbar />
      </header>
      <div className="home-body"></div>

      {isSidebar && <Sidebar />}
    </div>
  );
}
