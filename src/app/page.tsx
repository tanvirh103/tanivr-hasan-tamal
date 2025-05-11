import Welcome from "./Component/Welcome";
import Education from "./Component/Education";
import Experience from "./Component/Experiance";
import Achievements from "./Component/Achievements";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div className="">
      <Welcome/>
      {/* <VerticalTech/> */}
      <Education/>
      <Experience/>
      <Achievements/>
      <Projects/>
      <Footer/>
    </div>
  );
}
