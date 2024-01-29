// Require
import Image from "next/image";

// Icons
import { Play, Volume2, Maximize } from "lucide-react";

export default function VideoPlayer() {
  return (
    <div className="group relative">
      <Image
        src={"/demo.jpg"}
        height={400}
        width={400}
        className="max-h-[350px] w-full object-cover md:max-h-[600px] md:rounded-xl"
      />
      <div className="absolute bottom-0 left-0 hidden w-full flex-row items-center gap-4 bg-opacity-85 bg-gradient-to-t from-black to-transparent p-4 group-hover:flex">
        <Play
          size={30}
          className="cursor-pointer text-white hover:text-red-500"
        />
        <div className="relative h-1 w-full rounded-lg bg-textSecondary">
          <div className="absolute left-0 h-1 w-[50%] bg-red-500"></div>
          <div className="absolute top-[-30px] ml-[50%] text-white">3.25</div>
        </div>
        <span className="text-white">8:36</span>
        <Volume2
          size={30}
          className="cursor-pointer text-white hover:text-red-500"
        />
        <Maximize
          size={30}
          className="cursor-pointer text-white hover:text-red-500"
        />
      </div>
    </div>
  );
}
