import Image from "next/image";
import { WelcomeContent } from "../Content/Welcome";
import {
  CodeForces,
  Facebook,
  Github,
  LinkendIn,
  Mail,
  RedirectPage,
} from "@/SVG/WelcomeSvg";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-8 md:items-center md:justify-center sm:items-center sm:justify-center">
      <div className="my-auto  w-[50%]">
        <div className="text-center lg:text-left">
          <p className="font-[600] text-[28px]">
            {WelcomeContent.WelcomeMessage}
          </p>
          <p className="font-[600] text-[40px] text-[#8dced0]">
            {WelcomeContent.Name}
          </p>
          <button className="flex gap-2 w-[180px] rounded-[16px] border shadow-md text-[16px] font-[500] px-4  py-2 cursor-pointer">
            Connect with me
            <p className="mt-2">
              {" "}
              <RedirectPage />
            </p>
          </button>
        </div>
      </div>
      <div className="w-[50%] mt-5 lg:mt-0">
        <div className="flex justify-end">
          <Image
            className="rounded-[12px]"
            src={"/Tanvir.jpg"}
            width={300}
            height={300}
            alt={"picture of tanvir hasan tamal"}
          />
        </div>
        <div className="flex justify-end">
          <p className="font-[600] text-[24px]  my-4 ">About me</p>
        </div>
        <div className="flex justify-end ">
          <p
            className="text-[18px] font-[500] flex justify-end"
            dangerouslySetInnerHTML={{ __html: WelcomeContent.AboutMe }}
          ></p>
        </div>
        <div className="flex justify-end gap-4 mt-6">
        <Link href={`https://github.com/tanvirh103`}>
          <p>
            <Github />
          </p>
          </Link>
          <Link href={`https://www.linkedin.com/in/tanvirh103/`}>
          <p>
            <LinkendIn />
          </p>
          </Link>
          <Link href={`mailto:tanvirh103@gmail.com`}>
          <p>
            <Mail />
          </p>
          </Link>
          <Link href={`https://www.facebook.com/tanvirh103/`}>
          <p>
            <Facebook />
          </p>
          </Link>
          <Link href={`https://codeforces.com/profile/tanvirh103`}>
          <p>
            <CodeForces />
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
