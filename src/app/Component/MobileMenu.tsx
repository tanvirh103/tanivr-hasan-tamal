import CloseSVG from "@/SVG/CloseSVG";
import {
  Github,
  LinkendIn,
  Mail,
  Facebook,
  CodeForces,
  Whatsapp,
} from "@/SVG/WelcomeSvg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MobileMenu({ setShow }: { setShow: any }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
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

  const handleClick = (event: any) => {
    router.push(event);
    setShow(false);
  };
  return (
    <div
      ref={modalRef}
      className="w-[270px] h-[calc(120vh)] bg-[#000000] backdrop-blur-[2px] fixed -top-5 right-0"
      style={{ zIndex: 50 }}
    >
      <div
        style={{ zIndex: "1" }}
        className={`transform transition-transform duration-500 ease-in-out bg-[#000000] rounded-r-[12px] p-2`}
      >
        <div className="flex justify-end mt-5">
          <div
            onClick={() => {
              setShow(false);
            }}
          >
            {" "}
            <CloseSVG />
          </div>
        </div>
        <div className="items-center text-center mt-6">
          <div className="border-[#28282B]  border-2 rounded-[8px] shadow-2xl font-[500] text-[16px] my-2 hover:shadow-2xl">
            <div onClick={() => handleClick("#Home")}>Home</div>
          </div>
          <div className="border-[#28282B]  border-2 rounded-[8px] shadow-2xl font-[500] text-[16px] my-2">
            <div onClick={() => handleClick("#Education")}>Education</div>
          </div>
          <div className="border-[#28282B]  border-2 rounded-[8px] shadow-2xl font-[500] text-[16px] my-2">
            <div onClick={() => handleClick("#Projects")}>Projects</div>
          </div>
          <div className="border-[#28282B]  border-2 rounded-[8px] shadow-2xl font-[500] text-[16px] my-2">
            <div onClick={() => handleClick("#Experience")}>Experience</div>
          </div>
          <div className="border-[#28282B]  border-2 rounded-[8px] shadow-2xl font-[500] text-[16px] my-2">
            <div onClick={() => handleClick("#Achievements")}>Achievements</div>
          </div>

          <div className="flex justify-center  gap-4 mt-12">
            <Link href={`https://github.com/tanvirh103`} target="_blank">
              <p>
                <Github />
              </p>
            </Link>
            <Link
              href={`https://www.linkedin.com/in/tanvirh103/`}
              target="_blank"
            >
              <p>
                <LinkendIn />
              </p>
            </Link>
            <Link href={`mailto:tanvirh103@gmail.com`} target="_blank">
              <p>
                <Mail />
              </p>
            </Link>
            <Link href={`https://www.facebook.com/tanvirh103/`} target="_blank">
              <p>
                <Facebook />
              </p>
            </Link>
            <Link
              href={`https://codeforces.com/profile/tanvirh103`}
              target="_blank"
            >
              <p>
                <CodeForces />
              </p>
            </Link>
            <Link href="https://wa.me/+8801534103985" target="_blank">
            <p>
              <Whatsapp width={20} height={20} />
            </p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
