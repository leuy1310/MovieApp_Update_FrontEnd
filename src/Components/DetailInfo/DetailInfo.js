import React, { useState } from "react";
import "./detaiil.style.css";

import { BsFillPlayFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";

import ReactPlayer from "react-player";
import Comment from "../Comment/Comment";

function Detailnfo(props) {
  const { movie } = props;
  const [show, setShow] = useState(false);

  const [block, setBlock] = useState(true);

  const removeImage = () => {
    setBlock(false);
  };

  const [block_2, setBlock_2] = useState(true);

  const removeImage_2 = () => {
    setBlock_2(false);
  };

  return (
    <div className="detail-info w-full h-full bg-black">
      <div
        className="detail relative h-screen"
        style={
          movie
            ? {
                backgroundImage: `url(${movie.backdrop_path})`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="item-content absolute left-16 text-white">
          <h1 className="text-4xl select-none">{movie && movie.name}</h1>
          <p className="pt-10 w-full select-none">{movie && movie.overview}</p>
          <div className="pt-10 flex">
            {show ? (
              <button
                className="p-2 text-black flex items-center bg-white rounded text-base w-32"
                onClick={() => setShow(!show)}
              >
                <AiFillCloseCircle className="text-base mr-1" />
                Close
              </button>
            ) : (
              <button
                className="p-2 text-black flex items-center bg-white rounded text-base w-32"
                onClick={() => setShow(!show)}
              >
                <BsFillPlayFill className="text-base mr-1" />
                Play Now
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="absolute video w-full top-24">
        {show && (
          <ReactPlayer
            url={movie.video_url}
            className="react-player"
            playing
            width="100%"
            height="460px"
            controls={true}
          />
        )}
      </div>
      <div className="w-full pt-10">
        {block && (
          <div className="relative">
            <img
              className="block mx-auto"
              src="https://i.imgur.com/mn0LR7G.gif"
            />
            <TiDeleteOutline
              onClick={removeImage}
              className="delete-icon text-white text-2xl absolute"
            />
          </div>
        )}
        {block_2 && (
          <div className="relative">
            <img
              className="block mx-auto"
              src="https://i.imgur.com/aZKZirV.gif"
            />
            <TiDeleteOutline
              onClick={removeImage_2}
              className="delete-icon-2 text-white text-2xl absolute"
            />
          </div>
        )}
      </div>
      {movie.id && <Comment></Comment>}
    </div>
  );
}

export default Detailnfo;
