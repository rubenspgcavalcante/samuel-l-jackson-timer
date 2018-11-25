import React from "react";

export default ({ current, maxLength }) => {
  const currBlocks = current? current.toString().split("") : "";
  const blocks = [
    ...Array.from({ length: maxLength - currBlocks.length }).map(nil => 0),
    ...currBlocks
  ];

  return (
    <div id="timer" className="columns">
      {blocks.map((block, idx) => (
        <div key={idx} className="column">
          <b className="box has-background-dark has-text-white">{block}</b>
        </div>
      ))}
    </div>
  );
};
