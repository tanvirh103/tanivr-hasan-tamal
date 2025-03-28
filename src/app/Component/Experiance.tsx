export default function Experience() {
  return (
    <div className="pt-6 pb-6 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
      <div className="items-center text-center pt-4">
        <p className="text-[40px] font-[600] text-[#8dced0]">Experiance</p>
        <p className="text-[24px] font-[600] ">
          Combining hand - on industry experiance and volunteer experience
        </p>
      </div>
      <div>
        <p className="font-[600] text-[24px]">Work Experience</p>
      </div>
      <div className="pt-6 pb-6 w-full">
        <div
          className="bg-[#81baff] rounded-full w-5 h-5"
          style={{ zIndex: 115 }}
        ></div>
        <div className="border-l-2 border-l-inherit h-36 mx-2">
          <div className="-mt-[22px] w-[600px]">
            <p className="font-[500] text-[20px] ml-4 ">Deep Chain Labs</p>
            <p className="font-[500] text-[16px] ml-4">
              Software Engineer Trainee October 2024 - February 2025 (Remote)
            </p>
            <p className="font-[500] text-[16px] ml-4">
              {" "}
              - Developed and delivered full-stack solutions for
              'Kazentic',enhancing user experience and system performance.
            </p>
            <p className="font-[500] text-[16px] ml-4">
              - Engineered dynamic front-end features for 'Trading Bot,'
              significantly improving responsiveness and usability.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-[600] text-[24px]">Volunteer Experience</p>
      </div>
    </div>
  );
}
