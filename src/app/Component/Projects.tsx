import { Github, RedirectPage } from "@/SVG/WelcomeSvg";
import { ProjectContent } from "../Content/ProjectContent";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-6 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
      <div className="items-center text-center pt-4">
        <p className="text-[24px] md:text-[36px] lg:text-[40px] font-[600] text-[#8dced0]">
          Projects
        </p>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[600] ">
        Combining academic insight with practical implementation
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] gap-4 pt-6 pb-6 w-full">
        {ProjectContent.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-tl from-[#243238] to-[#1e252d] via-[#1e292b] rounded-[8px] p-6"
          >
            <p className="flex items-center gap-2 font-[500] text-[14px] md:text-[16px] lg:text-[20px]">
              {item.title}
              <span className="w-[36px] h-[36px] rounded-[8px] border-[#537177] items-center flex justify-center hover:border-1 ">
                <Link href={item.github}><Github width={28} height={28}/> </Link>
              </span>
            </p>
            <div className="flex gap-2 flex-wrap mt-4">
            {item.skills.map((skill, index) => (
                <div key={index} className="bg-[#3c545e] rounded-[8px] flex items-center justify-start px-2 py-2">
                <p className="text-[14px] font-[500]">{skill}</p>
                </div>
            ))}
            </div>
            <p className="font-[500] text-[12px] md:text-[14px] lg:text-[16px] mt-2">
                {item.description.length > 150
                ? `${item.description.slice(0, 150)}...`
                : item.description}
                {/* {item.description.length > 200 ? (
                  <>
                    {item.description.slice(0, 200)}...
                    <button
                      className="text-blue-500 ml-2"
                      onClick={() => {
                        const fullDescription = document.getElementById(`desc-${index}`);
                        if (fullDescription) {
                          fullDescription.style.display = "block";
                        }
                        const seeMoreButton = document.getElementById(`see-more-${index}`);
                        if (seeMoreButton) {
                          seeMoreButton.style.display = "none";
                        }
                      }}
                      id={`see-more-${index}`}
                    >
                      See more
                    </button>
                    <span id={`desc-${index}`} style={{ display: "none" }}>
                      {item.description.slice(200)}
                    </span>
                  </>
                ) : (
                  item.description
                )} */}
            </p>
              
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center mt-6 mb-6">
        <p className="flex items-center font-[500] text-[14px] md:text-[16px] lg:text-[20px] w-[250px] h-auto rounded-full border-[#FFFFFF] border-[2px] px-8 py-2 gap-2">Show all projects <RedirectPage /></p>
      </div> */}
    </div>
  );
}
