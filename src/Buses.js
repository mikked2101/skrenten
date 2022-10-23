import React, { useEffect, useState } from "react";
import createEnturService from "@entur/sdk";
import { createGetDeparturesFromStopPlace } from "@entur/sdk/lib/departure";

const service = createEnturService({
  clientName: "mikkel-infoscreen",
});

function Buses() {
  const [busDepartures, setBusDepartures] = useState([]);

  useEffect(() => {
    service
      .getDeparturesFromStopPlace("NSR:StopPlace:42029", {
        limit: 5, // We are only interested in the next five departures
      })
      .then((departures) => setBusDepartures(departures));
  }, []);

  return (
    <div className="buses">
      <h2>Departures</h2>
      {busDepartures.map((departureData) => (
        <Departure key={departureData.serviceJourney.id} data={departureData} />
      ))}
    </div>
  );
}

export default Buses;

function Departure(props) {
  const { data } = props;
  let depTime = data.expectedDepartureTime;
  depTime = depTime.slice(11, 16);
  return (
    <div className="departure">
      {data.serviceJourney.journeyPattern.line.publicCode} -{" "}
      {data.destinationDisplay["frontText"]} : {depTime}
    </div>
  );
}
