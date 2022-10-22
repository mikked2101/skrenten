import React, { useState, useEffect } from "react";

function ShowerThoughts() {
  const [thought, setTought] = useState({});

  function getThought() {
    fetch("https://www.reddit.com/r/Showerthoughts/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((json) => setTought(json.data.children[0].data));
  }

  useEffect(() => {
    getThought();
  }, []);

  useEffect(() => {
    console.log(thought);
  }, [thought]);

  return (
    <div className="thought">
      <h2>Shower thought</h2>
      <p>{thought.title}</p>
    </div>
  );
}

export default ShowerThoughts;
