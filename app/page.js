"use client";

// Components
import Divider from "@/components/Divider";
import Player from "@/components/Video/Player";
import Rightbar from "@/components/Rightbar";
import Informations from "@/components/Video/Informations";
import Author from "@/components/Video/Author";
import Action from "@/components/Video/Action";

// Required
import PerfectScrollbar from "react-perfect-scrollbar";

// Style
import "react-perfect-scrollbar/dist/css/styles.css";
import List from "@/components/Comment/List";

export default function Home() {
  return (
    <div className="flex flex-row gap-8 p-8">
      <div className="flex h-[calc(100dvh-130px)] w-full flex-col gap-6 pb-6">
        <PerfectScrollbar>
          <div className="mr-6 flex flex-col gap-6">
            <Player />
            <div className="flex flex-row justify-between text-white">
              <Author />
              <Action />
            </div>
            <Divider />
            <Informations />
            <Divider />
            <List />
          </div>
        </PerfectScrollbar>
      </div>
      <Rightbar />
    </div>
  );
}
