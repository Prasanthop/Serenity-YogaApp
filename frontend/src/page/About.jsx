import React from "react";
import yogaImage from "../assets/images/yoga-center.jpg";

const About = () => {
  return (
    <div className="md:mx-auto max-w-6xl mt-56 md:mt-24 mx-2">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <img
        src={yogaImage}
        alt="Yoga Center"
        className="rounded-lg shadow-md mb-6 w-full h-64 object-cover"
      />
      <p className="text-xl mb-4">
        Welcome to SERENITY YOGA, a serene sanctuary where you can cultivate
        your practice and deepen your connection with your mind, body, and
        spirit. Founded in 2012, our center offers a variety of yoga styles
        tailored to meet the needs of practitioners at all levels.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        At SERENITY YOGA, our mission is to provide a welcoming environment that
        promotes wellness, mindfulness, and self-discovery through yoga. We
        believe that yoga is a journey towards balance and harmony, and we are
        dedicated to supporting you on your path.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Instructors</h2>
      <p className="text-lg mb-4">
        Our team of certified instructors brings a wealth of experience and
        passion to the mat. Each instructor has their unique style and approach,
        ensuring that you receive personalized guidance and support throughout
        your practice.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Jane Doe - Hatha Yoga Instructor</li>
        <li>John Smith - Vinyasa Yoga Instructor</li>
        <li>Emily Johnson - Restorative Yoga Instructor</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
      <p className="text-lg mb-4">
        We invite you to join our community and embark on a journey of
        self-exploration and growth. Whether you are a seasoned yogi or a
        complete beginner, you will find a place here at SERENITY YOGA.
      </p>
      <p className="text-lg mb-4">
        Visit us for a class or reach out for more information about our
        offerings. We look forward to welcoming you!
      </p>
    </div>
  );
};

export default About;
