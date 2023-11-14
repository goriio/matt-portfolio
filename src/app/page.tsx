import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Home } from "@/components/Home";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
