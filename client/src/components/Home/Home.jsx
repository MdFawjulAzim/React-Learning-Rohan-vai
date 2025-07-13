import React from "react";
import Card from "../card/Card.jsx";

const card = [
  {
    image:
      "https://floral-mountain-2867.fly.storage.tigris.dev/media/events/banner/ONI_HASAN_KV_1200x630.png",
    title: "Azim vai ",
    description:
      "Access real-time sales reports and attendance data through our user-friendly dashboard, providing valuable insights at your fingertips. ",
  },
  {
    image:
      "https://floral-mountain-2867.fly.storage.tigris.dev/media/events/banner/ONI_HASAN_KV_1200x630.png",
    title: "Azim vai ",
    description:
      "Access real-time sales reports and attendance data through our user-friendly dashboard, providing valuable insights at your fingertips. ",
  },
  {
    image:
      "https://floral-mountain-2867.fly.storage.tigris.dev/media/events/banner/ONI_HASAN_KV_1200x630.png",
    title: "Azim vai ",
    description:
      "Access real-time sales reports and attendance data through our user-friendly dashboard, providing valuable insights at your fingertips. ",
  },
];

const Home = () => {
  return (
    <div>
      <div className="container w-max-[1140px] mx-auto">
        <div className="text-center mt-20 mb-20 ">
          <h1 className="text-5xl font-bold">Explore Upcomings!</h1>
          <p className="text-sm text-gray-600">
            Explore the Universe of Events at Your Fingertips.
          </p>
        </div>
        <div className="px-5 ">
          <Card cards={card} />
        </div>
      </div>
    </div>
  );
};

export default Home;
