import { Facebook, Github, LinkendIn, Mail } from "@/SVG/WelcomeSvg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-1">
      <div className="pt-2 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
        <div className="flex justify-between">
          <div className="font-[600] text-[20px] md:text-[24px] lg:text-[28px]">
            Tanvir Hasan Tamal
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-[18px] lg:text-[20px]">
              Sent Email
            </p>
            <p className="font-[500] text-[14px] lg:text-[16px]">
              tanvirh103@gmail.com
            </p>
            <p className="font-[500] text-[14px] lg:text-[16px]">
              thasan103@yahoo.com
            </p>
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-[18px] lg:text-[20px]">
              Make a call
            </p>
            <p className="font-[500] text-[14px] lg:text-[16px]">
              +8801534103985
            </p>
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-[18px] lg:text-[20px]">
              Get in touch
            </p>
            <p className="font-[500] text-[14px] lg:text-[16px]">
              Aftabnagar,Badda
            </p>
            <p className="font-[500] text-[14px] lg:text-[16px]">Dhaka-1212</p>
          </div>
        </div>
      </div>
      <div className="border-t-1">
        <div className="pt-2 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
          <div className="flex justify-between">
            <div className="font-[600] text-[14px] md:text-[16px] lg:text-[20px]">
              All Rights Reserved
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
