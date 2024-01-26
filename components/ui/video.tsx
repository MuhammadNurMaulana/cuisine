"use client";
import { restaurantVideo } from "@/common/service/video/video";
import { Playfair_Display } from "next/font/google";
import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlay(!play);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleVideo}
        className={`absolute top-0 left-0 right-0 bottom-0 bg-black/60 font-bold text-2xl z-40 flex items-center justify-center flex-col gap-8 ${play ? "opacity-0" : "opacity-100"} transition-all duration-700`}
      >
        <div className="p-4 rounded-full bg-white text-primary">
          <FaPlay width={20} height={20} />
        </div>
        <h1 className={`${playfair.className} md:text-2xl text-white w-10/12 md:w-1/2 text-center`}>Feel the authentic & original taste from us</h1>
      </button>
      <video ref={videoRef} width="320" height="240" preload="auto" onEnded={() => setPlay(false)} className="w-full">
        <source src={restaurantVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
