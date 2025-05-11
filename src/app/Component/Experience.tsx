import { Experiences } from "../Content/Experiance";

export default function Experience() {
  return (
    <div className="pt-6 pb-6 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
      <div className="items-center text-center pt-4">
        <p className="text-[24px] md:text-[36px] lg:text-[40px] font-[600] text-[#8dced0]">Experience</p>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[600] ">
          Combining hand - on industry experience and volunteer experience
        </p>
      </div>
      <div>
        <p className="font-[600] text-[24px]">Work Experience</p>
      </div>
      <div className="pt-6 pb-6 w-full">
        <div className="bg-[#81baff] rounded-full w-5 h-5 relative mt-6"></div>
        <div className="border-l-2 border-l-inherit h-44 mx-2">
          <div className="-mt-[22px] w-[700px]">
            <p className="font-[500] text-[20px] ml-4 ">Deepchain Labs</p>
            <p className="font-[500] text-[16px] ml-4 py-1">
              {" "}
              Software Engineer Trainee
            </p>
            <p className="font-[500] text-[16px] ml-4 py-1">
              {" "}
              - Built full-stack features for Kazentic, a multi-tenant SaaS platform combining project management, CRM, HRM, billing, and analytics
            </p>
            <p className="font-[500] text-[16px] ml-4 py-1">
              - Led backend development for Calendar and Teams modules and contributed to frontend integration across 10+ key modules including Payroll, Forms, and Organization Settings.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-[600] text-[24px]">Volunteer Experience</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] gap-4 pt-6 pb-6 w-full">
          {Experiences.VolunteerExp.map((exp, index) => (
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
