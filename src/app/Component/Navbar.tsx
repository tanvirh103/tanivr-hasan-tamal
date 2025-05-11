"use client";
import {
  Facebook,
  Github,
  LinkendIn,
  Mail,
  MobileMenuIcon,
} from "@/SVG/WelcomeSvg";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);
  const [isShowMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsShowSideMenu(true);
    } else {
      setIsShowSideMenu(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#000000]">
      <div className="flex justify-between items-center px-4 2xl:px-12 lg:px-8 pt-4 pb-4 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto ">
        <div className="flex justify-start">
          <p className="font-[600] text-[24px]">Tanvir Hasan Tamal</p>
        </div>
        {!isShowSideMenu ? (
          <>
            <div className="flex justify-center gap-12">
              <Link href={'#Home'}>
              <p className="font-[500] text-[16px] hover:text-[#81baff]">
                Home
              </p>
              </Link>
              <Link href={'#Education'}>
              <p className="font-[500] text-[16px] hover:text-[#81baff]">
                Education
              </p>
              </Link>
              <Link href={'#Projects'}>
              <p className="font-[500] text-[16px] hover:text-[#81baff]">
                Projects
              </p>
              </Link>
              <Link href={'#Experience'}>
              <p className="font-[500] text-[16px] hover:text-[#81baff]">
              Experience
              </p>
              </Link>
              <Link href={'#Achievements'}>
              <p className="font-[500] text-[16px] hover:text-[#81baff]">
                Achievements
              </p>
              </Link>
            </div>
            <div className="flex justify-end gap-6">
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
              <Link href={`mailto:tanvirh103@gmail.com`}>
                <p>
                  <Mail />
                </p>
              </Link>
              <Link
                href={`https://www.facebook.com/tanvirh103/`}
                target="_blank"
              >
                <p>
                  <Facebook />
                </p>
              </Link>
            </div>
          </>
        ) : (
          <div
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MobileMenuIcon />
          </div>
        )}
      </div>
      {isShowMenu && <MobileMenu setShow={setShowMenu} />}
    </div>
  );
}
