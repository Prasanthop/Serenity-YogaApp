import React from "react";

const Testimonial = ({ name, date, rating, text }) => {
  return (
    <div className=" mx-auto max-w-6xl mt-2 mb-2 border border-cyan-100 rounded-3xl p-8 bg-purple-100">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <span className="text-sm text-slate-500">{date}</span>
        </div>
        {rating}
      </div>
      <div className="mt-4">
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
