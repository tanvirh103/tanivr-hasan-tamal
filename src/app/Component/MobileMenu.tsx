import { useEffect, useRef } from "react";

export default function MobileMenu({setShow}:{setShow:any}){
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShow(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [setShow]);
    return(
        <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#000000] backdrop-blur-[2px] fixed -top-5 right-0 z-40">
            <div
        ref={modalRef}
        style={{ zIndex: "1" }}
        className={`transform transition-transform duration-500 ease-in-out ${
           "-translate-x-full"
        } w-[260px] h-[calc(100vh)] bg-[#000000] rounded-r-[12px] `}
      >
            <div className="w-[300px] border shadow-2xl rounded-[8px] font-[500] text-[16px]">Home</div>
            <div className="w-[300px] border shadow-2xl font-[500] text-[16px]">Projects</div>
            </div>
        </div>
    )
}