import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import PastServices from "./components/PastServices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PastServices />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
