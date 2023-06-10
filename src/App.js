import Contact from "./components/Contact";
import Contact_01 from "./components/Contact_01";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Intro_02 from "./components/Intro_02";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServicesMore from "./components/ServicesMore";

function App() {
  return (
    <>
      <Navbar/>
      <Introduction id="home"/>
      <Intro_02 id="about"/>
      <Services id="services"/>
      <ServicesMore id="portfolio"/>
      <Contact_01/>
      <Feedback/>
      <Contact id="contact"/>
      <Footer/>
    </>
  );
}

export default App;
