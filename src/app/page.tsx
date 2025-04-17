"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import FeedTypeVid from "@/components/ui/Feed-type-vid";
import { useScreenContext } from "@/context/ScreenContext";

export default function Page() {
  const { isSidebar } = useScreenContext();
  return (
    <div id="main" className="grid grid-rows-[56px_1fr] grid-cols-1 h-screen w-screen ">
      <header className="row-span-1 h-full w-full bg-white px-1 md:px-4">
        <Navbar />
      </header>
      <div className="row-span-2 relative w-full overflow-y-scroll h-full px-4">
        <header className="sticky top-0 h-[56px] w-full bg-white z-10"></header>
        <main
          className="min-h-screen w-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
                sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
                xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"
        >
          {[...Array(20)].map((_, i) => {
            return <FeedTypeVid key={i} loader  />;
          })}
        </main>
      </div>

      {isSidebar && <Sidebar />}
    </div>
  );
}
