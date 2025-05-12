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
import RotatingMessage from "./Message";

export default function Welcome() {
  return (
    <div className="pt-4 pb-6 2xl:px-12 lg:px-8 max-w-full lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto flex flex-col lg:flex-row mt-8 items-center justify-center lg:justify-between">
      <div className="my-auto">
        <div className="text-center lg:text-left my-4">
          <RotatingMessage/>
          <p className="font-[600] text-[24px] md:text-[36px] lg:text-[36px] text-[#8dced0]">
            <span>{WelcomeContent.WelcomeMessage+" "}</span>{WelcomeContent.Name}
          </p>
          <Link
            href="/Resume_of_Tanvir_Hasan_Tamal.pdf"
            target="_blank"
            className="relative inline-block rounded-[16px] border-[#FFFFFF] border-[2px] shadow-md   cursor-pointer"
          >
            <div className="flex items-center text-center gap-2 px-2 py-2 text-[16px] font-[500]">
              Read My Resume
              <RedirectPage />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
        <div className="flex justify-end">
          <div className="w-full max-w-[300px] px-4">
            <Image
              className="rounded-[12px] w-full h-auto"
              src="/tanivr-hasan-tamal/tanvir.jpg"
              width={300}
              height={300}
              alt="Tanvir Hasan Tamal"
              unoptimized
              priority={true}
            />
          </div>
        </div>
        <div className="flex justify-end px-4">
          <p className="font-[600] text-[18px] md:text-[20px] lg:text-[24px]  my-4">
            About me
          </p>
        </div>
        <div className="flex justify-end px-4">
          <p
            className="text-[16px] md:text-[18px] lg:text-[18px] font-[500] text-center lg:text-left max-w-full md:w-[400px] sm:w-[370px] lg:w-[450px]"
            dangerouslySetInnerHTML={{ __html: WelcomeContent.AboutMe }}
          ></p>
        </div>
        <div className="flex justify-end gap-4 mt-6 px-4">
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
