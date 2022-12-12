import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useState } from "react";
import "./intro.style.css";
import video from "../../image/netflixvideo.mp4";

function Intro() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="intro bg-black w-full">
      <ReactPlayer
        className="video-intro w-full"
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        // url="https://vimeo.com/273686020"
        url={video}
      />
      <div className="info-wrap absolute p-10 top-60 left-16">
        <h1 className="text-white text-4xl select-none">The Avengers</h1>
        <p className="text-white pt-10  w-full select-none">
          Earth's mightiest heroes must come together and learn to fight as a
          team if they are going to stop the mischievous Loki and his alien army
          from enslaving humanity.
        </p>
      </div>
      {isMuted ? (
        <VscMute
          onClick={() => setIsMuted((prev) => !prev)}
          className="absolute h-10 w-10 p-2 top-80 right-20 text-white border-solid border-solid border-2 rounded-full cursor-pointer scale-100 hover:scale-125 icon-hover"
        />
      ) : (
        <VscUnmute
          onClick={() => setIsMuted((prev) => !prev)}
          className="absolute h-10 w-10 p-2 top-80 right-20 text-white border-solid border-solid border-2 rounded-full cursor-pointer scale-100 hover:scale-125 icon-hover"
        />
      )}
    </div>
  );
}

export default Intro;
