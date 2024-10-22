import React from "react";
import Card from "../components/Card";
import data from "../assets/data";
import yogaImage from "../assets/images/yoga.jpg";
import Testimonial from "../components/Testimonial";
import testData from "../assets/testdata";

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl mt-56 md:mt-24">
      <div className="flex md:flex-row flex-col justify-between  p-8 bg-purple-100 rounded-3xl ">
        <div>
          <button className="rounded-full hover:bg-slate-100 border border-gray-700 bg-purple-100 p-2 text-xl">
            Mind-Body-Soul Balance
          </button>
          <h2 className="text-4xl leading-tight font-bold mb-5">
            Achieve balance in mind, body, and soul.
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            tenetur officia magnam sunt.
          </p>
        </div>
        <div>
          <img
            className="rounded shadow-md"
            src="https://marketplace.canva.com/28Tt0/MAEBkO28Tt0/1/tl/canva-yoga-day-concept.-multiple-exposure-image.-woman-practicing-yoga-at-sunset.-MAEBkO28Tt0.jpg"
            alt="Woman practicing yoga at sunset"
          />
        </div>
      </div>
      <div className="container px-4 ">
        <div className="flex md:flex-row flex-col mx-auto justify-center items-center gap-4 md:gap-8 mt-8 mb-5">
          {data.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              video={card.video}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col mx-auto justify-center items-center gap-4 md:gap-8 mt-8 mb-5">
          <img
            className="rounded-full p-5 w-1/2 shadow-md "
            src={yogaImage}
            alt="yoga"
          />
          <h2 className="text-2xl text-purple-400 shadow-inner p-2 rounded-xl font-bold">
            "It's not about being good at something. It's about being good to
            yourself." - Unknown.
          </h2>
        </div>
      </div>
      <div className="">
        {testData.slice(0, 3).map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            date={testimonial.date}
            rating={testimonial.rating}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
