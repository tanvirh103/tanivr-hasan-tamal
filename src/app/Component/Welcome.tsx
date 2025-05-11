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
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 flex flex-col lg:flex-row mt-8 items-center justify-center lg:justify-between">
      <div className="my-auto">
        <div className="text-center lg:text-left">
          <p className="font-[600] text-[20px] md:text-[24px] lg:text-[28px]">
            {WelcomeContent.WelcomeMessage}
          </p>
          <p className="font-[600] text-[24px] md:text-[36px] lg:text-[] text-[#8dced0]">
            {WelcomeContent.Name}
          </p>
          <Link 
            href="/Resume_of_Tanvir_Hasan_Tamal.pdf" 
            target="_blank"
            className="relative inline-block gap-2 rounded-[16px] border-[#FFFFFF] border-[2px] shadow-md text-[16px] font-[500] px-2 py-2 cursor-pointer"
          >
            <p className="flex items-center text-center gap-2">
              Read My Resume
              <RedirectPage />
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
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
        <div className="flex justify-end">
          <p
            className="text-[18px] font-[500] text-center lg:text-left w-[450px]"
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
