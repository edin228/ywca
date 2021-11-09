import React from "react";
import moment from "moment";

const UpcomingEventCard = ({ event }) => {
  return (
    <div className="bg-gray-50 flex justify-between w-full rounded-lg shadow-lg p-4">
      <div className="flex w-2/5 rounded-lg">
        <img className="rounded-lg" src={event.featuredImage.url} />
      </div>
      <div className="flex flex-col text-right justify-center items-end">
        <h3 className="font-semibold text-xl">{event.title}</h3>
        <p>{moment(event.date).format("ll")}</p>
        <div className="flex items-center">
          <p>{moment(event.start).format("h:mm a")}</p>
          <span>-</span>
          <p>{moment(event.end).format("h:mm a")}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
