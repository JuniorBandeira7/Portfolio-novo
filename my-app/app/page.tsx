import Navbar from "@/components/ui/Navbar";
import SideMenu from "@/components/ui/SideMenu";
import Apresentation from "@/components/ui/Apresentation";
import About from "@/components/ui/About";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SideMenu />

      {/* Navbar Section */}
      <section>
        <Navbar />
      </section>

      {/* Main Content */}
      <main className="p-8">

        {/* Apresentation Section */}
        <section className="absolute h-screen w-full flex items-center justify-center top-0 left-0">
          <Apresentation />
        </section>

        {/* About Section */}
        <section className="mt-[100vh]">
          <span id="sobre"></span>
          <About />
        </section>
      </main>
    </div>
  );
}
