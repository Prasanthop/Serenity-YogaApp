import React from "react";

const Card = ({ title, image, video }) => {
  const handleClick = () => {
    console.log(video);
    window.open(video, "_blank");
  };
  return (
    <div className="">
      <div className="bg-slate-500 rounded-lg shadow-md w-56 overflow-hidden">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={image}
          alt={title}
        />
        <div className="flex justify-between items-center p-4">
          <span className="text-white text-sm font-bold">{title}</span>
          <button
            onClick={handleClick}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow"
          >
            Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
