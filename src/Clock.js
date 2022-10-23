import React from "react";
import { DateTime } from "luxon";

function Clock() {
  const dateTime = DateTime.local().setLocale("en-NO");

  return (
    <div className="clock">
      <h1 className="time">
        {dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </h1>
      <h5 className="date">
        {dateTime.toLocaleString({
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h5>
      <h5 className="week">Week {DateTime.now().weekNumber}</h5>
    </div>
  );
}

export default Clock;
