// import HomeContent from "@/src/components/home/HomeContent";
// import LeftSidebar from "@src/components/home/LeftSidebar";
// import RightSidebar from "src@/components/home/RightSidebar";

import HomeContent from "@/components/home/HomeContent";
import LeftSidebar from "@/components/home/LeftSidebar ";
import RightSidebar from "@/components/home/RightSidebar";

const HomePage = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

      {/* Left Sidebar */}
      <aside>
        <LeftSidebar />
      </aside>

      {/* Home Content */}
      <section className="md:col-span-2">
        <HomeContent />
      </section>

      {/* Right Sidebar */}
      <aside>
        <RightSidebar />
      </aside>

    </main>
  );
};

export default HomePage;