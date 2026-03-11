import { Header } from "./components/layouts/Header";
import { Hero } from "./components/sections/Hero";
import About from "./components/sections/About";
import Blog from "./components/sections/Blog";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { Footer } from "./components/layouts/Footer";

function App() {
  return (
      <>
        <Header />
          <main>
              <Hero />
              <About />
              <Blog />
              <Skills />
              <Projects />
              <Contact />
          </main>
        <Footer />
      </>
  );
}

export default App;