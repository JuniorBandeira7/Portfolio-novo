import Navbar from "@/components/ui/Navbar";
import SideMenu from "@/components/ui/SideMenu";
import Apresentation from "@/components/ui/Apresentation";
import About from "@/components/ui/About";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";

export default function Home() {
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <SideMenu />

      {/* Navbar Section */}
      <section>
        <span id="top"></span>
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

        {/* Experience Section */}
        <section className="">
          <span id="experiencia"></span>
          <Experience />
        </section>

        {/* Projects Section */}
        <section className="">
          <span id="projetos"></span>
          <Projects />
        </section>

        {/* Contato Section */}
        <section className="">
          <span id="contato"></span>
          <div className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Contato</h2>
            <p className="text-gray-600">Em breve...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
