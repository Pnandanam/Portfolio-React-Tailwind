import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
