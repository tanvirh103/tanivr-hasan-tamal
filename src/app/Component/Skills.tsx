import Marquee from "react-fast-marquee";
import HorizontalTech from "./HorizontalTech";
import RightSide from "./RightSide";

export default function VerticalTech() {
  return (
    <div className="pt-8 pb-8 max-w-full">
      <div className="items-center text-center">
        <p className="text-[24px] md:text-[36px] lg:text-[40px] font-[600] text-[#8dced0]">
          Skills & Tech Stacks
        </p>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[500]">
          Fueling Creativity with Cutting-Edge Tools
        </p>
      </div>
      <div className="pt-14">
        <Marquee
          pauseOnHover
          gradientWidth={100}
          gradient
          gradientColor="#020202"
          speed={40}
        >
          <HorizontalTech />
        </Marquee>
        <Marquee
          direction="right"
          className="mt-14"
          pauseOnHover
          gradientWidth={100}
          gradient
          gradientColor="#020202"
          speed={40}
        >
          <RightSide />
        </Marquee>
      </div>
    </div>
  );
}
