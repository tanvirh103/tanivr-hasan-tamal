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
    <footer className="border-t border-[#1E1E1E]">
      <div className="pt-4 pb-4 max-w-[1560px] mx-auto px-4 2xl:px-12 lg:px-8 flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
        {/* Name */}
        <div className="flex-1">
          <div className="font-[600] text-[16px] md:text-[18px] lg:text-[20px]">
            Tanvir Hasan Tamal
          </div>
        </div>

        {/* Emails */}
        <div className="flex-1">
          <p className="font-[500] text-[16px]">Sent Email</p>
          <p className="font-[500] text-[14px] flex items-center gap-1">
            <Mail />
            tanvirh103@gmail.com
          </p>
          <p className="font-[500] text-[14px] flex items-center gap-1">
            <Mail />
            thasan103@yahoo.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex-1">
          <p className="font-[500] text-[16px]">Make a call</p>
          <p className="font-[500] text-[14px] flex items-center gap-1">
            <PhoneIcon />
            +8801534103985
          </p>
          <p className="font-[500] text-[14px] flex items-center gap-1">
            <Whatsapp />
            <Link href="https://wa.me/+8801534103985" target="_blank">
              +8801534103985
            </Link>
          </p>
        </div>

        {/* Address */}
        <div className="flex-1">
          <p className="font-[500] text-[16px]">Get in touch</p>
          <p className="font-[500] text-[14px]">Aftabnagar, Badda</p>
          <p className="font-[500] text-[14px]">Dhaka-1212</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E1E1E] py-2">
        <div className="max-w-[1560px] mx-auto px-4 2xl:px-12 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-[500] text-[14px] text-center sm:text-left">
            All Rights Reserved
          </div>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/tanvirh103" target="_blank">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tanvirh103/"
              target="_blank"
            >
              <LinkendIn />
            </Link>
            <Link href="mailto:tanvirh103@gmail.com">
              <Mail />
            </Link>
            <Link href="https://www.facebook.com/tanvirh103/" target="_blank">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
