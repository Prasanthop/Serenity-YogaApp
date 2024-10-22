import React from "react";
import yogaImage1 from "../assets/images/yoga-class.jpg"; // Replace with your images
import yogaImage2 from "../assets/images/yoga-workshop.jpg";

const Service = () => {
  return (
    <div className=" md:mx-auto p-8md:mx-auto max-w-6xl mt-56 md:mt-24 mx-2">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Yoga Classes</h2>
        <img
          src={yogaImage1}
          alt="Yoga Class"
          className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
        />
        <p className="text-lg mb-4">
          We offer a variety of yoga classes designed for all levels, from
          beginners to advanced practitioners. Our classes include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Hatha Yoga</li>
          <li>Vinyasa Yoga</li>
          <li>Yin Yoga</li>
          <li>Restorative Yoga</li>
        </ul>
        <p className="text-lg mb-4">
          Each class focuses on alignment, breath, and mindfulness, helping you
          deepen your practice.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Workshops and Events</h2>
        <img
          src={yogaImage2}
          alt="Yoga Workshop"
          className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
        />
        <p className="text-lg mb-4">
          Join us for special workshops and events that explore various aspects
          of yoga, mindfulness, and wellness.
        </p>
        <p className="text-lg mb-4">Upcoming workshops include:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Yoga for Stress Relief</li>
          <li>Mindfulness Meditation</li>
          <li>Yoga for Beginners</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Private Sessions</h2>
        <p className="text-lg mb-4">
          For personalized guidance, we offer private yoga sessions tailored to
          your individual needs and goals. Whether you’re looking to refine your
          practice or address specific challenges, our instructors are here to
          help.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Membership Plans</h2>
        <p className="text-lg mb-4">
          We offer flexible membership plans to fit your lifestyle. Choose from
          monthly or annual plans to enjoy unlimited access to classes and
          special discounts on workshops.
        </p>
      </div>
    </div>
  );
};

export default Service;
