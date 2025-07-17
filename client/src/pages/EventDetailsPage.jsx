import React, { useEffect, useState } from "react";
import MasterLayout from "../layout/MasterLayout";
import EventDetails from "../components/Details/EventDetails";
import { useParams } from "react-router-dom";
import { useGetEventDataByIdQuery } from "../redux/Features/EventData/EventDateApi";
import ErrorPage from "../components/Error/ErrorPage";
import Loader from "../Loader/Loader";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const { data, isLoading, Error } = useGetEventDataByIdQuery(id);

  useEffect(() => {
    (async () => {
      if (data) {
        setEventDetails(data);
      }
    })();
  }, [data]);
  if (isLoading) return <Loader />;
  if (Error) return <ErrorPage Error={"Details not found"} />;
  return (
    <MasterLayout>
      <EventDetails eventDetails={eventDetails} />
    </MasterLayout>
  );
};

export default EventDetailsPage;
