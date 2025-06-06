/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* Add other components here as needed */}
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
    </>
  )
};
export default App;
