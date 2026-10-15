import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Review from "./components/Review";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Review />
        <Price />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
