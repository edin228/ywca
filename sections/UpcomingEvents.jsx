import React, { useState, useEffect } from "react";
import { UpcomingEventCard } from "../components";
import {BsCalendar3} from 'react-icons/bs'
import { getEvents } from "../services";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getEvents().then((result) => {
      setEvents(result);
      setDataLoaded(true);
    });
  }, []);

  return (
      <div className="flex flex-col h-full w-full">
          <h3 className="flex items-center justify-center py-2 rounded-t-lg font-semibold"><BsCalendar3/><span className="ml-3">Upcoming Events</span></h3>
          <div className="flex flex-col px-4 py-1">
          {
              events.map( (event,index) => (
                  <UpcomingEventCard event={event.node} />
              ))
          }    
          </div>
          
      </div>
  )
};

export default UpcomingEvents;
