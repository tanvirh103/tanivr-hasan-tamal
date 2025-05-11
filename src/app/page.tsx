import Welcome from "./Component/Welcome";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Achievements from "./Component/Achievements";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div className="">
      <section id="Home">
      <Welcome/>
      </section>
      {/* <VerticalTech/> */}
      <section id="Education">
      <Education/>
      </section>
      <section id="Experience">
      <Experience/>
      </section>
      <section id="Achievements">
      <Achievements/>
      </section>
      <section id="Projects">
      <Projects/>
      </section>
      <Footer/>
    </div>
  );
}
