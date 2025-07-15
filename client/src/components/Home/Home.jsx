import React, { useEffect, useState } from "react";
import Card from "../card/Card.jsx";
import { useGetEventDataQuery } from "../../redux/Features/EventData/EventDateApi.js";

const Home = () => {
  const { data, error, isLoading } = useGetEventDataQuery({});
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    if (data) {
      setEventData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          <Card cards={eventData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
