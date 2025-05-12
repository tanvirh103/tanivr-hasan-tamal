"use client";
import {
  Facebook,
  Github,
  LinkendIn,
  Mail,
  MobileMenuIcon,
} from "@/SVG/WelcomeSvg";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#000000] max-w-full">
      <div className="flex justify-between items-center px-2 max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto pt-4 pb-4">
        <div className="flex justify-start">
          <p className="font-[600] text-[24px]">Tanvir Hasan Tamal</p>
        </div>

        <div className="hidden lg:flex justify-center gap-12">
          {["Home", "Education", "Projects", "Experience", "Achievements"].map(
            (item) => (
              <Link key={item} href={`#${item}`}>
                <p className="font-[500] text-[16px] hover:text-[#81baff]">
                  {item}
                </p>
              </Link>
            )
          )}
        </div>

     
        <div className="hidden lg:flex justify-end gap-6">
          <Link href={`https://github.com/tanvirh103`} target="_blank">
            <Github />
          </Link>
          <Link
            href={`https://www.linkedin.com/in/tanvirh103/`}
            target="_blank"
          >
            <LinkendIn />
          </Link>
          <Link href={`mailto:tanvirh103@gmail.com`}>
            <Mail />
          </Link>
          <Link href={`https://www.facebook.com/tanvirh103/`} target="_blank">
            <Facebook />
          </Link>
        </div>

       
        <div className="block lg:hidden" onClick={() => setShowMenu(true)}>
          <MobileMenuIcon />
        </div>
      </div>

      {isShowMenu && <MobileMenu setShow={setShowMenu} />}
    </div>
  );
}
