import Image from "next/image";
import Welcome from "./Component/Welcome";
import VerticalTech from "./Component/Skills";
import Education from "./Component/Education";
import Experience from "./Component/Experiance";
import Achievements from "./Component/Achievements";

export default function Home() {
  return (
    <div className="">
      <Welcome/>
      <VerticalTech/>
      <Education/>
      <Experience/>
      <Achievements/>
    </div>
  );
}
