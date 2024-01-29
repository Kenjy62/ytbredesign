"use client";

// Components
import Divider from "@/components/UI/Divider";
import VideoPlayer from "@/components/Video/VideoPlayer";
import Rightbar from "@/components/Rightbar";
import VideoDetails from "@/components/Video/VideoDetails";
import Comments from "@/components/Comment/Comments";

// Required
import PerfectScrollbar from "react-perfect-scrollbar";

// Style
import "react-perfect-scrollbar/dist/css/styles.css";
import VideoInformations from "@/components/Video/VideoInformations";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:p-8">
      <div className="flex h-[calc(100dvh-75px)] w-full flex-col gap-6 pb-6 md:h-[calc(100dvh-130px)]">
        <PerfectScrollbar>
          <div className="flex flex-col gap-6 md:mr-6">
            <VideoPlayer />
            <VideoInformations />
            <Divider />
            <VideoDetails />
            <Divider />
            <Comments />
          </div>
        </PerfectScrollbar>
      </div>
      <Rightbar />
    </div>
  );
}
