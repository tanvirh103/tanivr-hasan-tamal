import Image from "next/image";
import Welcome from "./Component/Welcome";

export default function Home() {
  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
      <Welcome/>
    </div>
  );
}
