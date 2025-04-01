import { AchievementsContent } from "../Content/Achievements";


export default function Achievements() {
  return (
    <div className="mt-6 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
      <div className="items-center text-center pt-4">
        <p className="text-[24px] md:text-[36px] lg:text-[40px] font-[600] text-[#8dced0]">Achievements</p>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[600] ">Combining academic knowledge</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] gap-4 pt-6 pb-6 w-full">
                {AchievementsContent.Award.map((exp, index) => (
                  <div
                    key={index}
                   className="bg-gradient-to-tl from-[#243238] to-[#1e252d] via-[#1e292b] rounded-[8px] p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-in-out"
                  >
                    <p className="font-[500] text-[14px] md:text-[16px] lg:text-[20px] pb-2">
                      {exp.title}
                    </p>
                    <p className="font-[500] text-[12px] md:text-[14px] lg:text-[16px]">
                      {exp.date}
                    </p>
                    <p className="font-[500] text-[12px] md:text-[14px] lg:text-[16px]">
                      {exp.describtion}
                    </p>
                  </div>
                ))}
            </div>
    </div>
  );
}
