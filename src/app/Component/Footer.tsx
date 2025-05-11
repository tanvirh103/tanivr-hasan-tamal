import {
  Facebook,
  Github,
  LinkendIn,
  Mail,
  PhoneIcon,
  Whatsapp,
} from "@/SVG/WelcomeSvg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-1 border-[#1E1E1E]">
      <div className="pt-4 pb-4 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
    
            <div className="font-[600] text-[16px] md:text-[18px] lg:text-[20px]">
              Tanvir Hasan Tamal
            </div>
          </div>
          <div>
            <p className="font-[500] text-[16px]">Sent Email</p>
            <p className="font-[500] text-[14px] gap-1 flex items-center">
              <Mail />
              tanvirh103@gmail.com
            </p>
            <p className="font-[500] text-[14px] gap-1 flex items-center">
              <Mail />
              thasan103@yahoo.com
            </p>
          </div>
          <div>
            <p className="font-[500] text-[16px]">Make a call</p>
            <p className="font-[500] text-[14px] flex items-center gap-1">
              <PhoneIcon />
              +8801534103985
            </p>
            <p className="font-[500] text-[14px] flex items-center gap-1">
              <Whatsapp />
              <Link href={"https://wa.me/+8801534103985"} target="_blank">+8801534103985</Link>
            </p>
          </div>
          <div>
            <p className="font-[500] text-[16px]">Get in touch</p>
            <p className="font-[500] text-[14px]">Aftabnagar,Badda</p>
            <p className="font-[500] text-[14px]">Dhaka-1212</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#1E1E1E] py-1">
        <div className="pt-2 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
          <div className="flex justify-between">
            <div className="font-[500] text-[14px]">All Rights Reserved</div>
            <div>
              <div className="flex justify-end gap-6 items-center">
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
